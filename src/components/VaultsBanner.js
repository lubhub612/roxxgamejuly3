import React from 'react';

export default function VaultsBanner() {
  return (
    <>
      <div className="vaults-banner">
        <div className="container">
          <div className="vaults-banner-inner">
            <div className="vaults-banner-item">
              <h2>My Investments</h2>
              <p>0,00 $</p>
            </div>
            <div className="vaults-banner-item">
              <h2>My boost</h2>
              <button>Boost your earnings Lock ROX</button>
              <span>Increase your rewards up to 2.0x</span>
            </div>
            <div className="vaults-banner-item">
              <h2>My Rewards</h2>
              <p>0.00 ROX</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .vaults-banner-inner {
            padding: 50px 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
            gap: 50px;
          }

          .vaults-banner-item {
            background: var(--bigCtaBg);
            border-radius: 20px;
            padding: 50px;
          }

          .vaults-banner-item h2 {
            font-size: 16px;
            font-weight: 500;
          }

          .vaults-banner-item p {
            font-size: 36px;
            font-weight: 500;
          }

          .vaults-banner-item button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            display: inline-block;
            margin: 10px 0;
            border: none;
            padding: 10px;
            border-radius: 10px;
            max-width: 150px;
            line-height: 1.5;
            font-size: 12px;
            cursor: pointer;
            color: #fff;
          }

          .vaults-banner-item span {
            display: block;
            font-weight: 300;
          }
          @media screen and (max-width: 991px) {
            .vaults-banner-inner {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}
      </style>
    </>
  );
}
