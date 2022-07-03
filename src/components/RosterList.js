import Image from 'next/image';
import Link from 'next/link';

export default function RosterList() {
  return (
    <>
      <div className="roster-list">
        <div className="container">
          <div className="roster-list-inner">
            <h2>Race Roster</h2>
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
            <div className="roster-list-items">
              <ul>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span className="roster-img">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="54"
                          height="54"
                        />
                      </span>
                      <span className="roster-title">
                        MINDDS
                        <span className="roster-dots">
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Z5</strong>
                          <strong>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </strong>
                          <strong>Colt</strong>
                        </span>
                      </span>
                      <span className="roster-sub">Rancho e Casa</span>
                      <span className="roster-link">
                        See Tx
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
                      </span>
                      <span>06:19 Jul 21</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .roster-list {
            padding: 30px 0;
          }

          .roster-list-inner h2 {
            color: #585c63;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .roster-list-search {
            display: flex;
            align-items: center;
            justify-content: space-between;
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
            background: var(--studListBg);
            padding: 20px 30px;
            border-radius: 8px;
            position: relative;
            color: var(--colorWhite);
            font-weight: 500;
          }
          .roster-list ul li a:hover {
            background: var(--rosterBgHover);
          }
          .roster-img {
            position: absolute;
            left: 0;
            bottom: 0;
          }
          .roster-title {
            padding-left: 50px;
          }
          .roster-title strong {
            font-weight: 500;
            color: #6a6f76;
            margin: 0 3px;
          }
          .roster-dots {
            margin-left: 10px;
          }
          .roster-dots strong svg {
            vertical-align: middle;
          }
          .roster-sub {
            color: #6a6f76;
          }
          .roster-dots strong svg {
            vertical-align: middle;
          }

          .roster-link {
            display: flex;
            gap: 10px;
            color: #a9afb6;
          }

          .roster-link svg {
            width: 18px;
            height: 18px;
          }
          .roster-list-items {
            margin-top: 30px;
          }

          @media screen and (max-width: 991px) {
            .roster-list-search input,
            .roster-list-search select {
              background: transparent;
              border: 1px solid#676b72;
              padding: 12px 20px;
              min-width: auto;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              color: #fff;
              font-size: 14px;
            }
            .roster-list-items {
              overflow: auto;
            }
            .roster-list ul li a {
              gap: 30px;
              min-width: max-content;
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
