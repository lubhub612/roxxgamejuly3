import Image from 'next/image';
import { useState } from 'react';
export default function NextRaceTable() {
  const [race, setRace] = useState(false);

  const openRace = () => {
    document.documentElement.scrollTop = 0;
    setRace(true);
  };
  return (
    <>
      {race && (
        <div className="race-view">
          <div className="race-view-banner">
            <span className="close-icon" onClick={() => setRace(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
            <div className="race-view-banner-content">
              <h2>
                Pakistan Derby <span>PK ∙ Karachi</span>
                <svg
                  height="22"
                  viewBox="0 0 19 22"
                  width="19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m20 21h-11v-14h11m0-2h-11c-1.1045695 0-2 .8954305-2 2v14c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-14c0-1.1045695-.8954305-2-2-2m-3-4h-12c-1.1045695 0-2 .8954305-2 2v14h2v-14h12z"
                    fill="#f0f8ff"
                    fillRule="evenodd"
                    transform="translate(-3 -1)"
                  />
                </svg>
              </h2>
              <ul>
                <li>
                  Event Type <span className="race-number">II</span>
                </li>
                <li>
                  Distance <span>2600m</span>
                </li>
                <li>
                  Status <span>Finished</span>
                </li>
                <li>
                  Ran At <span>17 May 2022, 06:35</span>
                </li>
                <li>
                  Time Elapsed <span>10:47s</span>
                </li>
              </ul>
            </div>
            <div className="race-view-banner-content-button">
              <button className="button-3d">
                Watch 3D
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
              </button>
              <span className="live-status">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="jsx-3d4b672525cc1689 bi bi-play-btn"
                >
                  <path
                    d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                    className="jsx-3d4b672525cc1689"
                  ></path>
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                    className="jsx-3d4b672525cc1689"
                  ></path>
                </svg>
                Live
              </span>
            </div>
          </div>
          <div className="race-view-list">
            <div className="race-view-list-sidebar">
              <ul>
                <li className="active">
                  <span>1st</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#1</p>
                  </strong>
                </li>
                <li className="active">
                  <span>2nd</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#2</p>
                  </strong>
                </li>
                <li className="active">
                  <span>3rd</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#3</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
                <li>
                  <span>4th</span>
                  <strong>
                    <Image
                      src="/images/horse/1.png"
                      alt="horse"
                      width={36}
                      height={36}
                    />
                    <h3>
                      Dark Malica <small>Z6 - Nakamoto</small>
                    </h3>
                    <p>#4</p>
                  </strong>
                </li>
              </ul>
            </div>
            <div className="race-view-list-content">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="races-table">
        <table>
          <thead>
            <tr>
              <th>EVENT</th>
              <th>EVENT TYPE</th>
              <th>DISTANCE</th>
              <th>PRIZE POOL</th>
              <th>RUNS IN</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                NASCAR Stakes
                <span>US ∙ Charlotte </span>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
              <td className="run-live">Live</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>
        {`
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
          .races-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
          .races-table tbody td {
            padding: 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
          }
          .event-title span {
            display: block;
            color: #646a71;
            font-size: 12px;
            font-weight: 500;
          }
          .event-title {
            color: var(--colorWhite);
          }
          .event-type span {
            background: #375b55;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }
          .event-type {
            color: #fff;
          }

          .distance {
            color: #646a71;
          }

          .price strong {
            color: #ecb508;
          }

          .price span {
            font-weight: 500;
            color: #646a71;
            text-transform: uppercase;
          }
          .run-live {
            color: #f0b90c;
            text-align: right;
          }
          .races-table th:last-child {
            text-align: right;
          }
          .race-view {
            background: var(--raceViewBg);
            border: unset;
            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%);
            padding: 0;
            position: relative;
            border-top: 2px solid #f0b90c;
          }

          .race-view-banner {
            padding: 30px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
          }
          .race-number {
            background: #563d6d;
            padding: 4px 8px;
            border-radius: 5px;
          }
          .race-view-banner ul li {
            display: inline-block;
            margin-right: 20px;
            color: var(--titleColor);
            font-weight: 500;
            margin-top: 21px;
          }

          .race-view-banner ul li span {
            color: var(--colorWhite);
            margin-left: 10px;
          }

          .race-view-banner h2 {
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .close-icon {
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
          }

          .close-icon svg {
            width: 40px;
            height: 40px;
            color: #676666;
          }
          .race-view-banner h2 span {
            color: #5b646b;
            font-style: italic;
          }

          .race-view-banner h2 svg {
            cursor: pointer;
          }
          .button-3d {
            background: url('/images/3d-button.jpg') no-repeat center center /
              cover;
            border: 1px solid #f0b90c;
            color: #fff;
            padding: 10px 30px;
            font-weight: 600;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
          }
          .live-status {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #f0b90c;
            font-weight: 600;
          }

          .live-status svg {
            width: 24px;
            height: 24px;
          }

          .race-view-banner-content-button {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .race-view-list-sidebar li {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
          }

          .race-view-list-sidebar li span {
            background: var(--bigCtaBg);
            padding: 6px 8px;
            border-radius: 5px;
            display: block;
            min-width: 50px;
            text-align: center;
            font-size: 12px;
          }
          .race-view-list-sidebar h3 small {
            font-size: 8px;
            color: #5d646b;
            display: block;
            visibility: hidden;
            opacity: 0;
            height: 0;
          }
          .race-view-list-sidebar li strong {
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 500;
            font-size: 12px;
            background: var(--bigCtaBg);
            padding: 0px 15px;
            border-radius: 5px;
            transition: 0.3s;
          }
          .race-view-list-sidebar li strong:hover {
            background: var(--bigCtaBg);
            transform: scale(1.25);
            z-index: 100;
          }
          .race-view-list-sidebar li strong:hover h3 small {
            visibility: visible;
            opacity: 1;
            height: inherit;
          }

          .race-view-list-sidebar li strong h3 {
            font-weight: 500;
          }

          .race-view-list-sidebar li strong span {
            transform: scaleX(-1);
          }
          .race-view-list-sidebar .active span {
            background: #f0b90c;
            color: #000;
          }
          .race-view-list {
            display: grid;
            grid-template-columns: 1fr 3.3fr;
            gap: 30px;
            padding: 40px 40px 50px;
            border-top: 1px solid #33302a;
          }

          .race-view-list-content {
            background: var(--bigCtaBg);
            border-radius: 5px;
          }
          .race-view-list-sidebar li:last-child {
            margin-bottom: 0;
          }
          .race-view-list-content ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;
          }

          .race-view-list-content ul li {
            width: 25px;
            height: 25px;
            background: #4f4f4f;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            border-radius: 50px;
          }
          .race-view-list-content ul li:nth-child(1) {
            background: red;
            transform: translateY(-50px);
          }
          .race-view-list-content ul li:nth-child(2) {
            background: green;
            transform: translateY(50px);
          }
          .race-view-list-content ul li:nth-child(3) {
            background: blue;
            transform: translateY(90px);
          }
          .race-view-list-content ul li:nth-child(4) {
            background: #7f8c8d;
            transform: translateY(-50px);
          }
          .race-view-list-content ul li:nth-child(5) {
            background: #e74c3c;
            transform: translateY(80px);
          }
          .race-view-list-content ul li:nth-child(6) {
            background: #e67e22;
            transform: translateY(-10px);
          }
          .race-view-list-content ul li:nth-child(7) {
            background: #f1c40f;
            transform: translateY(-150px);
          }
          .race-view-list-content ul li:nth-child(8) {
            background: #34495e;
            transform: translateY(-90px);
          }
          .race-view-list-content ul li:nth-child(9) {
            background: #9b59b6;
            transform: translateY(-50px);
          }
          .race-view-list-content ul li:nth-child(10) {
            background: #3498db;
            transform: translateY(-40px);
          }
          .race-view-list-content ul li:nth-child(11) {
            background: #2ecc71;
            transform: translateY(-100px);
          }
          .race-view-list-content ul li:nth-child(12) {
            background: #1abc9c;
            transform: translateY(50px);
          }
          .race-view-list-sidebar p {
            color: #808080;
          }
          @media screen and (max-width: 991px) {
            .race-view-banner {
              display: grid;
              gap: 40px;
            }

            .race-view-list {
              display: grid;
              grid-template-columns: 1fr;
              align-items: center;
              padding: 20px;
            }

            .race-view-list-content {
              height: 600px;
              padding: 0 30px;
            }

            .race-view-list-sidebar li {
              display: grid;
              grid-template-columns: 1fr 8fr;
            }
            .race-view-list-sidebar li strong:hover {
              transform: unset;
            }
            .race-view-list-sidebar h3 small {
              font-size: 8px;
              color: #5d646b;
              display: block;
              visibility: visible;
              opacity: 1;
              height: inherit;
            }
            .race-view-list-sidebar strong {
              display: grid !important;
              grid-template-columns: 1fr 8fr 0fr;
            }
            .race-view-list-sidebar {
              width: 80vw;
            }
            .race-view-list-content ul {
              width: 60vw;
            }
          }
        `}
      </style>
    </>
  );
}
