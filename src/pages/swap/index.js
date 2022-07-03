import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import PerfectScrollbar from 'react-perfect-scrollbar';
export default function Swap() {
  const [coinBox, setCoinBox] = useState(false);
  return (
    <Layout>
      {coinBox && (
        <div className="swap-coin-list-area">
          <div className="swap-coin-list">
            <span onClick={() => setCoinBox(false)}>
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
            <h2>Select Chain</h2>
            <PerfectScrollbar>
              <ul>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/polygon.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Polygon
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/bsc-chain.png"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  BSC
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/avax.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Avalanche
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/ftm.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Fantom
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/arbitrum.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Arbitrum
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/optimism.png"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Optimism
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/ropsten-chain.png"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Ethereum
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/harmony.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Harmony
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/cro-chain.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  Cronos
                </li>
              </ul>
            </PerfectScrollbar>
          </div>
        </div>
      )}

      <div className="swap">
        <div className="swap-inner">
          <h2>Swap</h2>
          <div className="swap-coin">
            <div className="swap-coin-inner">
              <div className="swap-coin-item">
                <h3>Form</h3>
                <button onClick={() => setCoinBox(true)}>
                  <Image
                    src="/images/usdt.png"
                    alt="coin"
                    width={18}
                    height={18}
                  />
                  USDT
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
                </button>
                <div className="swap-input-area">
                  <div className="input-coin-select">
                    <button onClick={() => setCoinBox(true)}>
                      <Image
                        src="/images/usdt.png"
                        alt="coin"
                        width={18}
                        height={18}
                      />
                      USDT
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
                    </button>
                  </div>
                  <div className="input-price-update">~$0</div>
                  <input type="number" placeholder="0.0" />
                  <div className="input-price-balance">Balance: ~</div>
                </div>
              </div>
              <div className="swap-coin-item swap-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </div>
              <div className="swap-coin-item">
                <h3>To</h3>
                <button onClick={() => setCoinBox(true)}>
                  <Image
                    src="/images/eth.png"
                    alt="coin"
                    width={18}
                    height={18}
                  />
                  Eth
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
                </button>
                <div className="swap-input-area">
                  <div className="input-coin-select">
                    <button onClick={() => setCoinBox(true)}>
                      <Image
                        src="/images/usdt.png"
                        alt="coin"
                        width={18}
                        height={18}
                      />
                      USDT
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
                    </button>
                  </div>
                  <div className="input-price-update">~$0</div>
                  <input type="number" placeholder="0.0" />
                  <div className="input-price-balance">Balance: ~</div>
                </div>
              </div>
            </div>
            <div className="swap-now">SWAP</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .swap {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 100px 30px;
          }

          .swap-coin-inner {
            background: var(--bigCtaBg);
            display: grid;
            grid-template-columns: 3fr 0.8fr 3fr;
            gap: 10px;
            border-radius: 10px;
            padding: 40px 40px 70px;
            width: 800px;
            align-items: center;
          }

          .swap-inner h2 {
            font-size: 30px;
            margin-bottom: 20px;
          }

          .swap-coin-item h3 {
            font-size: 14px;
            font-weight: 300;
            opacity: 0.5;
            margin-bottom: 20px;
          }

          .swap-coin-item button {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 30px;
            border-radius: 10px;
            border: none;
            background: var(--swapBtnBg);
            cursor: pointer;
          }

          .swap-coin-item button svg {
            width: 10px;
            height: 10px;
          }

          .swap-input-area {
            position: relative;
            margin-top: 40px;
          }

          .swap-input-area input {
            width: 100%;
            background: var(--background);
            border: 1px solid var(--borderColor);
            border-radius: 10px;
            padding: 15px 12px 30px;
            box-shadow: rgb(0 0 0 / 10%) 3px 3px 10px 4px;
            font-size: 20px;
          }

          .input-coin-select {
            position: absolute;
            right: 2px;
            top: 5px;
          }

          .input-coin-select button {
            padding: 10px;
            background: transparent;
          }

          .input-price-update {
            position: absolute;
            bottom: 5px;
            left: 13px;
            font-size: 12px;
            opacity: 0.5;
          }

          .input-price-balance {
            position: absolute;
            right: 13px;
            bottom: 5px;
            font-size: 12px;
            opacity: 0.5;
          }

          .swap-now {
            position: absolute;
            bottom: -40px;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            width: 80px;
            height: 80px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 50%;
            transform: translate(-50%);
            cursor: pointer;
            font-weight: 600;
            font-size: 16px;
            color: #fff;
          }
          .swap-now:hover {
            filter: brightness(1.15);
          }
          .swap-coin {
            position: relative;
          }
          /* Chrome, Safari, Edge, Opera */
          .swap-input-area input::-webkit-outer-spin-button,
          .swap-input-area input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          .swap-input-area input[type='number'] {
            -moz-appearance: textfield;
          }
          .swap-coin-item.swap-icon svg {
            width: 30px;
            height: 30px;
            color: var(--colorWhite);
            cursor: pointer;
          }

          .swap-coin-item.swap-icon {
            display: flex;
            justify-content: center;
            margin-top: 120px;
          }

          .swap-coin-list-area {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 9999;
            background: #000c;
            backdrop-filter: blur(10px);
          }

          .swap-coin-list {
            background: var(--background);
            width: 500px;
            padding: 30px 0;
            border-radius: 10px;
            position: relative;
            margin: 30px;
          }

          .swap-coin-list > span {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .swap-coin-list h2 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 20px;
            padding: 0 30px;
          }

          .swap-coin-list ul {
            height: 300px;
          }

          .swap-coin-list ul li {
            display: flex;
            align-items: center;
            gap: 20px;
            border-bottom: 1px solid var(--borderColor);
            padding: 15px 30px;
            cursor: pointer;
          }

          .swap-coin-list ul li:last-child {
            border-bottom: 0;
          }

          .swap-coin-list ul li:hover {
            background: #ffffff12;
          }
          @media screen and (max-width: 991px) {
            .swap-coin-inner {
              grid-template-columns: 1fr;
              width: 100%;
            }

            .swap {
              margin: 50px 30px 100px;
              display: block;
            }

            .swap-coin-item.swap-icon {
              margin-top: 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
