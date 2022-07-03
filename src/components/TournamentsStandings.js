import Link from 'next/link';
import Image from 'next/image';
export default function TournamentsStandings() {
  return (
    <>
      <div className="tournaments-standings">
        <div className="container">
          <div className="tournaments-standings-inner">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bar-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
              </svg>
              STANDINGS
            </h2>

            <div className="tournaments-list">
              <ul>
                <li className="active">
                  <button>Sprinter</button>
                </li>
                <li>
                  <button>Midrunner</button>
                </li>
                <li>
                  <button>Marathoner</button>
                </li>
              </ul>
              <div className="tournaments-list-details">
                <ul>
                  <li>
                    Last updated: <strong>May 14th 5:55</strong>
                  </li>
                  <li>
                    Cut line:
                    <strong>
                      A <span>3.60</span> B <span>2.00</span>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tournaments-table">
              <div className="races-table">
                <table>
                  <thead>
                    <tr>
                      <th>PLACE</th>
                      <th>RACEHORSE</th>
                      <th>RACES</th>
                      <th>AVG POINTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="number">
                          <strong>1</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          Slow Horse <span>1478.54</span>
                        </strong>
                        <span>New Close Racing</span>
                      </td>
                      <td>5</td>
                      <td className="point">89.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .tournaments-standings-inner {
            margin-top: 50px;
          }
          .tournaments-standings-inner h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #5b6068;
            font-weight: 500;
            font-size: 18px;
          }
          .tournaments-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 40px;
          }

          .tournaments-list ul {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .tournaments-list ul button {
            background: #656a71;
            padding: 8px 20px;
            border-radius: 50px;
            color: #b6bfc5;
            border: none;
            cursor: pointer;
          }

          .tournaments-list-details {
            background: var(--bigCtaBg);
            padding: 10px 20px;
            border-radius: 5px;
          }

          .tournaments-list-details li {
            color: #686e75;
          }

          .tournaments-list-details li strong {
            color: #a7aeb6;
            margin: 0 5px;
          }

          .tournaments-list-details li span {
            margin: 0 5px;
            color: #686e75;
          }
          .tournaments-list .active button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }
          .races-table {
            overflow-x: auto;
          }
          .races-table table {
            width: 100%;
            color: #fff;
            border-collapse: collapse;
            min-width: max-content;
          }

          .races-table th {
            text-align: left;
            padding: 0 20px;
            color: #656a71;
            font-weight: 600;
            font-size: 10px;
            border-bottom: 1px solid var(--borderColor);
            height: 30px;
          }
          .races-table tbody td {
            padding: 20px;
            border-bottom: 15px solid var(--studListBorder);
            font-weight: 600;
            background: var(--studListBg);
            color: var(--colorWhite);
          }
          .races-table tbody tr {
            transition: 0.3s;
          }
          .races-table tbody tr:hover {
            cursor: pointer;
            background: var(--studListHover);
          }
          .number {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .number strong {
            background: #f0b90c;
            color: #000;
            font-weight: 600;
            width: 24px;
            height: 24px;
            text-align: center;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .racehorse strong {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .racehorse span {
            color: #6a6f76;
            font-weight: 500;
          }

          .racehorse strong span {
            background: #66513f;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            margin-left: 5px;
            font-weight: 500;
            font-size: 12px;
          }

          .point {
            text-align: right;
          }

          .races-table thead th:last-child {
            text-align: right;
          }
          .tournaments-table {
            margin: 50px 0;
          }
          @media screen and (max-width: 991px) {
            .tournaments-list {
              display: grid;
              justify-content: center;
              gap: 30px;
            }

            .tournaments-list ul {
              justify-content: center;
            }

            .tournaments-standings-inner h2 {
              justify-content: center;
            }

            .tournaments-list-details ul {
              display: grid !important;
              padding: 5px 0;
            }
          }
        `}
      </style>
    </>
  );
}
