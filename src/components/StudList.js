import Image from 'next/image';

export default function RosterList() {
  return (
    <>
      <div className="roster-list">
        <div className="container">
          <div className="roster-list-inner">
            <h2>Stud Farm</h2>
            <p>
              This is the stud farm, where you can look for the perfect match
              for your filly or mare. Below you will see all of the colts and
              stallions currently in the stud farm and ready to breed.
            </p>
            <div className="roster-list-search">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="text" placeholder="Search" />
              </span>
              <strong>
                SORT BY:
                <select name="" id="">
                  <option value="Recently Listed">Recently Listed</option>
                  <option value="Expiring Soon">Expiring Soon</option>
                  <option value="Highest Price">Highest Price</option>
                  <option value="Lowest Price">Lowest Price</option>
                </select>
              </strong>
            </div>
            <div className="races-table">
              <table>
                <thead>
                  <tr>
                    <th>STALLION</th>
                    <th>STABLE</th>
                    <th>TIME LEFT</th>
                    <th className="races-table-last">STUD FEE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="event-title">
                      <strong>
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width={80}
                          height={80}
                        />
                      </strong>
                      NASCAR Stakes
                      <span>US ∙ Charlotte </span>
                    </td>
                    <td className="distance">Moverlocks</td>
                    <td>12h 3m</td>
                    <td className="price">
                      <strong>$30.44</strong> <span>USD</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .races-table {
            overflow-x: auto;
          }
          .roster-list {
            padding: 30px 0;
          }
          .event-title strong {
            position: absolute;
            left: 0;
            bottom: -6px;
          }
          .event-title {
            padding-left: 100px !important;
          }
          .races-table th.races-table-last {
            text-align: right;
          }
          .event-title strong {
            position: absolute;
            left: 0;
            bottom: -6px;
          }
          .roster-list-inner h2 {
            color: var(--colorWhite);
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 20px;
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
          .run-live {
            color: #f0b90c;
            text-align: right;
          }
          .price span {
            font-weight: 500;
            color: #646a71;
            text-transform: uppercase;
          }
          .roster-list-search {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .roster-list-inner p {
            max-width: 500px;
            font-size: 16px;
            margin-bottom: 30px;
          }
          .roster-list-search input,
          .roster-list-search select {
            background: transparent;
            border: 1px solid #676b72;
            padding: 12px 20px;
            min-width: 250px;
            border-radius: 5px;
            color: var(--colorWhite);
            font-size: 14px;
          }

          .roster-list-search strong {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #61666c;
            font-weight: 600;
          }

          .roster-list-search span {
            position: relative;
          }

          .roster-list-search span svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
          }

          .roster-list-search span input {
            padding-left: 40px;
          }
          .roster-list ul li {
            margin-bottom: 15px;
          }
          .roster-list ul li a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--race);
            padding: 20px 30px;
            border-radius: 8px;
            position: relative;
            color: var(--colorWhite);
            font-weight: 500;
          }
          .roster-list ul li a:hover {
            background: #3b3f47;
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
          .races-table tbody td {
            padding: 20px;
            border-bottom: 15px solid var(--studListBorder);
            font-weight: 600;
            position: relative;
          }

          .event-title span {
            display: block;
            color: #646a71;
            font-size: 12px;
            font-weight: 500;
          }
          .races-table tbody tr {
            background: var(--studListBg);
            margin-bottom: 10px;
          }
          .races-table tbody tr:hover {
            background: var(--studListHover);
            cursor: pointer;
          }
          .event-title {
            color: var(--colorWhite);
          }
          @media screen and (max-width: 991px) {
            .roster-list-search input,
            .roster-list-search select {
              background: transparent;
              border: 1px solid#676b72;
              padding: 12px 20px;
              min-width: auto;
              border-radius: 5px;
              color: #fff;
              font-size: 14px;
            }
            .roster-list-search {
              display: block;
            }
            .roster-list-search input {
              width: 100%;
              margin-bottom: 20px;
            }

            .roster-list-search strong select {
              color: var(--colorWhite);
            }
            .roster-list-search strong {
              display: grid;
            }
          }
        `}
      </style>
    </>
  );
}
