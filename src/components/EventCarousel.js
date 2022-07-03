import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function EventCarousel() {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="event-carousel">
        <div className="container">
          <div className="event-carousel-inner">
            <h2>
              <span>Next to Run</span>
              <Link href="#">
                <a>See All</a>
              </Link>
            </h2>
            <Slider {...settings}>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
              <div className="event-carousel-item">
                <Link href="#">
                  <a>
                    <span className="circle-pulse"></span>
                    <h3>Nagpur Cup</h3>
                    <strong>Live</strong>
                  </a>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <style jsx>{`
        .event-carousel {
          background: var(--background);
          padding: 30px 0;
        }

        .event-carousel-inner h2 {
          font-size: 14px;
          color: var(--colorWhite);
          opacity: 0.6;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .event-carousel-inner h2 a {
          color: var(--titleColor);
        }
        .event-carousel-item {
          border-radius: 5px;
        }
        .event-carousel-item a {
          display: block;
          background: #ddd;
          padding: 12px;
          border-radius: 5px;
          min-height: 100px;
          display: grid;
          position: relative;
          background-color: #2a2e35;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
          background-image: linear-gradient(
            90deg,
            #747e163d,
            rgba(42, 46, 53, 0.06)
          );
        }

        .event-carousel-item h3 {
          color: #fff;
          font-weight: 500;
          font-size: 14px;
        }

        .event-carousel-item strong {
          color: #e8b208;
          font-weight: 500;
          font-size: 12px;
          display: flex;
          align-items: flex-end;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            width: 7px;
            height: 7px;
            left: 0;
            top: 0;
          }
          95% {
            opacity: 0.1;
            left: -10.5px;
            top: -10.5px;
            width: 28px;
            height: 28px;
          }
          100% {
            opacity: 0;
            width: 7px;
            height: 7px;
            left: 0;
            top: 0;
          }
        }
        .circle-pulse {
          background: #ff231f;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          position: absolute;
          right: 15px;
          top: 15px;
          z-index: 9999;
        }
        .circle-pulse:after {
          background-color: #ff231f;
          content: '';
          display: table;
          border-radius: 50%;
          position: absolute;
          animation-name: pulse;
          animation-duration: 0.9s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-out;
        }
        span.jsx-a7b3ee4c5db29835.circle-pulse {
        }
      `}</style>
    </>
  );
}
