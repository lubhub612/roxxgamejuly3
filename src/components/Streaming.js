import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
export default function Streaming() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      <div className="streaming">
        <div className="container">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
            STREAMING NOW
          </span>
          {isSSR ? null : (
            <ReactPlayer
              playing={true}
              loop={true}
              width="100%"
              height={500}
              controls
              url="https://www.twitch.tv/videos/1476454365"
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .streaming {
            background: var(--videoBg);
            padding: 0 0 60px;
          }
          span {
            color: #f0f8ff5e;
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
        `}
      </style>
    </>
  );
}
