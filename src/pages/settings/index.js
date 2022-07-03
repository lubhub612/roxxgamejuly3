import React, { useState, useEffect, useCallback, useContext } from "react";
import Image from "next/image";
import Switch from "react-switch";
import Layout from "../../components/Layout";
//import FormInputBox from '../../components/Shared/FormInputBox';
import FileUploader from "../../components/Shared/FileUploader";
import { ChangeIcon } from "../../components/Shared/SvgIcons";
import { useAuth } from "../../contexts/AuthContext";
import { useRoxGlobal } from "../../contexts/RoxGlobalContext";
import useToast from "../../hooks/useToast";
import { useCustomWallet } from "../../contexts/WalletContext";
//import GradientButton from '../../components/Shared/GradientButton';

import settingCover from "../../assets/images/setting-banner.png";
import profileLogo from "../../assets/images/profile-banner2.png";
import GlobalContext from "../../contexts/GlobalContext";
import { useRouter } from "next/router";
import ToastListener from "../../components/Toast";

export default function Settings() {
  const router = useRouter();
  const [profile, setProfile] = useState(true);
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");

  const {
    auth,
    setAuth,
    creatorSignupInfo,
    setCreatorSignupInfo,
    handleSubmitCreatorInfo,
    updateSessionProfile,
  } = useAuth();
  const { wallet } = useCustomWallet();
  const { addFileToIPFS, getIPFSUrl, invokeServer } = useRoxGlobal();
  // const { invokeServer } = useContext(GlobalContext);

  const { showLoading, hideLoading, toastInfo, toastError, toastSuccess } =
    useToast();

  const [name, setName] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [accountBio, setAccountBio] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameWarning, setUserNameWarning] = useState("");
  const [emailName, setEmailName] = useState("");
  const [emailNameWarning, setEmailNameWarning] = useState("");

  const [coverImage, setCoverImage] = useState(settingCover);
  const [coverFile, setCoverFile] = useState(null);
  const [coversImage, setCoversImage] = useState("");
  const [profileImage, setProfileImage] = useState(profileLogo);
  const [profilesImage, setProfilesImage] = useState("");

  const [profileFile, setProfileFile] = useState(null);
  const [notificationSettings, setNotificationSettings] = useState({
    New_Item_Sold: true,
    New_Bid_Activity: true,
    Auction_Expiration: false,
    Owned_Asset_Upadates: false,
    Like_On_Post: false,
    Comment_Post: false,
    HyperchainX_Newsletter: false,
  });

  const walletSessionKey = "walletHyperXV1";

  const changeCoverImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setCoverImage(objectUrl);
    setCoverFile(uploaded);
  };
  const changeProfileImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setProfileImage(objectUrl);
    setProfileFile(uploaded);
  };

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    setAccount(oldAddr);
    if (!oldAddr) {
      router.push("/");
    }
  }, [account]);

  useEffect(() => {
    AddressData();
  }, [account]);

  const AddressData = async () => {
    let walletData = await invokeServer("post", "/api/signin/addressdata", {
      address: account,
    });

    setName(walletData?.data?.data[0]?.businessName);
    setUserName(walletData?.data?.data[0]?.name);
    setAccountBio(walletData?.data?.data[0]?.bio);
    setEmailName(walletData?.data?.data[0]?.email);
    if (walletData?.data?.data[0]?.avatarURI) {
      setProfilesImage(walletData?.data?.data[0]?.avatarURI);
    }
    if (walletData?.data?.data[0]?.coverURI) {
      setCoversImage(walletData?.data?.data[0]?.coverURI);
    }

    if (walletData?.data?.data[0]?.notification) {
      let notif = JSON.parse(walletData?.data?.data[0]?.notification);
      setNotificationSettings((t) => {
        return {
          ...t,
          New_Item_Sold: notif?.New_Item_Sold || false,
          New_Bid_Activity: notif?.New_Bid_Activity || false,
          Auction_Expiration: notif?.Auction_Expiration || false,
          Owned_Asset_Upadates: notif?.Owned_Asset_Upadates || false,
          Like_On_Post: notif?.Like_On_Post || false,
          Comment_Post: notif?.Comment_Post || false,
          HyperchainX_Newsletter: notif?.HyperchainX_Newsletter || false,
        };
      });
    }
  };

  const updateProfileInformation = async () => {
    if (coverFile !== null) {
      showLoading("Uploading cover image to IPFS...");
      try {
        let res = await addFileToIPFS(coverFile);
        let imageURI = getIPFSUrl(res.path);

        showLoading("Updating profile information...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          coverURI: imageURI,
        });

        hideLoading();

        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     coverURI: imageURI,
          //   };
          // });

          // updateSessionProfile({
          //   coverURI: imageURI,
          // });

          toastInfo("Cover Image", r.data.msg);
        } else {
          toastError("Cover Image", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Cover Image", err.message);
      }
    }

    if (profileFile !== null) {
      showLoading("Uploading avatar image to IPFS...");
      try {
        let res = await addFileToIPFS(profileFile);
        let imageURI = getIPFSUrl(res.path);

        showLoading("Updating profile information...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          avatarURI: imageURI,
        });
        hideLoading();
        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     avatarURI: imageURI,
          //   };
          // });

          // updateSessionProfile({
          //   avatarURI: imageURI,
          // });
          toastInfo("Profile Image", r.data.msg);
        } else {
          toastError("Profile Image", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Profile Image", err.message);
      }
    }

    if (name !== "") {
      try {
        showLoading("Updating profile business name...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          businessName: name,
        });
        hideLoading();
        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     businessName: name,
          //   };
          // });
          // updateSessionProfile({
          //   businessName: name,
          // });
          toastInfo("Profile Business Name", r.data.msg);
        } else {
          toastError("Profile Business Name", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Profile Business Name", err.message);
      }
    }

    if (accountBio !== "") {
      try {
        showLoading("Updating profile bio...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          bio: accountBio,
        });

        hideLoading();
        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     bio: accountBio,
          //   };
          // });
          // updateSessionProfile({
          //   bio: accountBio,
          // });
          toastInfo("Profile Biography", r.data.msg);
        } else {
          toastError("Profile Biography", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Profile Biography", err.message);
      }
    }

    if (userName !== "") {
      try {
        showLoading("Updating profile username...");
        let r = await invokeServer("post", "/api/signin/address", {
          name: userName,
          address: account,
        });

        hideLoading();
        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     loggedUserName: userName,
          //   };
          // });
          // updateSessionProfile({
          //   loggedUserName: userName,
          // });
          toastInfo("Profile User Name", r.data.msg);
        } else {
          toastError("Profile User Name", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Profile User Name", err.message);
      }
    }

    if (emailName !== "") {
      try {
        showLoading("Updating profile email...");
        let r = await invokeServer("post", "/api/signin/address", {
          email: emailName,
          address: account,
        });

        hideLoading();
        if (r.data.result === 1) {
          // setAuth((t) => {
          //   return {
          //     ...t,
          //     loggedEmailName: emailName,
          //   };
          // });
          // updateSessionProfile({
          //   loggedEmailName: emailName,
          // });
          toastInfo("Profile Email", r.data.msg);
        } else {
          toastError("Profile Email", r.data.msg);
        }
      } catch (err) {
        hideLoading();

        toastError("Profile Email", err.message);
      }
    }
  };

  const updateNotificationInformation = async () => {
    let notif = JSON.stringify(notificationSettings);
    try {
      showLoading("Updating notification information...");

      let r = await invokeServer("post", "/api/signin/address", {
        address: account,
        notification: notif,
      });

      hideLoading();
      if (r.data.result === 1) {
        // setAuth((t) => {
        //   return {
        //     ...t,
        //     notification: notif,
        //   };
        // });
        // updateSessionProfile({
        //   notification: notif,
        // });
        toastInfo("Profile Notification", r.data.msg);
      } else {
        toastError("Profile Notification", r.data.msg);
      }
    } catch (err) {
      hideLoading();

      console.log(err.message);
      toastError("Profile Notification", err.message);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="settings">
          <div className="settings-sidebar">
            <ul>
              <li
                className={profile ? "active" : ""}
                onClick={() => setProfile((e) => !e)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6905 16.3784C18.717 15.1444 19.431 13.6814 19.772 12.1133C20.113 10.5452 20.071 8.91814 19.6495 7.3697C19.2281 5.82126 18.4396 4.39702 17.3507 3.21747C16.2619 2.03791 14.9047 1.13774 13.394 0.593109C11.8834 0.0484744 10.2637 -0.124604 8.67188 0.0885164C7.08011 0.301637 5.56313 0.894685 4.24926 1.81749C2.93539 2.7403 1.86329 3.96572 1.12365 5.39009C0.384015 6.81446 -0.00140285 8.39587 3.83677e-06 10.0005C0.000543632 12.3333 0.823267 14.5913 2.32381 16.3784L2.30951 16.3906C2.35955 16.4506 2.41673 16.502 2.4682 16.5613C2.53253 16.6348 2.60186 16.7041 2.66834 16.7755C2.86848 16.9927 3.07434 17.2012 3.29021 17.3969C3.35597 17.4569 3.42388 17.5126 3.49035 17.5697C3.71909 17.7669 3.95426 17.954 4.198 18.1283C4.22945 18.1497 4.25805 18.1775 4.2895 18.1997V18.1911C5.96362 19.3682 7.96076 20 10.0079 20C12.055 20 14.0521 19.3682 15.7262 18.1911V18.1997C15.7577 18.1775 15.7856 18.1497 15.8177 18.1283C16.0608 17.9533 16.2966 17.7669 16.5254 17.5697C16.5919 17.5126 16.6598 17.4562 16.7255 17.3969C16.9414 17.2005 17.1473 16.9927 17.3474 16.7755C17.4139 16.7041 17.4825 16.6348 17.5475 16.5613C17.5983 16.502 17.6562 16.4506 17.7062 16.3899L17.6905 16.3784ZM10.0072 4.28687C10.6433 4.28687 11.2652 4.47536 11.7942 4.82852C12.3232 5.18167 12.7354 5.68362 12.9789 6.27089C13.2223 6.85816 13.286 7.50438 13.1619 8.12782C13.0378 8.75127 12.7315 9.32394 12.2816 9.77342C11.8318 10.2229 11.2586 10.529 10.6347 10.653C10.0107 10.777 9.36397 10.7134 8.77622 10.4701C8.18847 10.2269 7.6861 9.81492 7.33266 9.28639C6.97922 8.75786 6.79057 8.13647 6.79057 7.50081C6.79057 6.64842 7.12946 5.83094 7.73268 5.22821C8.33591 4.62548 9.15406 4.28687 10.0072 4.28687ZM4.29378 16.3784C4.30618 15.4407 4.6876 14.5455 5.35551 13.8865C6.02343 13.2276 6.92413 12.8579 7.86276 12.8574H12.1515C13.0902 12.8579 13.9909 13.2276 14.6588 13.8865C15.3267 14.5455 15.7081 15.4407 15.7205 16.3784C14.1529 17.79 12.1174 18.5711 10.0072 18.5711C7.89689 18.5711 5.86145 17.79 4.29378 16.3784Z"
                    fill="#EEB80A"
                  ></path>
                </svg>
                Profile
              </li>
              <li
                className={!profile ? "active" : ""}
                onClick={() => setProfile((e) => !e)}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.88429 20.0001C10.2629 19.9914 10.6262 19.8491 10.9099 19.5983C11.1937 19.3475 11.3796 19.0045 11.4348 18.6299H8.27368C8.33046 19.0147 8.52508 19.3658 8.82135 19.6178C9.11762 19.8699 9.49536 20.0057 9.88429 20.0001Z"
                    fill="#AAFF26"
                  ></path>
                  <path
                    d="M18.6041 16.1242C18.0246 15.6076 17.5172 15.0153 17.0957 14.3633C16.6355 13.4634 16.3596 12.4806 16.2844 11.4727V8.50385C16.2819 8.14323 16.2498 7.78344 16.1882 7.4281C15.7152 7.33355 15.2606 7.16307 14.842 6.92329C15.0016 7.43703 15.0826 7.97192 15.0824 8.50986V11.4787C15.1561 12.7083 15.4943 13.9075 16.074 14.9944C16.4889 15.6518 16.9812 16.2571 17.5404 16.7973H2.14944C2.70859 16.2571 3.2009 15.6518 3.61582 14.9944C4.19552 13.9075 4.53376 12.7083 4.60742 11.4787V8.50385C4.60426 7.80833 4.73832 7.11903 5.00193 6.47539C5.26554 5.83176 5.65351 5.24645 6.14364 4.75297C6.63378 4.25949 7.21643 3.86753 7.85826 3.59955C8.50008 3.33156 9.18846 3.19281 9.88398 3.19124C10.9019 3.19205 11.8969 3.49308 12.7446 4.05664C12.6512 3.71348 12.5987 3.36045 12.5884 3.00494V2.62632C11.9609 2.31764 11.2867 2.11459 10.5931 2.02535V1.26812C10.5931 1.05534 10.5086 0.851269 10.3581 0.700809C10.2077 0.550348 10.0036 0.46582 9.79083 0.46582C9.57804 0.46582 9.37397 0.550348 9.22351 0.700809C9.07305 0.851269 8.98853 1.05534 8.98853 1.26812V2.0554C7.43544 2.27448 6.01405 3.04805 4.98677 4.23329C3.9595 5.41852 3.3957 6.93539 3.39947 8.50385V11.4727C3.3242 12.4806 3.04836 13.4634 2.58815 14.3633C2.17401 15.0138 1.67479 15.606 1.10375 16.1242C1.03964 16.1805 0.988263 16.2498 0.953031 16.3276C0.9178 16.4053 0.899522 16.4896 0.899414 16.5749V17.3923C0.899414 17.5516 0.962731 17.7045 1.07544 17.8172C1.18814 17.9299 1.341 17.9932 1.50039 17.9932H18.2075C18.3669 17.9932 18.5197 17.9299 18.6324 17.8172C18.7451 17.7045 18.8084 17.5516 18.8084 17.3923V16.5749C18.8083 16.4896 18.7901 16.4053 18.7548 16.3276C18.7196 16.2498 18.6682 16.1805 18.6041 16.1242Z"
                    fill="#EEB80A"
                  ></path>
                  <path
                    d="M17.0959 6.00974C18.7555 6.00974 20.1008 4.66441 20.1008 3.00487C20.1008 1.34533 18.7555 0 17.0959 0C15.4364 0 14.0911 1.34533 14.0911 3.00487C14.0911 4.66441 15.4364 6.00974 17.0959 6.00974Z"
                    fill="#EEB80A"
                  ></path>
                </svg>
                Notifications
              </li>
            </ul>
          </div>
          <div className="settings-content">
            {profile && (
              <div className="profile-setting">
                <h2>Profile Settings</h2>
                <div className="settings-content-profile-input">
                  <div className="input-list">
                    {/*   <form action="">  */}
                    <ul>
                      <li>
                        <label htmlFor="name">Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="username">Username*</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter username"
                          required
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="bio">Bio</label>
                        <textarea
                          name="bio"
                          placeholder="Tell the world your story!"
                          id="bio"
                          rows="8"
                          value={accountBio}
                          onChange={(e) => setAccountBio(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <label htmlFor="email">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          required
                          value={emailName}
                          onChange={(e) => setEmailName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="wallet">Wallet Address</label>
                        <input
                          name="wallet"
                          id="wallet"
                          type="text"
                          autoComplete="off"
                          //value="0x29ac6C0185Bd6D14Cf56F10646f0151669fa6753"
                          value={account}
                          onChange={() => {}}
                        />
                      </li>
                    </ul>
                    <button onClick={updateProfileInformation}>Save</button>
                    {/*}  <GradientButton
                  label={'Save'}
                  isNoPadding
                  height={'50px'}
                  width={'160px'}
                  fontSize={'18px'}
                  handleClick={updateProfileInformation}
            /> */}
                    {/*   </form>  */}
                  </div>
                  <div className="profile-setting-right">
                    <div className="profile-image">
                      <h4>Profile Image</h4>
                      <div className="profile-image-inner">
                        {!profilesImage || profileFile ? (
                          <Image
                            src={profileImage}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          profilesImage && <img src={profilesImage} />
                        )}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={changeProfileImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="profile-image">
                      <h4>Profile Banner</h4>
                      <div className="profile-image-inner-banner">
                        {!coversImage || coverFile ? (
                          <Image
                            src={coverImage}
                            alt="profile_cover"
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          coversImage && <img src={coversImage} />
                        )}
                        {/* <Image
                          src={coverImage}
                          alt="profile_cover"
                          layout="fill"
                          objectFit="cover"
                        /> */}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={changeCoverImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  <div className="input-upload">
                    <div className="profile-image">
                      <h4>Profile Image</h4>
                      <div className="profile-image-inner">
                        <Image
                          src="/images/profile-img.png"
                          alt="profile"
                          width={130}
                          height={130}
                        />
                        <div className="img-overlay">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-repeat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                              <path
                                fillRule="evenodd"
                                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                              />
                            </svg>
                            <p>Change</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="profile-image">
                      <h4>Profile Banner</h4>
                      <div className="profile-image-inner-banner">
                        <Image
                          src="/images/profile-banner.png"
                          alt="profile"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="img-overlay">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-repeat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                              <path
                                fillRule="evenodd"
                                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                              />
                            </svg>
                            <p>Change</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  */}
                </div>
              </div>
            )}
            {!profile && (
              <div className="setting-notification">
                <h2>Notifications</h2>
                <p>Edit your notification preferences</p>
                <ul>
                  <li>
                    <div>
                      <h4>New Item Sold</h4>
                      <p>When someone purchased one of your items</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          New_Item_Sold: !prev.New_Item_Sold,
                        }))
                      }
                      checked={notificationSettings.New_Item_Sold}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>New Bid Activity</h4>
                      <p>When someone bids on one of your items</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          New_Bid_Activity: !prev.New_Bid_Activity,
                        }))
                      }
                      checked={notificationSettings.New_Bid_Activity}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>Auction Expiration</h4>
                      <p>When an auction you created ends</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Auction_Expiration: !prev.Auction_Expiration,
                        }))
                      }
                      checked={notificationSettings.Auction_Expiration}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>Owned Asset Upadates</h4>
                      <p>
                        When a siginificant update occurs for one of the item
                        you have buyed
                      </p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Owned_Asset_Upadates: !prev.Owned_Asset_Upadates,
                        }))
                      }
                      checked={notificationSettings.Owned_Asset_Upadates}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>Like on Post</h4>
                      <p>When someone like on one of your items</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Like_On_Post: !prev.Like_On_Post,
                        }))
                      }
                      checked={notificationSettings.Like_On_Post}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>Comment Post</h4>
                      <p>When someone comment on one of your items</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Comment_Post: !prev.Comment_Post,
                        }))
                      }
                      checked={notificationSettings.Comment_Post}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>HyperchainX Newsletter</h4>
                      <p>Occasional updates from the DEXO team</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          HyperchainX_Newsletter: !prev.HyperchainX_Newsletter,
                        }))
                      }
                      checked={notificationSettings.HyperchainX_Newsletter}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                </ul>
                <button onClick={updateNotificationInformation}>
                  Update notification information
                </button>
              </div>
            )}
          </div>
        </div>
        <ToastListener />
      </div>
      <style jsx>
        {`
          .profile-image-inner-banner {
            position: relative;
            width: 100%;
            height: 150px;
          }

          .settings {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 50px;
            margin: 50px 0;
          }

          .settings-sidebar {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            border-radius: 10px;
          }

          .settings-content {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            border-radius: 10px;
            padding: 30px;
          }

          .settings-sidebar ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            padding: 15px 30px;
            cursor: pointer;
          }

          .settings-sidebar ul {
            margin-top: 30px;
          }

          .settings-sidebar ul li:hover {
            background: #eab5090f;
          }

          .settings-sidebar ul li.active {
            background: #eab5090f;
          }

          .settings-content h2 {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .settings-content-profile-input {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 60px;
          }

          .input-list input,
          .input-list textarea {
            width: 100%;
            background: transparent;
            background: var(--profileInputBg);
            border: 1px solid var(--profileInputBorder);
            padding: 15px;
            border-radius: 5px;
            font-size: 14px;
          }
          .input-list input:focus,
          .input-list textarea:focus {
            border: 1px solid #eeb807;
            outline: none;
          }
          .input-list ul {
            display: grid;
            gap: 30px;
          }

          .input-list ul li label {
            margin-bottom: 15px;
            display: block;
            font-size: 14px;
            font-weight: 500;
          }

          .settings-content-profile-input button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            padding: 18px 80px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 10px;
            margin-top: 50px;
            color: #fff;
            cursor: pointer;
          }
          .settings-content-profile-input button:hover {
            filter: brightness(1.15);
          }

          .profile-image h4 {
            font-weight: 500;
            margin-bottom: 20px;
          }

          .profile-image-inner {
            position: relative;
            width: 130px;
            height: 130px;
          }

          .img-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00000061;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s;
            cursor: pointer;
          }
          .profile-image-inner:hover .img-overlay,
          .profile-image-inner-banner:hover .img-overlay {
            visibility: visible;
            opacity: 1;
          }
          .profile-image {
            margin-bottom: 30px;
          }

          .profile-image-inner .img-overlay {
            border-radius: 100px;
          }
          .settings-content .setting-notification h2 {
            margin-bottom: 10px;
          }

          .setting-notification p {
            font-size: 12px;
            margin-bottom: 40px;
          }

          .setting-notification ul li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            gap: 30px;
          }

          .setting-notification ul li p {
            margin-bottom: 0;
            opacity: 0.5;
          }

          .setting-notification ul li h4 {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 2px;
          }
          .setting-notification button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            padding: 18px 30px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
          }
          .setting-notification button:hover {
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .settings {
              grid-template-columns: 1fr;
            }
            .settings-sidebar ul {
              margin: 10px 0;
            }
            .settings-content-profile-input {
              display: flex;
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </Layout>
  );
}
