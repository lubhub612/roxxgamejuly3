import Link from 'next/link';
import Layout from '../../components/Layout';
export default function Vesting() {
  return (
    <Layout>
      <div className="vesting">
        <div className="container">
          <div className="vesting-title">
            <h2>You have no ROX in Vesting for now</h2>
            <p>Invest in Vaults and claim your rewards to vest them</p>
          </div>
          <div className="vesting-list">
            <div className="vesting-item">
              <h3>Vesting</h3>
              <span>
                <strong>0.00</strong> ROX
              </span>
              <p>+0.00 ROX waiting to be vested</p>
              <button>Withdraw early - 50% penalty</button>
            </div>
            <div className="vesting-item">
              <h3>Vest Complete</h3>
              <span>
                <strong>0.00</strong> ROX
              </span>
              <button>Claim all</button>
            </div>
            <div className="vesting-item">
              <h3>Claimable rewards</h3>
              <span>
                <strong>0.00</strong> ROX
              </span>
              <button>Claim all</button>
            </div>
          </div>
          <p className="vesting-content">
            Freshly minted ROX is considered to be vesting for 90 days. Your
            vesting ROX will still earn performance fees during that time. After
            90 days are complete, your vesting ROX will become unlocked and may
            be withdrawn freely. It is possible to withdraw your ROX early, but
            doing so will incur a 50% early vesting withdrawal penalty
          </p>
          <div className="vesting-info">
            <p>Vests are grouped by week</p>
            <p>
              Next vesting group starts on
              <strong>09 Jun 2022 at 02:00 am</strong>, so far you have
              <strong>0.00</strong> ROX in it
            </p>
            <span>
              Invest in Vaults and Claim the rewards to add them to the closest
              starting vesting group
            </span>
          </div>
          <div className="vesting-compare">
            <h4>Comparison of Vesting, Staking and Locking ROX</h4>
            <p>
              Vested, Staked, and Locked for Boost ROX all earn the same % of
              performance fees. This means that 1 vested or staked ROX will earn
              the same % of the performance fee as 1 locked for boost ROX
            </p>
          </div>
          <div className="vesting-table-area">
            <div className="vesting-table">
              <div className="vesting-table-title">
                <ul>
                  <li>Lock duration</li>
                  <li>Early withdrawal penalty</li>
                  <li>Earn performance fees in WMATIC</li>
                  <li>Earn early withdrawal penalty fees</li>
                  <li>Boost ROX earnings in Vaults</li>
                </ul>
              </div>
              <div className="vesting-table-item">
                <div className="vesting-table-item-inner">
                  <h2>Vesting</h2>
                  <ul>
                    <li>90 days</li>
                    <li>50%</li>
                    <li>
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
                    </li>
                    <li>-</li>
                    <li>-</li>
                  </ul>
                </div>
              </div>
              <div className="vesting-table-item">
                <div className="vesting-table-item-inner">
                  <h2>Stake</h2>
                  <ul>
                    <li>-</li>
                    <li>No penalty</li>
                    <li>
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
                    </li>
                    <li>-</li>
                    <li>-</li>
                  </ul>
                </div>
                <Link href="/stake">
                  <a>Check Stake</a>
                </Link>
              </div>
              <div className="vesting-table-item">
                <div className="vesting-table-item-inner">
                  <h2>Lock for Boost</h2>
                  <ul>
                    <li>91 days - 4 years</li>
                    <li>Cannot withdraw until end</li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
                <Link href="/boost">
                  <a>Check Boost</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .vesting {
            padding: 50px 0;
          }

          .vesting-title {
            text-align: center;
          }

          .vesting-title h2 {
            font-size: 36px;
            font-weight: 500;
          }

          .vesting-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
            gap: 40px;
            margin-top: 100px;
          }

          .vesting-item {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            padding: 30px;
            border-radius: 10px;
            position: relative;
          }

          .vesting-item h3 {
            font-size: 18px;
            font-weight: 500;
          }

          .vesting-item span {
            font-size: 40px;
            display: block;
            font-weight: 500;
          }

          .vesting-item p {
            margin-top: 5px;
          }

          .vesting-item button {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            color: #fff;
            border: none;
            padding: 12px;
            width: 70%;
            border-radius: 5px;
            cursor: pointer;
          }

          p.vesting-content {
            background: var(--bigCtaBg);
            margin-top: 50px;
            color: var(--colorWhite);
            padding: 40px;
            text-align: center;
            border-radius: 10px;
          }

          .vesting-info {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            text-align: center;
            margin: 40px 0;
            border-radius: 10px;
            padding: 40px;
          }

          .vesting-info p strong {
            margin: 0 5px;
          }

          .vesting-info p {
            margin: 5px 0;
          }

          .vesting-compare {
            text-align: center;
            margin-top: 60px;
          }

          .vesting-compare p {
            max-width: 700px;
            margin: auto;
          }

          .vesting-compare h4 {
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 20px;
          }

          .vesting-table {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1.2fr;
            gap: 60px;
            margin-top: 80px;
            min-width: 1200px;
          }

          .vesting-table-item-inner {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            text-align: center;
            padding: 20px;
            border-radius: 10px;
          }

          .vesting-table-item h2 {
            font-size: 26px;
          }

          .vesting-table-item ul li {
            margin-top: 20px;
          }

          .vesting-table-item ul li svg {
            color: #248725;
            width: 25px;
            height: 25px;
          }

          .vesting-table-title ul li {
            margin-top: 20px;
          }

          .vesting-table-title {
            margin-top: 60px;
          }

          .vesting-table-item a {
            margin-top: 20px;
            color: #f0b90b;
            border-radius: 5px;
            display: block;
            text-align: center;
            font-weight: 500;
          }
          .vesting-table-area {
            overflow: auto;
          }

          @media screen and (max-width: 991px) {
            .vesting-list {
              grid-template-columns: 1fr;
              margin-top: 50px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
