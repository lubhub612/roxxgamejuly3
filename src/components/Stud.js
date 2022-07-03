import Image from 'next/image';
import LoadMoreButton from './LoadMoreButton';

export default function Stud() {
  return (
    <>
      <div className="stud">
        <div className="container">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            In Stud
          </span>
          <div className="stud-area">
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
            <div className="stud-item">
              <div className="stud-item-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={512}
                  height={512}
                />
              </div>
              <h2>
                Sugar Pine Cool <strong>Z3 · Stallion · Szabo</strong>
              </h2>
              <h3>
                $266.01 <strong>USD</strong>
              </h3>
            </div>
          </div>
          <LoadMoreButton>More Breeding</LoadMoreButton>
        </div>
      </div>

      <style jsx>
        {`
          .stud {
            background: var(--background);
            padding: 0 0 50px;
          }

          .stud span {
            color: var(--colorWhite);
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 1px;
            gap: 10px;
          }

          .stud-item {
            background-color: var(--studListBg);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            cursor: pointer;
            display: grid;
            grid-template-columns: 4fr 1fr;
            position: relative;
            padding: 15px;
            overflow: hidden;
            transition: 0.3s;
          }
          .stud-item:hover {
            background-color: var(--hoverBg);
            box-shadow: var(--hoverShadow);
          }
          .stud-item-img {
            width: 51px;
            height: 51px;
            position: absolute;
            bottom: 0;
          }

          .stud-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 25px;
            row-gap: 15px;
          }

          .stud-item h2 {
            color: var(--colorWhite);
            font-weight: 500;
            font-size: 14px;
            margin-left: 65px;
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .stud-item h2 strong {
            color: var(--titleColor);
            font-weight: 400;
          }

          .stud-item h3 {
            color: var(--colorWhite);
            font-weight: 500;
            color: #f0b90c;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .stud-item h3 strong {
            font-weight: 400;
            color: var(--titleColor);
            font-size: 14px;
          }
          @media screen and (max-width: 991px) {
            .stud-area {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
}
