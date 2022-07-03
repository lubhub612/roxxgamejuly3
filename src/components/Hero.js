export default function Hero() {
  return (
    <>
      <div className="hero-area">
        <h2>OWN. RACE. EARN.</h2>
        <p>
          The future of digital racehorse ownership is here. Race your way to
          the top and build your legacy today.
        </p>
        <button>Start</button>
      </div>
      <style jsx>
        {`
          .hero-area {
            background-image: linear-gradient(
                180deg,
                rgba(31, 28, 58, 0.9),
                rgba(31, 28, 58, 0.9) 10%,
                transparent 40%,
                rgba(34, 38, 45, 0.75) 70%,
                #22262d 90%
              ),
              url('images/hero-bg.jpg');
            background-position: 0 50%;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 200px 0 140px;
            text-align: center;
            color: #fff;
          }
          .hero-area h2 {
            font-size: 52px;
            font-weight: 700;
            letter-spacing: 3px;
          }

          .hero-area p {
            font-size: 18px;
            max-width: 640px;
            margin: 10px auto 50px;
          }

          button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px #f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
            font-weight: 500;
            padding: 18px 40px;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 20px;
          }
          button:hover {
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .hero-area p {
              padding: 0 20px;
            }
          }
        `}
      </style>
    </>
  );
}
