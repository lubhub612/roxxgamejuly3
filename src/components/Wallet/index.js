import { useEffect, useState, useCallback } from 'react';
import { networkParams } from './networks';
import { toHex, truncateAddress } from '../../utils/addressUtils';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from './providerOptions';
import copyText from 'copy-text-to-clipboard'
import erc20Abi from '../../abi/WETH.json';
import BiWallet from '@meronex/icons/bi/BiWallet';
import Link from 'next/link';
import Image from 'next/image';

//import { useNavigate, useLocation, Link } from "react-router-dom";

//const Web3Modal = typeof window.Web3Modal.default;

/*const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
}); */

export default function Wallet(props) {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState(props.account);
  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');
  const [chainId, setChainId] = useState(props.chainId);
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState('');
  const [signedMessage, setSignedMessage] = useState('');
  const [verified, setVerified] = useState();
  const [url, setUrl] = useState();
  const [weth, setWeth] = useState('0');

  const [ProfileMenu, setProfileMenu] = useState(false);

  const walletSessionKey = 'walletHyperXV1';
  const _TOKEN_ADDRESS = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";


  const [wallet, setWallet] = useState({
    address: '',
    chainId: 0,
  });

  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const copyToClipboard = (text) => {
    copyText(text);
  }


  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      console.log(
        '🚀 ~ file: index.js ~ line 47 ~ connectWal ~ provider',
        provider
      );
      const library = new ethers.providers.Web3Provider(provider);
      console.log(
        '🚀 ~ file: index.js ~ line 49 ~ connectWal ~ library',
        library
      );
      const accounts = await library.listAccounts();
      console.log(
        '🚀 ~ file: index.js ~ line 51 ~ connectWal ~ accounts',
        accounts
      );
      
        
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
     
      setChainId(network.chainId);
      setWallet({
        address: accounts[0],
        chainId: network.chainId,
      });
      if (accounts) setUrl("https://polygonscan.com/address/" +accounts[0]);
      const providerM = new ethers.providers.Web3Provider(window.ethereum);
      const  TokenContract = new ethers.Contract( _TOKEN_ADDRESS,  erc20Abi, providerM.getSigner());
      console.log("A", TokenContract);
     /* await TokenContract.balanceOf("0x2b7e82256BBC76210409eDfEDD75aADe2103cf17").then(async (res)=>{
        await console.log("B", res);
        console.log(res._hex)
      }); */
      if (accounts){
        const usdtpoolBalance = await  TokenContract.balanceOf(accounts[0]);
        console.log("WETH", ethers.utils.formatUnits(usdtpoolBalance, 18)); 
        const WETH2 = ethers.utils.formatUnits(usdtpoolBalance, 18);
        const WETH1 = parseFloat(WETH2);
        const WETH = WETH1.toFixed(0);
        setWeth(WETH);
      }
        //console.log("WETH"); 
    } catch (error) {
      setError(error);
    }
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  //   const handleInput = (e) => {
  //     const msg = e.target.value;
  //     setMessage(msg);
  //   };

  const switchNetwork = async () => {
    ///const toNetworkId = 56;

    const toNetworkId = 89;

    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(toNetworkId) }],
      });
      setChainId(toNetworkId);

      setWallet({
        address: account,
        chainId: toNetworkId,
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: 'wallet_addEthereumChain',
            params: [networkParams[toHex(toNetworkId)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  //   const signMessage = async () => {
  //     if (!library) return;
  //     try {
  //       const signature = await library.provider.request({
  //         method: "personal_sign",
  //         params: [message, account]
  //       });
  //       setSignedMessage(message);
  //       setSignature(signature);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   const verifyMessage = async () => {
  //     if (!library) return;
  //     try {
  //       const verify = await library.provider.request({
  //         method: "personal_ecRecover",
  //         params: [signedMessage, signature]
  //       });
  //       setVerified(verify === account.toLowerCase());
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork('');
    setMessage('');
    setSignature('');
    setVerified(undefined);
  };

  const disconnect = async () => {
    web3Modal.clearCachedProvider();
    refreshState();
  };

  /*const closePOpUp =() => {
   alert(ProfileMenu);
   setProfileMenu(false);
   alert(ProfileMenu);
  }; */


  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    props.setAccount(account);
  }, [account]);

  useEffect(() => {
    props.setChainId(chainId);
  }, [chainId]);

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    if (wallet.address !== '' && wallet.address !== oldAddr) {
      window.localStorage.setItem(walletSessionKey, wallet.address);
      console.log(`wallet: ${oldAddr} => ${wallet.address}`);
    }
  }, [wallet.address]);

  const getWalletAddressBySessionKey = useCallback(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    return oldAddr;
  }, [walletSessionKey]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log('accountsChanged', accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
        console.log('Chain:', chainId);
      };

      const handleDisconnect = () => {
        console.log('disconnect', error);
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider]);

  return (
    <div className="d-flex">
      {account ? (
       <div className="profile-btn" > 
          <div className="profile-btn-img" onClick={() => setProfileMenu(true)}>
            <Image
              src="/images/profile.png"
              alt="profile"
              width={36}
              height={36}
            />
          </div>
          {ProfileMenu && (
            <div className="profile-side-menu"  >
              
             <svg
                onClick={() => setProfileMenu(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg> 
              <div className="profile-side-menu-header">
                <strong>
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={36}
                    height={36}
                  />
                 {/*} 0x...6753  {account}  */}
                 {account.substr(0,2) +"..."+account.slice(-4)}
                </strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-square-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </div>
              <ul className="profile-side-list">
                <li>
                  <Link href="#">My Items</Link>
                </li>
                <li>
                  <Link href="#">Activity</Link>
                </li>
                <li>
                  <Link href="#">Offers</Link>
                </li>
                <li>
                  <Link href="#">My Collections</Link>
                </li>
              </ul>
              <div className="profile-side-card">
                <div className="profile-side-card-header">
                  <span>Your Wallet</span>
                  <strong onClick={copyToClipboard(account)}>
                   {/*} 0x29...6753 */}
                   {account.substr(0,4) +"..."+account.slice(-4)}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-files"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                    </svg>
                  </strong>
                  <a href ={url} target="_blank"  rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
                </div>
                <ul>
                  <li>
                    <span>
                      <svg
                        viewBox="0 0 96 96"
                        focusable="false"
                        className="chakra-icon css-ze8g0y"
                      >
                        <g clipPath="url(#eth-clip-1)">
                          <path
                            d="M47.9907 0L47.3467 2.18771V65.6644L47.9907 66.307L77.4553 48.8902L47.9907 0Z"
                            fill="#757576"
                          ></path>
                          <path
                            d="M47.9912 0L18.5259 48.8902L47.9912 66.307V35.4971V0Z"
                            fill="#8E8E8E"
                          ></path>
                          <path
                            d="M47.9909 71.8882L47.6279 72.3309V94.9422L47.9909 96.0019L77.4735 54.4805L47.9909 71.8882Z"
                            fill="#5F5F5F"
                          ></path>
                          <path
                            d="M47.9912 96.0019V71.8882L18.5259 54.4805L47.9912 96.0019Z"
                            fill="#8E8E8E"
                          ></path>
                          <path
                            d="M47.9912 66.3059L77.4558 48.8892L47.9912 35.4961V66.3059Z"
                            fill="#5F5F5F"
                          ></path>
                          <path
                            d="M18.5259 48.8892L47.9912 66.3059V35.4961L18.5259 48.8892Z"
                            fill="#757576"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="eth-clip-1">
                            <rect width="96" height="96" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      ETH
                    </span>
                    <span>{weth}</span>
                  </li>
                  <li>
                    <span>
                      <svg
                        viewBox="0 0 96 96"
                        focusable="false"
                        className="chakra-icon css-ze8g0y"
                      >
                        <g>
                          <path
                            d="M47.9898 0L47.3457 2.18771V65.6644L47.9898 66.307L77.4543 48.8902L47.9898 0Z"
                            fill="#DF5960"
                          ></path>
                          <path
                            d="M47.9907 0L18.5254 48.8902L47.9907 66.307V35.4971V0Z"
                            fill="#EE9398"
                          ></path>
                          <path
                            d="M47.9899 71.8882L47.627 72.3309V94.9422L47.9899 96.0019L77.4726 54.4805L47.9899 71.8882Z"
                            fill="#DF5960"
                          ></path>
                          <path
                            d="M47.9907 96.0019V71.8882L18.5254 54.4805L47.9907 96.0019Z"
                            fill="#EE9398"
                          ></path>
                          <path
                            d="M47.9902 66.3059L77.4548 48.8892L47.9902 35.4961V66.3059Z"
                            fill="#CF373E"
                          ></path>
                          <path
                            d="M18.5254 48.8892L47.9907 66.3059V35.4961L18.5254 48.8892Z"
                            fill="#DF5960"
                          ></path>
                        </g>
                      </svg>
                      WETH
                    </span>
                    <span>{weth}</span>
                  </li>
                  <li>
                    <span>
                      <svg
                        viewBox="0 0 148 148"
                        focusable="false"
                        className="chakra-icon css-1rlm0ka"
                      >
                        <path
                          d="M33.379 43.7306C55.8133 21.4231 92.1867 21.4231 114.621 43.7306L134 63L114.621 82.2694C92.1867 104.577 55.8134 104.577 33.379 82.2694L14 63L33.379 43.7306Z"
                          fill="black"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 63.0304L44 19H104L148 63.0304L74 137L0 63.0304ZM108 46.9998C89.3047 28.2224 58.6953 28.2225 40 46.9999L24 63.0001L40 79.0002C58.6953 97.7776 89.3047 97.7775 108 79.0001L124 63.0001L108 46.9998Z"
                          fill="#0CE466"
                        ></path>
                        <path
                          d="M74 77C66.2712 77 60 70.7351 60 63C60 55.2649 66.2712 49 74 49C81.7288 49 88 55.2649 88 63C88 70.7351 81.7288 77 74 77Z"
                          fill="black"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M51 63C51 75.7077 61.3026 86 74 86C86.6974 86 97 75.7077 97 63C97 50.2923 86.6974 40 74 40C61.3026 40 51 50.2923 51 63ZM64 63C64 68.5251 68.4794 73 74 73C79.5206 73 84 68.5251 84 63C84 57.4749 79.5206 53 74 53C68.4794 53 64 57.4749 64 63Z"
                          fill="white"
                        ></path>
                      </svg>
                      ROX
                    </span>
                    <span>0</span>
                  </li>
                </ul>
                <button>Convert ETH/WETH</button>
              </div>
              <div className="profile-side-card">
                <ul>
                  <li>
                    <span>
                      <svg
                        viewBox="0 0 148 148"
                        focusable="false"
                        className="chakra-icon css-1rlm0ka"
                      >
                        <path
                          d="M33.379 43.7306C55.8133 21.4231 92.1867 21.4231 114.621 43.7306L134 63L114.621 82.2694C92.1867 104.577 55.8134 104.577 33.379 82.2694L14 63L33.379 43.7306Z"
                          fill="black"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 63.0304L44 19H104L148 63.0304L74 137L0 63.0304ZM108 46.9998C89.3047 28.2224 58.6953 28.2225 40 46.9999L24 63.0001L40 79.0002C58.6953 97.7776 89.3047 97.7775 108 79.0001L124 63.0001L108 46.9998Z"
                          fill="#0CE466"
                        ></path>
                        <path
                          d="M74 77C66.2712 77 60 70.7351 60 63C60 55.2649 66.2712 49 74 49C81.7288 49 88 55.2649 88 63C88 70.7351 81.7288 77 74 77Z"
                          fill="black"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M51 63C51 75.7077 61.3026 86 74 86C86.6974 86 97 75.7077 97 63C97 50.2923 86.6974 40 74 40C61.3026 40 51 50.2923 51 63ZM64 63C64 68.5251 68.4794 73 74 73C79.5206 73 84 68.5251 84 63C84 57.4749 79.5206 53 74 53C68.4794 53 64 57.4749 64 63Z"
                          fill="white"
                        ></path>
                      </svg>
                      Listing & Trading
                    </span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>
                      <svg
                        viewBox="0 0 96 96"
                        focusable="false"
                        className="chakra-icon css-ze8g0y"
                      >
                        <g>
                          <path
                            d="M47.9898 0L47.3457 2.18771V65.6644L47.9898 66.307L77.4543 48.8902L47.9898 0Z"
                            fill="#DF5960"
                          ></path>
                          <path
                            d="M47.9907 0L18.5254 48.8902L47.9907 66.307V35.4971V0Z"
                            fill="#EE9398"
                          ></path>
                          <path
                            d="M47.9899 71.8882L47.627 72.3309V94.9422L47.9899 96.0019L77.4726 54.4805L47.9899 71.8882Z"
                            fill="#DF5960"
                          ></path>
                          <path
                            d="M47.9907 96.0019V71.8882L18.5254 54.4805L47.9907 96.0019Z"
                            fill="#EE9398"
                          ></path>
                          <path
                            d="M47.9902 66.3059L77.4548 48.8892L47.9902 35.4961V66.3059Z"
                            fill="#CF373E"
                          ></path>
                          <path
                            d="M18.5254 48.8892L47.9907 66.3059V35.4961L18.5254 48.8892Z"
                            fill="#DF5960"
                          ></path>
                        </g>
                      </svg>
                      Staking
                    </span>
                    <span>0</span>
                  </li>
                </ul>
                <button>ROX Rewards</button>
              </div>
              <div onClick={disconnect} className="discount-btn">Disconnect</div>
            {/*}  <div className="discount-btn">Disconnect</div> */}
           {/*} <div > <a onClick={disconnect} className="discount-btn"> Disconnect </a> </div> */}
            </div>
          )}
        </div>
      ) : (
       <h6></h6> 
      )}
      {!account ? (
        <a onClick={connectWallet} className="btn">
          Connect
        </a>
      ) : chainId === 0x89 ? (
        <></>
      ) : (
        ''
      )}
    </div>
  );
}
