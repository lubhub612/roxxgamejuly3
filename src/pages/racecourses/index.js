import Image from "next/image";
import { useContext, useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from "react-infinite-scroll-component";
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});
export default function Racecourses() {
  const [time, setTime] = useState(false);
  const [category, setCategory] = useState(false);
  const [chains, setChains] = useState(false);
  const [raceData, setRaceData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(4);

  const [regions, setRegions] = useState();
  const [regionsid, setRegionsid] = useState();
  const [page, setPage] = useState(1);
  const [paginationTotal, setPaginationTotal] = useState();
  const { invokeServer } = useContext(GlobalContext);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    invokeServer("get", `/api/race/data/${selectedRegion}?page=${page}`).then(
      (result) => {
        let dataObject = {};
        [...raceData, ...result.data.data].forEach((item) => {
          dataObject[item.idx] = item;
        });
        setRaceData(...[Object.values(dataObject)]);
        setPaginationTotal(result.data.total);
        setLoader(false);
      }
    );
  }, [selectedRegion, page]);
  useEffect(() => {
    invokeServer("get", "/api/region").then((result) => {
      setRegions(result.data);
    });
  }, []);
  const giveRegionName = (data) => {
    let regionToReturn;
    regions?.forEach((regionsData) => {
      if (regionsData?.idx === parseFloat(data)) {
        regionToReturn = regionsData?.Region;
      }
    });
    return regionToReturn;
  };
  const loadMore = () => {
    if (page + 1 <= paginationTotal && !loader) {
      setPage(page + 1);
      setLoader(true);
    }
  };
  return (
    <Layout>
      <div className="rankings">
        <div className="container">
          <h2>Racecourses</h2>
          <p>
            This is a list of currently active horse racing venues (Thoroughbred
            racing and harness racing), sorted by country. In most
            English-speaking countries they are called &quot;racecourses&quot;
            the United States and some parts of Canada use
            &quot;racetracks&quot; (some parts of Canada also use
            &quot;raceway&quot;). In many non-English speaking countries the
            term used is &quot;hippodrome&quot;.
          </p>
          <div className="rankings-head">
            <div className="rankings-item">
              <span onClick={() => setTime((e) => !e)}>
                Last 24 hours
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              {time && (
                <ul>
                  <li onClick={() => setTime(false)}>Last 24 hours</li>
                  <li onClick={() => setTime(false)}>Last 7 days</li>
                  <li onClick={() => setTime(false)}>Last 30 days</li>
                  <li onClick={() => setTime(false)}>All time</li>
                </ul>
              )}
            </div>
            <div className="rankings-item">
              <span onClick={() => setCategory((e) => !e)}>
                {regions && regions.length && giveRegionName(selectedRegion)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              {category && (
                <>
                  <ul>
                    {regions &&
                      regions.map((item, index) => (
                        <>
                          <li
                            onClick={() => {
                              setLoader(true);
                              setPage(1);
                              setRaceData([]);
                              setSelectedRegion(item.idx);
                              setCategory(false);
                            }}
                            key={index}
                          >
                            {item.Region}
                          </li>
                        </>
                      ))}
                  </ul>
                  {/* <ul>
                    <li onClick={() => setRegion(false)}>North America</li>
                    <li onClick={() => setRegion(false)}>South America</li>
                    <li onClick={() => setRegion(false)}>Europe</li>
                    <li onClick={() => setRegion(false)}>Middel East</li>
                    <li onClick={() => setRegion(false)}>African Continent</li>
                    <li onClick={() => setRegion(false)}>
                      Australian Continent
                    </li>
                  </ul> */}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="rankings-table ">
            <table>
              <InfiniteScroll
                initialLoad={true}
                loadMore={loadMore}
                threshold={15}
                useWindow={true}
                hasMore={true}
                dataLength={raceData?.length}
              >
                <thead>
                  <tr>
                    <th className="w-350">Racecourse</th>
                    {/* <th>Country</th> */}
                    {/* <th>City</th> */}
                    <th className="w-230">Region</th>
                    {/* <th>Region Name</th> */}
                    <th className="w-200">Total Races</th>
                    <th className="w-200">Races last 24h</th>
                    <th className="w-200">Total Rewards</th>
                  </tr>
                </thead>
                <tbody>
                  {raceData &&
                    raceData
                      .filter(
                        (data) => parseFloat(data.Region) === selectedRegion
                      )
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className=" event-title">
                              {/* <strong>{item.idx}</strong> */}
                              {/* <span className="img-area">
                                  <div className="img-area-inner">
                                    <img src={`/images/flags/${item.flag}`} />
                                  </div>
                                  <svg
                                    aria-label="verified-icon"
                                    className="sc-50keu7-0 fTpPkd"
                                    fill="#4281E2"
                                    viewBox="0 0 30 30"
                                  >
                                    <path
                                      className="VerifiedIcon--background"
                                      d="M13.474 2.80108C14.2729 1.85822 15.7271 1.85822 16.526 2.80108L17.4886 3.9373C17.9785 4.51548 18.753 4.76715 19.4892 4.58733L20.9358 4.23394C22.1363 3.94069 23.3128 4.79547 23.4049 6.0278L23.5158 7.51286C23.5723 8.26854 24.051 8.92742 24.7522 9.21463L26.1303 9.77906C27.2739 10.2474 27.7233 11.6305 27.0734 12.6816L26.2903 13.9482C25.8918 14.5928 25.8918 15.4072 26.2903 16.0518L27.0734 17.3184C27.7233 18.3695 27.2739 19.7526 26.1303 20.2209L24.7522 20.7854C24.051 21.0726 23.5723 21.7315 23.5158 22.4871L23.4049 23.9722C23.3128 25.2045 22.1363 26.0593 20.9358 25.7661L19.4892 25.4127C18.753 25.2328 17.9785 25.4845 17.4886 26.0627L16.526 27.1989C15.7271 28.1418 14.2729 28.1418 13.474 27.1989L12.5114 26.0627C12.0215 25.4845 11.247 25.2328 10.5108 25.4127L9.06418 25.7661C7.86371 26.0593 6.6872 25.2045 6.59513 23.9722L6.48419 22.4871C6.42773 21.7315 5.94903 21.0726 5.24777 20.7854L3.86969 20.2209C2.72612 19.7526 2.27673 18.3695 2.9266 17.3184L3.70973 16.0518C4.10824 15.4072 4.10824 14.5928 3.70973 13.9482L2.9266 12.6816C2.27673 11.6305 2.72612 10.2474 3.86969 9.77906L5.24777 9.21463C5.94903 8.92742 6.42773 8.26854 6.48419 7.51286L6.59513 6.0278C6.6872 4.79547 7.86371 3.94069 9.06418 4.23394L10.5108 4.58733C11.247 4.76715 12.0215 4.51548 12.5114 3.9373L13.474 2.80108Z"
                                    ></path>
                                    <path
                                      d="M13.5 17.625L10.875 15L10 15.875L13.5 19.375L21 11.875L20.125 11L13.5 17.625Z"
                                      fill="white"
                                      stroke="white"
                                    ></path>
                                  </svg>
                                </span> */}
                              <strong className="racestrong">
                                {item.RaceCourses}
                                <span>
                                  {item.Location} ∙ {item.Country}{" "}
                                </span>
                              </strong>
                            </td>
                            {/* <td>
                              <span className="price-with-icon">
                                <Image
                                  src="/images/coin/ropsten-chain.png"
                                  alt="icon"
                                  width={14}
                                  height={14}
                                />
                                {item.Country}
                              </span>
                            </td>
                            <td className="green">{item.Location}</td> */}
                            <td className="regiontitle">
                              <span>{giveRegionName(item.Region)}</span>
                            </td>
                            {/* <td className="red">
                              {giveRegionName(item.Region)}
                            </td> */}

                            <td>
                              <span className="price-with-icon">
                                {/* <Image
                                  src="/images/coin/ropsten-chain.png"
                                  alt="icon"
                                  width={14}
                                  height={14}
                                /> */}
                                -
                              </span>
                            </td>
                            <td>-</td>
                            <td>- </td>
                          </tr>
                        );
                      })}
                </tbody>
              </InfiniteScroll>
            </table>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .regiontitle span {
            font-weight: 500;
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
          .w-350 {
            width: 375px;
            min-width: 320px;
          }
          .w-230 {
            width: 230px;
            min-width: 200px;
          }
          .w-200 {
            width: 200px;
            min-width: 190px;
          }
          .rankings-table {
            overflow-x: auto;
          }
          .rankings {
            margin: 50px 0;
          }
          .racestrong {
            font-weight: 500;
          }

          .rankings h2 {
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            margin-bottom: 20px;
          }

          .rankings p {
            text-align: center;
            margin-bottom: 40px;
          }

          .rankings-head {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 600px;
            margin: 20px auto;
            gap: 20px;
          }

          .rankings-item {
            position: relative;
          }

          .rankings-item span {
            border: 1px solid #4c505c;
            padding: 12px 20px;
            display: block;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            cursor: pointer;
          }

          .rankings-item ul {
            position: absolute;
            top: 60px;
            left: 0;
            background: var(--background);
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
            padding: 20px 0;
            width: 100%;
            color: var(--colorWhite);
            z-index: 99;
          }

          .rankings-item ul li {
            padding: 8px 20px;
            cursor: pointer;
          }

          .rankings-item ul li:hover {
            background: var(--settingItemBg);
          }
          .rankings-table table {
            width: 100%;
            text-align: left;
            border-collapse: collapse;
            min-width: max-content;
          }

          .rankings-table table th {
            padding: 0 20px;
            height: 60px;
            font-size: 16px;
            font-weight: 600;
          }
          span.img-area svg {
            position: absolute;
            width: 20px;
            height: 20px;
            bottom: 0;
            right: 0;
          }
          .rankings-table td .single-item {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .price-with-icon {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .img-area-inner {
            border-radius: 50px;
            overflow: hidden;
            width: 50px;
            height: 50px;
            position: relative;
          }
          .single-item .img-area {
            position: relative;
          }
          .rankings-table td {
            padding: 10px 20px;
            font-size: 16px;
            font-weight: 600;
          }
          .green {
            color: #34c77b;
          }
          .red {
            color: #e85655;
          }
          .rankings-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
          @media screen and (max-width: 991px) {
            .rankings-head {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>
    </Layout>
  );
}
