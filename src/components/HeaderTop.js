export default function HeaderTop() {
  return (
    <>
      <div className="header-top">
        <span>community news</span>
        <h2>💫 🏆 The new and improved Class 1 Premier is here 🏆 💫</h2>
      </div>
      <style jsx>
        {`
          .header-top {
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: center;
            padding: 6px;
            background: #fae8b1;
          }

          .header-top h2 {
            font-size: 14px;
            color: #000;
            font-weight: 400;
          }

          .header-top span {
            text-transform: uppercase;
            font-size: 10px;
            background: #fff;
            padding: 1px 10px;
            border-radius: 5px;
            color: #000;
          }
          @media screen and (max-width: 991px) {
            .header-top {
              display: block;
              text-align: center;
            }

            .header-top span {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
