import { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Switch from 'react-switch';
export default function VaultsList() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="vaults-list">
        <div className="container">
          <div className="vaults-list-title-container">
            <ul className="vaults-list-title">
              <li>Vault Name</li>
              <li>Rewards</li>
              <li>My investments</li>
              <li>APY</li>
              <li>Total Value Locked</li>
            </ul>
          </div>

          <Accordion preExpanded={['a']}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="vault-list-heading">
                    <ul>
                      <li className="vault-one">
                        <div className="image">
                          <Image
                            src="/images/usdt.png"
                            alt="coin"
                            width={32}
                            height={32}
                          />
                          <div className="overflow-img">
                            <Image
                              src="/images/eth.png"
                              alt="coin"
                              width={32}
                              height={32}
                            />
                          </div>
                        </div>

                        <div className="price">
                          MAI-3CRV LP
                          <span>Mai</span>
                        </div>
                        <strong>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-coin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                          </svg>
                          Stablecoins
                        </strong>
                      </li>
                      <li>MAI-3CRV LP & ROX</li>
                      <li>0,00 $</li>
                      <li className="apr-price">
                        <strong>
                          5.03% <span>(APR 4.90%)</span>
                        </strong>
                      </li>
                      <li>654.668,09 $</li>
                    </ul>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="vault-content">
                  <ul>
                    <li>
                      <Switch
                        onChange={() => setActive((e) => !e)}
                        checked={active}
                        uncheckedIcon="APR"
                        checkedIcon="APY"
                        onColor="#f0b90c"
                        height={35}
                        width={75}
                        handleDiameter={30}
                      />
                    </li>
                    <li className="apy-rate">
                      <strong>5.02%</strong>
                    </li>
                    <li>
                      <span>
                        <strong>4.90%</strong> Base Vault APR
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>5.02%</strong> Total APY with ROX
                        <small>1.00x Boost</small>
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>No data</strong> LP swap fee APY
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="vault-content-down">
                  <h1>Qi vaults have a 0.5% deposit fee.</h1>
                  <div className="vault-content-down-inner">
                    <div className="vault-content-down-item">
                      <div>
                        <h2>My Investments</h2>
                        <strong>0.00</strong>
                        <span>MAI-3CRV LP</span>
                      </div>
                      <button>Withdraw All</button>
                    </div>
                    <div className="vault-content-down-item">
                      <div>
                        <h2>
                          Balance: 0.00 MAI-3CRV LP <small>Get LP</small>
                        </h2>
                        <div className="vault-content-input">
                          <input type="number" placeholder="0.0" />
                          <button>MAX</button>
                        </div>
                        <p>This vault is auto-compounding</p>
                      </div>
                      <button>Invest</button>
                    </div>
                    <div className="vault-content-down-item">
                      <div>
                        <h2>Rewards</h2>
                        <strong>0.00</strong> <span>ROX</span>
                      </div>
                      <button>Claim ROX</button>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <style jsx>{`
        .vaults-list {
          margin: 50px 0 100px;
        }

        .vaults-list-title {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
        }

        .vaults-list-title li {
          font-size: 16px;
        }

        .vault-list-heading ul {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
        }

        .image {
          position: relative;
          width: 35px;
          height: 35px;
          border-radius: 50px;
          border: 1px solid #e5e5e5;
          margin-top: -15px;
        }

        .overflow-img {
          position: absolute;
          top: 15px;
          left: 15px;
          width: 35px;
          height: 35px;
          border-radius: 50px;
          border: 1px solid #e5e5e5;
        }

        .vault-one {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .price {
          font-weight: 600;
          font-size: 16px;
        }

        .price span {
          display: block;
          font-size: 12px;
        }

        .vault-one strong {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #81b7f6;
          padding: 4px 10px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 400;
          background: #81b7f638;
          margin-left: 30px;
        }

        .vault-list-heading li {
          font-weight: 500;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .apr-price span {
          display: block;
          font-size: 12px;
        }

        .vault-content ul {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          align-items: center;
        }

        .vault-content ul li {
          font-size: 16px;
          font-weight: 500;
        }

        .vault-content li strong {
          display: block;
          font-weight: 500;
          font-size: 22px;
        }

        .vault-content li {
          font-size: 12px !important;
        }

        .vault-content li small {
          display: block;
          margin-top: 5px;
        }
        .vault-content li.apy-rate strong {
          font-size: 40px;
        }
        .vault-content-down h2 {
          font-size: 14px;
        }

        .vault-content-down h1 {
          font-size: 14px;
          font-weight: 300;
          border-bottom: 1px solid #eeb80d;
          padding-bottom: 10px;
        }

        .vault-content-down {
          margin-top: 30px;
        }

        .vault-content-down-inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 50px;
          text-align: center;
        }

        .vault-content-down-item button {
          display: block;
          width: 100%;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }

        .vault-content-input {
          position: relative;
        }

        .vault-content-input button {
          width: unset;
          padding: 10px 16px;
          font-weight: 500;
          position: absolute;
          right: 8px;
          margin-top: 0;
          top: 37px;
          border-radius: 5px;
          cursor: pointer;
          color: #fff;
        }

        .vault-content-down-item {
          padding-top: 50px;
          min-height: 200px;
          display: grid;
          align-items: end;
        }

        .vault-content-down-item h2 {
          font-size: 20px;
          margin-bottom: 5px;
        }

        .vault-content-input input {
          width: 100%;
          background: transparent;
          border: 1px solid #e3af09;
          border-radius: 5px;
          padding: 10px;
          margin-top: 30px;
          font-size: 26px;
        }

        .vault-content-down-item p {
          margin-bottom: 20px;
          margin-top: 20px;
        }

        @media screen and (max-width: 1200px) {
          .vault-list-heading,
          .vaults-list-title-container,
          .vault-content {
            overflow: auto;
          }
          .vault-list-heading ul {
            min-width: 1200px;
            padding: 20px 0;
          }
          .vaults-list-title {
            min-width: 1200px;
          }
          .vault-content ul {
            min-width: 1200px;
          }
          .vault-content-down-inner {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </>
  );
}
