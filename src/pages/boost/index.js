import { useState } from 'react';
import Slider from 'react-rangeslider';
import Image from 'next/image';
import Layout from '../../components/Layout';
import 'react-rangeslider/lib/index.css';
export default function Boost() {
  const [range, setRange] = useState(91);
  const [custom, setCustom] = useState(false);

  const handleChange = (value) => {
    setRange(value);
  };

  const handleDays = () => {
    setCustom(false);
  };

  return (
    <Layout>
      <div className="container">
        <div className="boost-area">
          <div className="boost-box">
            <h2>Lock ROX for Boost</h2>
            <p className="boost-content">
              <span>
                APR <strong>6.03%</strong> in WMATIC
              </span>
              <span>
                APR <strong>0.01%</strong> in ROX
              </span>
            </p>
            <div className="stack-box-area-inner">
              <div className="boost-box-input">
                <div className="stack-box-icon">
                  <Image
                    src="/images/token-icon.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                </div>
                <input type="number" placeholder="0.0" />
                <span>MAX</span>
              </div>
            </div>

            <div className="boost-item-list">
              <ul>
                <li onClick={handleDays}>91 days</li>
                <li onClick={handleDays}>1 year</li>
                <li onClick={handleDays}>4 years</li>
                <li onClick={() => setCustom(true)}>Custom</li>
              </ul>
            </div>
            {custom && (
              <div className="boost-custom-box-area">
                <div className="boost-custom-box">
                  <div className="boost-range">
                    <Slider
                      min={91}
                      max={1460}
                      value={range}
                      onChange={handleChange}
                    />
                    <span className="boost-number-first">91</span>
                    <span className="boost-number-last">1460</span>
                  </div>
                  <div className="boost-days">
                    <span>{range}</span> days
                  </div>
                </div>
                <div className="boost-button-area">
                  <span onClick={() => setCustom(false)}>Cancel</span>
                  <button onClick={() => setCustom(false)}>Confirm</button>
                </div>
              </div>
            )}

            <div className="boost-message">
              <span>
                get
                <strong>Boost</strong>
                points
              </span>
              <p>
                Type in ROX amount and choose lock duration to calculate your
                Boost
              </p>
            </div>
            <div className="stack-box-area-inner">
              <button>Connect your Wallet</button>
            </div>
          </div>
          <div className="boost-bar">
            <h2>
              Locking demonstrates a commitment to the long-term vision of
              Adamant
            </h2>
            <p>
              Lock your ROX and get Boost Points to increase your Vault earnings
              and participate in protocol Governance
            </p>

            <h5>Discover our types of Locks and their benefits:</h5>
            <div className="boost-bar-list">
              <div className="boost-bar-item">
                <h6>Basic Lock</h6>
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    Earn performance and penalty fees
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    Boost ROX earned from vaults
                  </li>
                </ul>
              </div>
              <div className="boost-bar-item">
                <h6>Lock Plus</h6>
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    Earn performance and penalty fees
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    Boost ROX earned from vaults
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    Earn ROX from buybucks
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    2x more Boost Points per ROX than in Basic Lock
                  </li>
                </ul>
              </div>
              <div className="boost-bar-item">
                <h6>Basic Lock</h6>
                <ul>
                  <li>Earned ROX can be claimed immediately</li>
                  <li>Same unlock date for all ROX in this contract</li>
                  <li>
                    Eligibility for Adamant cross-chain expansion benefits (such
                    as possible airdrops or performance fees)
                  </li>
                </ul>
              </div>
              <div className="boost-bar-item">
                <h6>Lock Plus</h6>
                <ul>
                  <li>Earned ROX is auto-compounded to increase your boost</li>
                  <li>Same unlock date for all ROX in this contract</li>
                  <li>
                    Eligibility for Adamant cross-chain expansion benefits (such
                    as possible airdrops or performance fees)
                  </li>
                </ul>
              </div>
              <div className="boost-bar-item">
                <h6>Total locked</h6>
                <h6>105729.28 ROX</h6>
              </div>
              <div className="boost-bar-item">
                <h6>Total locked</h6>
                <h6>864831.83 ROX</h6>
              </div>
            </div>
            <div className="stack-img">
              <p>
                You can lock your ROX for 91 days - 4 years. During this time,
                you will not be able to withdraw them
              </p>
              <p>Each Lock type has a separate lock timer.</p>
              <p>
                If you don&apos;t have any ROX yet, you can earn it through the
                Vaults or buy it on Quickswap by clicking the Adamant token icon
                at the top right corner of the page.
              </p>
              <Image
                src="/images/boost-img.png"
                alt="coin"
                width={1666}
                height={566}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .stack-box-area-inner {
          max-width: 50%;
          margin: auto;
        }
        .boost-area {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          padding: 50px 0;
        }

        .boost-box {
          background: var(--bigCtaBg);
          padding: 40px;
          border-radius: 10px;
          height: fit-content;
          text-align: center;
          padding-top: 50px;
        }

        .boost-bar {
          background: var(--bigCtaBg);
          padding: 30px;
          border-radius: 10px;
        }

        .boost-box h2 {
          font-size: 40px;
          font-weight: 500;
        }

        .boost-box p {
          font-size: 14px;
        }

        .boost-box-input {
          position: relative;
        }

        .boost-box-input input {
          width: 100%;
          border: 1px solid #efb809;
          background: transparent;
          border-radius: 5px;
          padding: 15px 15px 15px 50px;
          font-size: 20px;
          margin-top: 100px;
        }

        .boost-box-input span {
          position: absolute;
          bottom: 7px;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          color: #fff;
          padding: 10px 20px;
          right: 7px;
          border-radius: 5px;
          cursor: pointer;
        }

        .boost-box button {
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          width: 100%;
          border: none;
          padding: 16px;
          font-size: 16px;
          border-radius: 10px;
          margin-top: 30px;
          cursor: pointer;
          color: #fff;
        }
        .boost-box button:hover {
          filter: brightness(1.15);
        }

        .boost-bar h2 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .boost-bar p {
          font-size: 12px;
          margin-bottom: 20px;
        }

        .boost-bar h4 {
          margin-top: 50px;
        }

        .boost-bar a {
          color: #ecb608;
          font-weight: 500;
          text-align: right;
          display: block;
          margin-top: 30px;
        }

        .boost-bar h5 {
          margin-top: 40px;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 400;
          font-size: 14px;
        }

        .boost-bar-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .boost-bar-item {
          background: var(--stackBg);
          padding: 20px;
          border-radius: 10px;
        }

        .boost-bar-item h6 {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .boost-bar-item ul li span svg {
          color: #038726;
        }

        .boost-bar-item ul li {
          display: flex;
          gap: 10px;
          font-size: 12px;
          margin: 15px 0;
        }
        .stack-img {
          margin-top: 50px;
        }

        .boost-bar .stack-img p {
          color: #6d6f72;
          font-size: 12px;
        }
        .stack-box-icon {
          position: absolute;
          bottom: 10px;
          left: 15px;
        }
        .boost-content span {
          margin: 0 20px;
        }

        .boost-content span strong {
          font-size: 20px;
          margin: 0 5px;
        }

        .boost-item-list ul > li {
          margin-top: 0;
        }

        .boost-item-list ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-top: 30px;
        }
        .boost-item-list li {
          margin-top: 30px;
          list-style: none;
          background: var(--stackBg);
          padding: 15px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .boost-item-list li:hover {
          background: #eab508;
          color: #fff;
        }
        .boost-message {
          margin: 50px 0;
        }

        .boost-message span strong {
          font-size: 40px;
          margin: 0 10px;
        }

        .boost-message span {
          font-size: 18px;
        }

        .boost-message p {
          font-size: 12px;
        }
        .boost-custom-box-area {
          border: 1px solid var(--boostBorder);
          margin-top: 40px;
          border-radius: 10px;
          padding: 30px;
          align-items: center;
        }
        .boost-custom-box {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 50px;
        }

        .boost-days span {
          background: var(--background);
          font-size: 30px;
          font-weight: 500;
          padding: 15px;
          border-radius: 10px;
          color: var(--colorWhite);
        }

        .boost-days {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 16px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .boost-range {
          position: relative;
        }

        .boost-range span {
          position: absolute;
          top: 40px;
          font-size: 16px;
          font-weight: 500;
        }
        .boost-range .boost-number-first {
          left: 0;
        }

        .boost-range .boost-number-last {
          right: 0;
        }
        .boost-button-area {
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: center;
          margin-top: 50px;
        }

        .boost-box .boost-button-area button {
          margin-top: 0;
          width: unset;
          padding: 15px 40px;
        }

        .boost-button-area span {
          cursor: pointer;
          color: #e7b208;
          font-size: 18px;
          font-weight: 500;
        }
        @media screen and (max-width: 991px) {
          .stack-box-area-inner {
            max-width: 90%;
          }
          .boost-box {
            height: unset;
            padding-top: 50px;
          }
          .boost-area {
            grid-template-columns: 1fr;
            padding: 50px 0;
          }
          .boost-content span {
            display: block;
          }
          .boost-item-list ul {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .boost-box h2 {
            font-size: 34px;
            font-weight: 500;
          }
        }
      `}</style>
    </Layout>
  );
}
