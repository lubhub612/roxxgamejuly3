import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import HeaderTop from './HeaderTop';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import MenuIcon from '../assets/images/menu.svg';
import Wallet from '../components/Wallet';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('light');
  const [settingMenu, setSettingMenu] = useState(false);
  const [language, setLanguage] = useState(false);
  const [loginBox, setLoginBox] = useState(false);
  const [isSidebar, initSidebar] = useState(false);
  const [mobMenu, setmobMenu] = useState(false);
  const [account, setAccount] = useState('');
  const [chainId, setChainId] = useState('');

  const toggleLanguage = () => {
    setSettingMenu(false);
    setLanguage(true);
  };
  const toggleLanguageBack = () => {
    setSettingMenu(true);
    setLanguage(false);
  };

  const openSidebar = (isSidebar) => {
    // console.log(isSidebar)
    return initSidebar(!isSidebar);
  };

  const node = useRef();

  const trackSidebar = (e) => {
    if (node.current.contains(e.target)) {
      // inside scope click
      return;
    }
    // outside scope click
    initSidebar(false);
  };

  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const router = useRouter();
  if (!mounted) return null;
  return (
    <>
      <Head>
        <title>Horse Racing</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTop />
      <header>
        <div className="logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" layout="fill" />
          </Link>
        </div>
        <div className="nav">
          <ul>
            <li className={router.pathname === '/events' ? 'active' : ''}>
              <Link href="/events">
                <a>
                  Horse Racing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/racecourses">
                    <a>Racecourses</a>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <a>Races</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments">
                    <a>Championship</a>
                  </Link>
                </li>
                <li>
                  <Link href="/upcoming">
                    <a>Upcoming/Live</a>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <a>Results</a>
                  </Link>
                </li>
                <li>
                  <Link href="/winnings">
                    <a>Your Race Results</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={router.pathname === '/marketplace' ? 'active' : ''}>
              <Link href="/marketplace">
                <a>
                  Marketplace
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/marketplace">
                    <a>Explore</a>
                  </Link>
                </li>
                <li>
                  <Link href="/genesis">
                    <a>Genesis Racehorses</a>
                  </Link>
                </li>
                <li>
                  <Link href="/roster">
                    <a>New Racehorses</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={router.pathname === '/rox' ? 'active' : ''}>
              <Link href="#">
                <a>
                  $ROX COIN $0.28
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/swap">
                    <a>Swap</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vaults">
                    <a>Vaults</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vesting">
                    <a>Vesting</a>
                  </Link>
                </li>
                <li>
                  <Link href="/stake">
                    <a>Stake</a>
                  </Link>
                </li>
                <li>
                  <Link href="/boost">
                    <a>Boost</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={router.pathname === '/stud' ? 'active' : ''}>
              <Link
                target="_blank"
                href="https://docs.rox.run/introduction/rox-horserace-game"
              >
                <a>Guide</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="action-btn">
          {/* <button
            onClick={() => setLoginBox(true)}
            className="button-secondary"
          >
            Login
          </button>
          <button onClick={() => setLoginBox(true)}>Sign Up</button> */}
          <div className="topbar">
            <div className="connect-wallet-btn">
              <img
                src={MenuIcon}
                className="icon-mob"
                alt=""
                onClick={setmobMenu}
              />
              <h2>
                <i></i>
              </h2>
              <ul className="d-flex">
                <li className="menu__icon" onClick={setmobMenu}>
                  <img src={MenuIcon} className="icon-tab" alt="" />
                </li>

                <li>
                  <Wallet
                    account={account}
                    setAccount={setAccount}
                    chainId={chainId}
                    setChainId={setChainId}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="theme-switch"
            onClick={() => setSettingMenu((e) => !e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
          </div>
          {settingMenu && (
            <div className="setting-menus">
              <div className="setting-menu-header">
                <h2>Settings</h2>
                <span onClick={() => setSettingMenu(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </div>
              <div className="setting-menu-content">
                <div
                  className="setting-menu-content-item"
                  onClick={switchTheme}
                >
                  <span className="theme-switch-icon">
                    {theme === 'light' ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-brightness-high"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-toggle-off"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          width="106"
                          height="107"
                          viewBox="0 0 106 107"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100.973 64.5405C97.9702 65.1552 94.9107 65.4612 91.8448 65.4538C79.6731 65.4408 68.0034 60.6232 59.3972 52.0575C50.7898 43.4916 45.949 31.8781 45.9351 19.7639C45.9193 14.9084 46.7047 10.0826 48.2605 5.4802C48.7356 4.07465 48.4226 2.5245 47.4397 1.41086C46.4559 0.297359 44.9503 -0.209785 43.4897 0.080398C30.9705 2.60318 19.747 9.44096 11.7957 19.3892C3.84419 29.3374 -0.325706 41.7584 0.0198777 54.467C0.366439 67.1735 5.2053 79.353 13.687 88.8565C22.1687 98.3599 33.7478 104.584 46.3851 106.429C59.0236 108.273 71.9092 105.621 82.7775 98.9391C93.644 92.2582 101.794 81.975 105.792 69.9018C106.256 68.4935 105.931 66.9442 104.938 65.8381C103.945 64.7321 102.434 64.2379 100.975 64.5401L100.973 64.5405ZM54.2821 98.6832C43.492 98.6943 33.0417 94.9216 24.768 88.0283C16.4942 81.135 10.9239 71.5622 9.03544 60.9895C7.14701 50.4164 9.06152 39.5197 14.4427 30.2101C19.8229 20.9015 28.3268 13.7775 38.4594 10.0865C36.5617 20.4954 37.7765 31.23 41.9522 40.9585C46.1288 50.6869 53.0825 58.9813 61.9515 64.812C70.8207 70.6437 81.215 73.7553 91.8448 73.7618C92.9758 73.7618 94.1068 73.7284 95.221 73.6579H95.2219C91.4012 81.1985 85.5496 87.5317 78.3193 91.9513C71.089 96.371 62.7666 98.7018 54.2811 98.6833L54.2821 98.6832Z"
                            fill="#ECB60D"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-toggle-on"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                        </svg>
                      </>
                    )}
                  </span>
                  <h3>Switch Theme</h3>
                  <p>Theme for the web</p>
                </div>
                <div
                  className="setting-menu-content-item"
                  onClick={toggleLanguage}
                >
                  <span className="setting-menu-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 32C24.8365 32 32 24.8365 32 16C32 7.16344 24.8365 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8365 7.16344 32 16 32Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M15.3043 16H31.9999C31.9999 14.5559 31.8074 13.1569 31.4488 11.8261H15.3043V16Z"
                        fill="#D80027"
                      />
                      <path
                        d="M15.3043 7.65215H29.6516C28.6721 6.0539 27.4198 4.64121 25.9597 3.47821H15.3043V7.65215Z"
                        fill="#D80027"
                      />
                      <path
                        d="M16 32C19.7656 32 23.2267 30.6985 25.9598 28.5218H6.04028C8.77341 30.6985 12.2345 32 16 32Z"
                        fill="#D80027"
                      />
                      <path
                        d="M2.34833 24.3478H29.6516C30.4379 23.0648 31.0477 21.6623 31.4488 20.1739H0.551147C0.95221 21.6623 1.56202 23.0648 2.34833 24.3478Z"
                        fill="#D80027"
                      />
                      <path
                        d="M7.4115 2.49862H8.86956L7.51331 3.48394L8.03137 5.07825L6.67519 4.09294L5.319 5.07825L5.7665 3.70094C4.57237 4.69562 3.52575 5.861 2.66325 7.1595H3.13044L2.26712 7.78669C2.13262 8.01106 2.00362 8.239 1.88 8.47031L2.29225 9.73912L1.52312 9.18031C1.33194 9.58537 1.15706 9.99956 0.999875 10.4224L1.45406 11.8204H3.13044L1.77419 12.8057L2.29225 14.4L0.936062 13.4147L0.123687 14.0049C0.042375 14.6586 0 15.3243 0 16H16C16 7.1635 16 6.12175 16 0C12.8392 0 9.89281 0.916875 7.4115 2.49862ZM8.03137 14.4L6.67519 13.4147L5.319 14.4L5.83706 12.8057L4.48081 11.8204H6.15719L6.67519 10.2261L7.19319 11.8204H8.86956L7.51331 12.8057L8.03137 14.4ZM7.51331 8.14481L8.03137 9.73912L6.67519 8.75381L5.319 9.73912L5.83706 8.14481L4.48081 7.1595H6.15719L6.67519 5.56519L7.19319 7.1595H8.86956L7.51331 8.14481ZM13.7705 14.4L12.4143 13.4147L11.0581 14.4L11.5762 12.8057L10.2199 11.8204H11.8963L12.4143 10.2261L12.9323 11.8204H14.6087L13.2524 12.8057L13.7705 14.4ZM13.2524 8.14481L13.7705 9.73912L12.4143 8.75381L11.0581 9.73912L11.5762 8.14481L10.2199 7.1595H11.8963L12.4143 5.56519L12.9323 7.1595H14.6087L13.2524 8.14481ZM13.2524 3.48394L13.7705 5.07825L12.4143 4.09294L11.0581 5.07825L11.5762 3.48394L10.2199 2.49862H11.8963L12.4143 0.904312L12.9323 2.49862H14.6087L13.2524 3.48394Z"
                        fill="#0052B4"
                      />
                    </svg>
                    <strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </strong>
                  </span>
                  <h3>Language</h3>
                  <p>Choose language</p>
                </div>
                <div className="setting-menu-content-item">
                  <Link href="https://docs.rox.run/">
                    <a target="_blank">
                      <span className="setting-menu-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="30"
                          viewBox="0 0 34 30"
                          fill="none"
                        >
                          <path
                            d="M31.125 21.8651V8.91337L32.3905 8.44081C32.757 8.30387 33 7.95375 33 7.5625C33 7.17125 32.757 6.82113 32.3905 6.68425L17.328 1.05925C17.1165 0.98025 16.8836 0.98025 16.6721 1.05925L1.60956 6.68425C1.243 6.82113 1 7.17125 1 7.5625C1 7.95375 1.243 8.30387 1.6095 8.44075L7.85125 10.7717C6.37356 14.9411 6.74638 17.1344 6.6875 17.875C6.6875 18.1861 6.84181 18.4769 7.09937 18.6513C7.357 18.8257 7.68425 18.8609 7.97312 18.7454C7.99494 18.7367 10.1741 17.875 12.3125 17.875C14.2907 17.875 16.3945 19.5288 16.4143 19.5446C16.7568 19.8184 17.2432 19.8184 17.5856 19.5446C18.1661 19.0802 20.0346 17.875 21.6875 17.875C23.8141 17.875 26.0057 18.7371 26.0268 18.7454C26.3156 18.8609 26.643 18.8257 26.9006 18.6513C27.1582 18.4769 27.3125 18.1861 27.3125 17.875C27.2581 17.1906 27.6187 14.9193 26.1487 10.7717L29.25 9.61356V21.8651C28.768 22.1255 28.3476 22.5927 28.0231 23.2416C27.6052 24.0775 27.375 25.1681 27.375 26.3125V28.1875C27.375 28.7052 27.7948 29.125 28.3125 29.125H32.0625C32.5802 29.125 33 28.7052 33 28.1875V26.3125C33 25.1681 32.7698 24.0775 32.3519 23.2416C32.0274 22.5927 31.607 22.1255 31.125 21.8651ZM17 2.93825L29.3827 7.5625C28.1053 8.03956 18.2362 11.7251 17 12.1868C15.7638 11.7251 5.89469 8.03956 4.61725 7.5625L17 2.93825ZM25.4298 16.5764C24.4684 16.3031 23.0871 16 21.6875 16C19.7698 16 17.9142 17.0511 17 17.66C16.0858 17.0511 14.2301 16 12.3125 16C10.913 16 9.53162 16.3031 8.57019 16.5764C8.62413 14.6704 8.96263 13.2509 9.60787 11.4277L16.6721 14.0658C16.8835 14.1448 17.1165 14.1448 17.328 14.0658L24.3922 11.4277C25.0374 13.2509 25.3758 14.6705 25.4298 16.5764ZM31.125 27.25H29.25V26.3125C29.25 25.466 29.4141 24.6523 29.7002 24.0801C29.9398 23.6009 30.155 23.5 30.1875 23.5C30.22 23.5 30.4352 23.6009 30.6748 24.0801C30.9609 24.6523 31.125 25.466 31.125 26.3125V27.25Z"
                            fill="#ECB60D"
                            stroke="#ECB60D"
                            strokeWidth="0.2"
                          />
                        </svg>
                        <strong>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </strong>
                      </span>
                      <h3>Tutorials</h3>
                      <p>How to use</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {language && (
            <div className="setting-menu-language">
              <div className="setting-menu-header">
                <span onClick={toggleLanguageBack}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                    />
                  </svg>
                </span>
                <h2>Languages</h2>
                <span onClick={() => setLanguage(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </span>
              </div>
              <div className="setting-menu-language-list">
                <ul>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/en.svg"
                      alt="en"
                      width={32}
                      height={32}
                    />
                    English
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/de.svg"
                      alt="de"
                      width={32}
                      height={32}
                    />
                    Deutsch
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/ko.svg"
                      alt="ko"
                      width={32}
                      height={32}
                    />
                    한국어
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/zh.svg"
                      alt="zh"
                      width={32}
                      height={32}
                    />
                    中国
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/ru.svg"
                      alt="ru"
                      width={32}
                      height={32}
                    />
                    Русский
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/es.svg"
                      alt="es"
                      width={32}
                      height={32}
                    />
                    Español
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/tr.svg"
                      alt="tr"
                      width={32}
                      height={32}
                    />
                    Türkce
                  </li>
                  <li onClick={toggleLanguageBack}>
                    <Image
                      src="/images/language/fr.svg"
                      alt="fr"
                      width={32}
                      height={32}
                    />
                    Français
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div
            className="mobile-menu-bar"
            onClick={() => {
              openSidebar(isSidebar);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
        {loginBox && (
          <div className="loginBox">
            <strong onClick={() => setLoginBox(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </strong>
            <h2>Start Playing XXX RUN</h2>
            <p>Select an option to login or connect your wallet to the game.</p>
            <h3>
              <Link href="https://metamask.io/">
                <a>What is Metamask?</a>
              </Link>
            </h3>
            <ul>
              <li>
                <Link href="#">
                  <a>
                    <span>
                      <h4>
                        Metamask <span>POPULAR</span>
                      </h4>
                      <p>Browser Extension</p>
                    </span>
                    <Image
                      src="/images/metamask.svg"
                      alt="metamask"
                      width="42"
                      height="40"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <span>
                      <h4>Connect using Social</h4>
                      <p>
                        Login with the same social account you used when you
                        signed up with XXX RUN
                      </p>
                    </span>
                    <Image
                      src="/images/social.svg"
                      alt="metamask"
                      width="41"
                      height="40"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <span>
                      <h4>Sign In Via Magic Link</h4>
                      <p>Sign in with your email</p>
                    </span>
                    <Image
                      src="/images/link.svg"
                      alt="metamask"
                      width="41"
                      height="40"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div
          ref={node}
          className="sidebar-block"
          style={{ left: isSidebar ? '0' : '-400px' }}
        >
          <ProSidebar>
            <span
              className="side-menu-close-icon"
              onClick={() => {
                openSidebar(isSidebar);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </span>
            <Menu>
              <MenuItem>
                <Link href="/marketplace">
                  <a>Marketplace</a>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/stud">
                  <a>Breeding</a>
                </Link>
              </MenuItem>
              <SubMenu title="Horse Racing">
                <MenuItem>
                  <Link href="/events">
                    <a>Upcoming</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/tournaments">
                    <a>Championship</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/upcoming">
                    <a>Running</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/results">
                    <a>Results</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/winnings">
                    <a>Your Race Results</a>
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu title="Learn">
                <MenuItem>
                  <Link href="/genesis">
                    <a>Genesis Racehorses</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/roster">
                    <a>Roster</a>
                  </Link>
                </MenuItem>
              </SubMenu>
              <SubMenu title="$ROX">
                <MenuItem>
                  <Link href="/swap">
                    <a>Swap</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/vaults">
                    <a>Vaults</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/vesting">
                    <a>Vesting</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/stake">
                    <a>Stake</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/boost">
                    <a>Boost</a>
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
        </div>
      </header>

      <style jsx>
        {`
          .sidebar-block {
            position: fixed;
            left: 0;
            transition: all 0.35s ease-out;
            height: 100vh;
            position: fixed;
            top: 0;
            z-index: 9999;
          }
          .mobile-menu-bar {
            display: none;
          }
          .logo {
            position: relative;
            width: 152px;
            height: 41px;
            cursor: pointer;
          }

          header {
            display: grid;
            grid-template-columns: 1fr 5fr 3fr;
            padding: 0 30px;
            align-items: center;
            background: #237b45;
            position: relative;
          }
          .header-overlap {
            position: absolute;
            top: 32px;
            width: 100%;
            background: #ffffff0f;
            border-bottom: none;
          }
          li {
            display: inline-block;
            position: relative;
          }
          .header-overlap .nav a {
            color: #fff;
          }
          .nav a {
            color: #fff;
            opacity: 0.8;
            text-transform: uppercase;
            font-weight: 600;
            padding: 30px 0;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .nav li {
            margin: 0 18px;
          }
          .nav ul li a {
            transition: 0.3s;
            border-bottom: 2px solid transparent;
          }
          .nav ul li.active > a {
            border-bottom: 2px solid #f0b90c;
          }
          .nav ul li:hover ul a,
          .nav ul ul li a {
            border-bottom: none;
          }
          .nav ul li:hover a {
            border-bottom: 2px solid #f0b90c;
          }
          .nav li:hover .dropdown {
            visibility: visible;
            opacity: 1;
            max-height: 500px;
            transition: max-height 0.25s ease-in;
          }
          .loginBox strong {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
          }

          .loginBox strong svg {
            width: 20px;
            height: 20px;
          }
          button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px #f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: 1px solid #eab50d;
            font-size: 18px;
            font-weight: 500;
            padding: 8px 25px;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 1px;
          }
          button.button-secondary {
            background: transparent;
            color: #eab50d;
          }
          button:hover {
            filter: brightness(1.15);
          }
          .nav .dropdown {
            position: absolute;
            left: 0;
            top: 83px;
            background: #237b45;
            min-width: max-content;
            padding: 10px 0px;
            visibility: hidden;
            opacity: 0;
            z-index: 99;
            max-height: 0;
            transition: max-height 0.15s ease-out;
            overflow: hidden;
            transition: 0.3s;
          }
          .header-overlap .nav .dropdown {
            background: #302f4be8;
          }
          .header-overlap .mobile-nav-bar svg {
            color: #fff;
          }
          .mobile-nav .dropdown {
            display: none;
          }
          .nav .dropdown a {
            display: block;
            padding: 12px 30px;
          }

          .nav .dropdown li {
            display: block;
            margin: 0;
          }

          .nav .dropdown a:hover {
            background: #136030;
          }
          .header-overlap .nav .dropdown a:hover {
            background: #ffffff26;
          }
          .action-btn {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: #fff;
            gap: 15px;
            font-weight: 500;
            font-size: 16px;
          }
          .action-btn span {
            font-size: 14px;
          }
          .header-overlap .action-btn {
            color: #fff;
          }
          .mobile-nav-bar {
            display: none;
          }
          .theme-switch svg path {
            fill: #e7b209;
          }
          .theme-switch {
            cursor: pointer;
          }
          .theme-switch svg {
            width: 26px;
            height: auto;
            vertical-align: middle;
            margin-left: 20px;
          }
          .loginBox ul li h4 span {
            background: linear-gradient(
              95.21deg,
              #f5841f -51.1%,
              #9e3e29 100.68%
            );
            border-radius: 4px;
            color: #fff;
            margin-left: 10px;
            font-size: 10px;
            padding: 2px 11px;
            vertical-align: middle;
          }
          .loginBox {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 450px;
            background: var(--background);
            border-radius: 10px;
            padding: 30px;
            z-index: 99999;
          }
          .connect-wallet-btn {
            display: flex;
          }
          .loginBox h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
          }

          .loginBox p {
            font-size: 14px;
            opacity: 0.5;
          }

          .loginBox h3 a {
            color: #eeb80d;
            display: block;
            margin: 15px 0;
            font-size: 14px;
          }

          .loginBox ul li a {
            display: grid;
            align-items: center;
            justify-content: space-between;
            background: var(--bigCtaBg);
            margin: 5px 0;
            border-radius: 5px;
            padding: 15px;
            color: var(--colorWhite);
            gap: 50px;
            grid-template-columns: 6fr 1fr;
          }

          .loginBox ul li {
            width: 100%;
          }

          .loginBox ul li a:hover {
            background: var(--studListHover);
          }

          .setting-menus {
            position: absolute;
            right: 20px;
            top: 85px;
            width: 650px;
            background: var(--background);
            padding: 20px;
            border-radius: 10px;
            z-index: 9999;
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
          }

          .setting-menu-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
          }

          .setting-menu-content-item {
            background: var(--settingItemBg);
            border-radius: 10px;
            padding: 15px;
            cursor: pointer;
          }
          .setting-menu-content-item a {
            color: #fff;
          }
          .setting-menu-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
          }
          .setting-menu-header {
            color: var(--colorWhite);
          }
          .setting-menu-header h2 {
            font-size: 16px;
            font-weight: 500;
          }

          .setting-menu-content-item h3 {
            font-size: 14px;
            font-weight: 500;
            color: var(--colorWhite);
          }

          .setting-menu-content-item p {
            font-size: 10px;
            color: var(--colorWhite);
            opacity: 0.5;
          }

          .setting-menu-content-item span.theme-switch-icon {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .setting-menu-content-item span.theme-switch-icon svg {
            width: 26px;
            height: 26px;
            color: #ecb60d;
          }

          .setting-menu-content-item span {
            margin-bottom: 40px;
          }

          .setting-menu-content-item .setting-menu-arrow {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .setting-menu-content-item span svg {
            width: 26px;
            height: 26px;
            color: var(--colorWhite);
          }
          .setting-menu-header svg {
            cursor: pointer;
          }
          .setting-menu-content-item span strong svg {
            width: 14px;
            height: 14px;
          }
          .setting-menu-content-item .setting-menu-gas {
            display: flex;
            gap: 15px;
          }

          .setting-menu-content-item .setting-menu-gas strong {
            font-weight: 500;
            color: #edb70b;
          }
          .setting-menu-language {
            position: absolute;
            right: 20px;
            top: 85px;
            width: 650px;
            background: var(--background);
            padding: 20px;
            border-radius: 10px;
            z-index: 999;
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
          }

          .setting-menu-language-list ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
            padding: 10px 10px;
          }

          .setting-menu-language-list ul li {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px 20px;
            border-radius: 10px;
            cursor: pointer;
            color: var(--colorWhite);
          }

          .setting-menu-language-list ul li:hover {
            background: #32323299;
          }

          .setting-menu-header span:first-child svg {
            width: 24px;
            height: 24px;
          }
          @media screen and (max-width: 1400px) {
            .nav .dropdown {
              top: 80px;
            }
            button {
              font-size: 12px;
            }
            .nav a {
              font-size: 12px;
              padding: 30px 0px;
            }
          }
          @media screen and (max-width: 1220px) {
            .nav li {
              margin: 0 10px;
            }
            .action-btn span {
              font-size: 12px;
            }
            button {
              font-size: 10px;
              padding: 8px 12px;
            }
          }
          @media screen and (max-width: 1100px) {
            .nav li {
              margin: 0 10px;
            }
            .nav li a {
              font-size: 10px;
            }
            .action-btn span {
              font-size: 10px;
            }
            button {
              font-size: 10px;
              padding: 8px 12px;
            }
          }
          @media screen and (max-width: 991px) {
            .mobile-menu-bar svg {
              color: #ecb60d;
              width: 30px;
              height: auto;
              vertical-align: middle;
            }
            .mobile-menu-bar {
              display: block;
            }
            .theme-switch svg {
              margin-left: 0;
            }
            .loginBox {
              min-width: 90%;
            }
            .mobile-nav-bar {
              display: block;
            }
            .mobile-nav-bar svg {
              color: var(--colorWhite);
              width: 26px;
              height: 26px;
              vertical-align: middle;
              cursor: pointer;
            }
            header {
              grid-template-columns: 1fr 2fr;
              padding: 10px 20px;
            }

            .nav {
              display: none;
            }

            .action-btn span {
              display: none;
            }
            button {
              font-size: 14px;
              padding: 6px 15px;
            }
            .mobile-nav {
              position: fixed;
              background: #22262d;
              width: 100%;
              top: 0;
              height: 100%;
              left: 0;
              z-index: 999;
            }

            .mobile-menu-head {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 20px;
            }
            .mobile-menu-head svg {
              color: #fff;
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
            .mobile-menu-icon {
              display: flex;
              align-items: center;
              gap: 20px;
            }

            .mobile-nav li {
              display: block;
            }

            .mobile-nav ul li a {
              color: #fff;
              padding: 12px 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid #3b3f47;
            }

            .mobile-nav ul {
              margin: 0 40px;
            }
            .header-overlap {
              top: auto;
            }
            .setting-menus {
              right: 20px;
              top: 64px;
              width: 90vw;
            }
            .setting-menu-content {
              grid-template-columns: 1fr;
            }
            .action-btn .setting-menu-header span {
              display: block;
            }
            .action-btn button {
              display: none;
            }

            .mobile-access-btn {
              margin: 0 20px;
            }
            .mobile-access-btn button {
              display: block;
              width: 100%;
              margin: 20px 0;
            }
            .setting-menu-language-list ul {
              grid-template-columns: 1fr;
            }
            .setting-menu-language {
              width: 90vw;
              top: 65px;
            }
            .side-menu-close-icon svg {
              width: 24px;
              height: 24px;
              display: block;
              color: var(--colorWhite);
              cursor: pointer;
            }

            .side-menu-close-icon {
              display: flex;
              justify-content: flex-end;
              margin: 10px 15px 0;
            }
          }
        `}
      </style>
    </>
  );
}
