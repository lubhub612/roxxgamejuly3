import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Layout from '../../components/Layout';
export default function Stake() {
  const [info, setInfo] = useState(true);
  return (
    <Layout>
      {info && (
        <div className="warning-area">
          <div className="warning-info">
            <span onClick={() => setInfo(false)}>
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
            <h2>Terms of Service</h2>
            <PerfectScrollbar>
              <div className="warning-info-content">
                <p>Please accept these terms before using our services.</p>
                <h3>APYs being indicative</h3>
                <p>
                  All APYs listed on this site are for guidance purposes only.
                  JonesDAO employs strategies across a broad range of markets.
                  The available liquidity in said markets changes constantly. As
                  a result, JonesDAO cannot calculate APYs in real time. Users
                  acknowledge this and also acknowledge the risk of negative
                  returns on their deposited funds during certain time periods.
                  By depositing funds in JonesDAO&lsquo;s vaults, the user
                  assumes any associated risk of loss.
                </p>
                <h3>Risk of loss of funds when using our products</h3>
                <p>
                  Our products are a smart contracts based suite of technologies
                  that relies on blockchain technology. By depositing your funds
                  into our vaults you recognize and assume all risks inherent in
                  such technologies, including but not limited to the risk that
                  the smart contracts underlying our vaults could fail,
                  resulting in a total loss of user funds. JonesDAO is not
                  responsible for any such losses.
                </p>
                <h3>UI usage and legal jurisdictions</h3>
                <p>
                  JonesDAO is a decentralized finance project and does not hold
                  any securities licenses in the U.S. or any other jurisdiction.
                  Any investment made through our protocol shall be made with
                  this in mind.
                </p>
                <p>
                  Furthermore, by accepting these terms you acknowledge and
                  warrant that you are not a citizen of or otherwise accessing
                  the website from the following nations: the Balkans, Belarus,
                  Burma, China, Cote D&lsquo;Ivoire (Ivory Coast), Cuba,
                  Democratic Republic of Congo, Hong Kong, Iran, Iraq, Liberia,
                  North Korea, Sudan, Syria, Zimbabwe, and/or any other
                  jurisdiction prohibited by the United States Office of Foreign
                  Asset Control (OFAC).
                </p>
                <p>Last updated 1st June 2022</p>
              </div>
            </PerfectScrollbar>
            <button onClick={() => setInfo(false)}>Accept Terms</button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="stake-area">
          <div className="stake-box">
            <h2>Stake your ROX</h2>
            <p>APR 5.97% in MATIC</p>
            <div className="stack-box-area">
              <div className="stake-box-input">
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
              <button>Connect Wallet</button>
            </div>
          </div>
          <div className="stake-bar">
            <h2>
              Stake ROX to earn peformance fees in WMATIC with no lock-up
              required
            </h2>
            <p>You can withdraw staked ROX whenever you want</p>
            <h4>Increase your earnings!</h4>
            <p>
              If you want to earn more than just Staking, you can Lock your ROX.
              This way you will also boost the rewards from investments in
              normal vaults
            </p>
            <Link href="/boost">
              <a>Lock for Boost</a>
            </Link>
            <h5>Compare your options:</h5>
            <div className="stake-bar-list">
              <div className="stake-bar-item">
                <h6>Stake</h6>
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
                    Earn performance fees in WMATIC
                  </li>
                </ul>
              </div>
              <div className="stake-bar-item">
                <h6>Lock for Boost</h6>
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
                    Earn performance fees in WMATIC
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
                    Earn early withdrawal penalty fees
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
                    Boost ROX earnings in Vaults
                  </li>
                </ul>
              </div>
              <div className="stake-bar-item">
                <h6>Stake</h6>
                <ul>
                  <li>No lock duration</li>
                  <li>No early withdrawal penalty</li>
                </ul>
              </div>
              <div className="stake-bar-item">
                <h6>Lock for Boost</h6>
                <ul>
                  <li>Lock for 91 days - 4 years</li>
                  <li>Can&apos;t withdraw until end</li>
                </ul>
              </div>
            </div>
            <div className="stack-img">
              <p>Need more information? Go to Documentation and Learn more</p>
              <Image
                src="/images/stack-coin.png"
                alt="coin"
                width={1666}
                height={566}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .stake-area {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          padding: 50px 0;
        }

        .stake-box {
          background: var(--bigCtaBg);
          padding: 40px;
          border-radius: 10px;
          height: 460px;
          text-align: center;
          padding-top: 100px;
        }

        .stake-bar {
          background: var(--bigCtaBg);
          padding: 30px;
          border-radius: 10px;
        }

        .stake-box h2 {
          font-size: 40px;
          font-weight: 500;
        }

        .stake-box p {
          font-size: 14px;
        }

        .stake-box-input {
          position: relative;
        }

        .stake-box-input input {
          width: 100%;
          border: 1px solid #efb809;
          background: transparent;
          border-radius: 5px;
          padding: 15px 15px 15px 50px;
          font-size: 20px;
          margin-top: 100px;
        }

        .stake-box-input span {
          position: absolute;
          bottom: 7px;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          color: #fff;
          padding: 10px 20px;
          right: 7px;
          border-radius: 5px;
          cursor: pointer;
        }

        .stake-box button {
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
        .stake-box button:hover {
          filter: brightness(1.15);
        }

        .stake-bar h2 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .stake-bar p {
          font-size: 12px;
          margin-bottom: 20px;
        }

        .stake-bar h4 {
          margin-top: 50px;
        }

        .stake-bar a {
          color: #ecb608;
          font-weight: 500;
          text-align: right;
          display: block;
          margin-top: 30px;
        }

        .stake-bar h5 {
          margin-top: 40px;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 400;
          font-size: 14px;
        }

        .stake-bar-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stake-bar-item {
          background: var(--stackBg);
          padding: 20px;
          border-radius: 10px;
        }

        .stake-bar-item h6 {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .stake-bar-item ul li span svg {
          color: #038726;
        }

        .stake-bar-item ul li {
          display: flex;
          gap: 10px;
          font-size: 12px;
          margin: 15px 0;
        }
        .stack-img {
          margin-top: 50px;
        }

        .stake-bar .stack-img p {
          color: #6d6f72;
          font-size: 12px;
        }
        .stack-box-icon {
          position: absolute;
          bottom: 10px;
          left: 15px;
        }
        .warning-area {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000b5;
          backdrop-filter: blur(30px);
        }
        .warning-info {
          background: var(--bigCtaBg);
          padding: 50px;
          border-radius: 10px;
          max-width: 700px;
          position: relative;
          margin: 30px;
        }
        .warning-info-content {
          max-height: 400px;
        }

        .warning-info-content h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 10px 0;
        }

        .warning-info-content p {
          margin: 20px 0;
        }

        .warning-info span {
          position: absolute;
          right: 20px;
          top: 20px;
          cursor: pointer;
        }

        .warning-info span svg {
          width: 30px;
          height: 30px;
        }

        .warning-info h2 {
          font-size: 26px;
          font-weight: 500;
          margin-bottom: 30px;
        }

        .warning-info button {
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          border: none;
          padding: 15px 30px;
          color: #fff;
          font-size: 14px;
          border-radius: 10px;
          margin-top: 30px;
          cursor: pointer;
        }
        .warning-info button:hover {
          filter: brightness(1.15);
        }
        .stack-box-area {
          max-width: 50%;
          margin: auto;
        }
        @media screen and (max-width: 991px) {
          .stack-box-area {
            max-width: 90%;
          }
          .stake-box {
            height: unset;
            padding-top: 50px;
          }
          .stake-area {
            grid-template-columns: 1fr;
            padding: 50px 0;
          }
        }
      `}</style>
    </Layout>
  );
}
