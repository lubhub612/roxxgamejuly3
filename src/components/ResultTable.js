import Image from 'next/image';
import RaceResult from './RaceResult';
import { useState } from 'react';
export default function ResultTable() {
  const [race, setRace] = useState(false);

  const openRace = () => {
    document.documentElement.scrollTop = 0;
    setRace(true);
  };

  const hideResultModel = () => {
    setRace(false);
  };
  return (
    <>
      {race && <RaceResult hide={hideResultModel} />}

      <div className="races-table">
        <table>
          <thead>
            <tr>
              <th>EVENT</th>
              <th>EVENT TYPE</th>
              <th>DISTANCE</th>
              <th>DATE</th>
              <th>PRIZE POOL</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
            </tr>
            <tr onClick={openRace}>
              <td className="event-title">
                <strong>
                  <strong>
                    NASCAR Stakes
                    <span>US ∙ Charlotte </span>
                  </strong>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="Free"
                      width="53"
                      height="24"
                    />
                  </strong>
                </strong>
              </td>
              <td className="event-type">
                <span>IV</span>
              </td>
              <td className="distance">1000m</td>
              <td className="date">14 May 2022, 02:38</td>
              <td className="price">
                <strong>$30.44</strong> <span>USD</span>
              </td>
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
            color: var(--colorWhite);
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
          .event-type span {
            background: #375b55;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }
          .event-type {
            color: #fff;
          }
          .date {
            color: #646a71;
          }
          .distance {
            color: #646a71;
          }
          .price {
            text-align: right;
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
          .event-title > strong {
            display: flex;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}
