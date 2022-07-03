import Image from 'next/image';
import Link from 'next/link';
import LoadMoreButton from './LoadMoreButton';

export default function Event() {
  return (
    <>
      <div className="event">
        <div className="container">
          <div className="event-top">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              NEXT TO RUN
            </span>
            <Link href="/">
              <a>See All</a>
            </Link>
          </div>

          <div className="event-area">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-flag"
                viewBox="0 0 16 16"
              >
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
              </svg>
              UP AND COMING
            </span>
            <div className="event-area-inner">
              <div className="event-item">
                <Image src="/images/event1.png" alt="event" layout="fill" />
                <div className="event-item-content">
                  <span>CA</span>
                  <h2>Edmonton</h2>
                  <h3>Class III</h3>
                  <h4>
                    $2.39 <span>USD</span>
                  </h4>
                  <h5>
                    <span>1</span>gate left
                  </h5>
                  <button>Enter</button>
                </div>
              </div>
              <div className="event-item">
                <Image src="/images/event2.png" alt="event" layout="fill" />
                <div className="event-item-content">
                  <span>IT</span>
                  <h2>Turin</h2>
                  <h3>Class II</h3>
                  <h4>
                    $2.39 <span>USD</span>
                  </h4>
                  <h5>
                    <span>1</span>gate left
                  </h5>
                  <button>Enter</button>
                </div>
              </div>
              <div className="event-item">
                <Image src="/images/event3.png" alt="event" layout="fill" />
                <div className="event-item-content">
                  <span>US</span>
                  <h2>Charlotte</h2>
                  <h3>Class III</h3>
                  <h4>
                    $2.39 <span>USD</span>
                  </h4>
                  <h5>
                    <span>11</span>gate left
                  </h5>
                  <button>Enter</button>
                  <strong>
                    <Image
                      src="/images/free.svg"
                      alt="free"
                      width={53}
                      height={24}
                    />
                  </strong>
                </div>
              </div>
            </div>
            <LoadMoreButton>More Races</LoadMoreButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .event {
            background: var(--background);
            padding: 40px 0;
          }
          span {
            color: var(--titleColor);
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 1px;
          }
          svg {
            width: 22px;
            height: 22px;
          }
          .event-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .event-top a {
            color: var(--colorWhite);
            font-weight: 600;
            font-size: 16px;
          }
          .event-top a:hover {
            text-decoration: underline;
          }
          .event-item {
            position: relative;
            height: 200px;
            transition: 0.3s;
          }

          .event-area-inner {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
          }

          .event-area {
            margin-top: 30px;
          }

          .event-item:after {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            content: '';
            background: linear-gradient(
              90deg,
              #000000c4 0,
              rgb(9 152 220 / 8%)
            );
          }
          .event-item-content {
            position: absolute;
            padding: 30px;
            color: #fff;
            z-index: 1;
            width: 100%;
            height: 100%;
          }

          .event-item-content span {
            color: #f0f8ff5e;
            margin: 0;
            font-size: 12px;
          }

          .event-item-content h2 {
            font-weight: 600;
            margin: 5px 0;
            font-size: 24px;
          }

          .event-item-content h3 {
            font-weight: 600;
            font-size: 15px;
          }

          .event-item-content h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #f0b90b;
            margin-top: 30px;
          }

          .event-item-content h5 {
            position: absolute;
            right: 30px;
            bottom: 23px;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .event-item-content h5 span {
            color: #fff;
            font-size: 24px;
          }

          .event-item-content button {
            position: absolute;
            right: 30px;
            bottom: 30px;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px #f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 36px;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 1px;
            visibility: hidden;
            opacity: 0;
          }
          .event-item-content button:hover {
            filter: brightness(1.15);
          }
          .event-item:hover button {
            visibility: visible;
            opacity: 1;
          }
          .event-item:hover {
            filter: brightness(1.15);
          }
          .event-item-content h4 span {
            font-weight: 500;
          }
          .event-item-content strong {
            position: absolute;
            right: 30px;
            top: 30px;
          }
          @media screen and (max-width: 991px) {
            .event {
              padding: 40px 0;
            }

            .event-area-inner {
              grid-template-columns: 1fr;
              gap: 15px;
            }
            .event-top {
              align-items: self-start;
            }
            .event-top a {
              font-weight: 500;
              font-size: 14px;
              opacity: 0.6;
            }
          }
        `}
      </style>
    </>
  );
}
