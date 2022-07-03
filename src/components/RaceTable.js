import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import dynamic from "next/dynamic";
const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});

export default function RaceTable({ classRaces }) {

  const { invokeServer } = useContext(GlobalContext);
  const [racetable, setRacetable] = useState([]);

  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [paginationTotal, setPaginationTotal] = useState();

  useEffect(() => {
    invokeServer("get", `/api/event?page=${page}`).then((result) => {
      let dataObject = {};
      [...racetable, ...result.data.data].forEach((item) => {
        dataObject[item.idx] = item;
      });
      setRacetable(...[Object.values(dataObject)]);
      setPaginationTotal(result.data.total);
      setLoader(false);
    });
  }, [page]);

  const loadMore = () => {
    if (page + 1 <= paginationTotal && !loader) {
      setPage(page + 1);
      setLoader(true);
    }
  };

  return (
    <>
      <div className="races-table">
        <InfiniteScroll
          initialLoad={true}
          loadMore={loadMore}
          threshold={10}
          useWindow={true}
          hasMore={true}
          dataLength={racetable?.length}
        >
          <table>
            <thead>
              <tr>
                <th>EVENT</th>
                <th>EVENT TYPE</th>
                <th>DISTANCE</th>
                <th>ENTRY FEE</th>
                <th>PRIZE POOL</th>
                <th>REGISTERED</th>
              </tr>
            </thead>
            <tbody>
              {racetable &&
                racetable
                  .filter((data) => {
                    if (classRaces === "" || classRaces === "All") {
                      return data;
                    } else if (data?.class?.Class === classRaces) {
                      return data;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="event-title">
                          {item.rcourse_id.RaceCourses}
                          <span>{item.rcourse_id.Location} ∙ {item.rcourse_id.Country} </span>
                        </td>
                        <td className="event-type">
                          <span> {item.class.Class}</span>
                        </td>
                        <td className="distance">{item.distance.Distance}</td>
                        <td className="entry-fee">
                          {item?.entry_fee ? (
                            <span>
                              {" "}
                              {parseFloat(item.entry_fee).toFixed(2)}
                            </span>
                          ) : (
                            <Image
                              src="/images/free.svg"
                              alt="free"
                              width={53}
                              height={24}
                            />
                          )}
                        </td>
                        <td className="price">
                          <strong>
                            ${parseFloat(item.entry_fee * 12).toFixed(2)}
                          </strong>{" "}
                          <span>USD</span>
                        </td>
                        <td className="register">0/12</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </InfiniteScroll>
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
            background: #66513f;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }
          .entry-fee > span {
            color: #646a71;
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
          .register {
            text-align: right;
            color: var(--colorWhite);
          }
          .races-table th:last-child {
            text-align: right;
          }
        `}
      </style>
    </>
  );
}
