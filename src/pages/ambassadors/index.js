import Image from 'next/image';
import Layout from '../../components/Layout';
export default function CollectionCreate() {
  return (
    <Layout>
      <div className="ambassadors">
        <div className="container">
          <span>JOIN THE 2022</span>
          <h2>
            AMBASSADOR <br />
            PROGRAM
          </h2>
        </div>
      </div>
      <div className="ambassadors-info">
        <div className="container">
          <h2>BECOME OUR INFLUENCER</h2>
          <p>
Do you believe in the future of crypto? Join the ROX RUN  influencer program and get rewarded every time you share ROX RUN content (videos/articles/images/etc).
We’re looking for crypto bloggers, YouTubers, Instagramers, TikTokers, chat moderators, and any creator who loves crypto and wants to join the ROX RUN family.
          </p>
          <div className="ambassadors-info-list">
            <div className="ambassadors-info-list-content">
              <h3>ROX RUN INFLUENCER BENEFITS</h3>
<ul>
    <li>Get monthly prizes for content published (Prize-Pool periodically increased)</li>
    <li>Shoutout of Influencer Content on official CoinMarketCap social accounts</li>
    <li>Win additional monthly &ldquo;CoinMarketCap Diamonds&rdquo;, which can be used to purchase &ldquo;Limited-Edition Influencer NFTs&rdquo; .</li>
    <li>Empowered by the CoinMarketCap &ldquo;Referral Link&rdquo;. Invite friends, win diamonds, and get NFTs</li>
    <li>Get recognized as an official &ldquo;CoinMarketCap Influencer&rdquo;, by obtaining a &ldquo;Limited-Edition Influencer NFTs&rdquo; minted on ERC-1155</li>
    <li>Meet the CoinMarketCap Team in a private Telegram group</li>
  </ul>
            </div>
            <div className="ambassadors-info-list-img">
              <Image
                src="/images/info-right-img.png"
                alt="info"
                width={665}
                height={289}
              />
            </div>
          </div>
          <div className="ambassadors-info-list">
            <div className="ambassadors-info-list-img">
              <Image
                src="/images/info-left-img.png"
                alt="info"
                width={663}
                height={406}
              />
            </div>
            <div className="ambassadors-info-list-content">
              <h3>CONTENT REQUIREMENT</h3>
              <ul>
                <li>Exclusivity - we don&apos;t accept everyone</li>
                <li>A welcome package with brand merch</li>
                <li>Your own URL with a built in discount code to for riends & family. (USA only)</li>
                <li>10% commission on orders placed using your URL (USA only)  </li>
                <li>If we share your content, you score more free Waboba products!</li>
              </ul>
            </div>
          </div>

          <div className="ambassadors-form">
            <h4>AMBASSADOR APPLICATION</h4>
            <p>
              You must be 18 years of age to apply.
            </p>
            <form action="#">
              <h5>Tell Us About Yourself</h5>
              <div className="input-group">
                <div>
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" id="firstName" />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name*</label>
                  <input type="text" id="lastName" />
                </div>
              </div>
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" />
              <label htmlFor="city">City, State, Country*</label>
              <input type="text" id="city" />
              <label htmlFor="birthday">Birthday (Month/Day/Year)*</label>
              <input type="text" id="birthday" />
              <label htmlFor="social">Link to best social profile*</label>
              <input type="text" id="social" />
              <label htmlFor="favorite">Favorite ROX RUN Product*</label>
              <input type="text" id="favorite" />
              <label htmlFor="chosen">If chosen, what would you do?*</label>
              <input type="text" id="chosen" />
              <label htmlFor="pick">Why should we pick you?</label>
              <input type="text" id="pick" />
              <input type="file" />
              <button type="submit">APPLY</button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ambassadors {
            background: url('/images/ab-banner.jpg') no-repeat center center /
              cover;
            padding: 180px 0;
            text-align: right;
          }
          .ambassadors span {
            letter-spacing: 5px;
            font-size: 34px;
            color: #fff;
          }
          .ambassadors h2 {
            font-size: 65px;
            line-height: 1.1;
            margin-top: 10px;
            color: #fff;
          }
          .ambassadors-info {
            margin: 60px 0 80px;
          }

          .ambassadors-info h2 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 20px;
          }

          .ambassadors-info p {
            text-align: center;
            font-size: 16px;
            max-width: 700px;
            margin: auto;
          }

          .ambassadors-info-list {
            display: flex;
            gap: 150px;
            align-items: center;
            margin-top: 150px;
          }

          .ambassadors-info-list-content h3 {
            font-size: 34px;
            margin-bottom: 20px;
          }

          .ambassadors-info-list-content ul li {
            list-style: disc;
            margin: 10px 0;
          }

          .ambassadors-info-list-content ul {
            padding-left: 25px;
          }

          .ambassadors-form {
            margin-top: 100px;
          }

          .ambassadors-form h4 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
          }

          .ambassadors-form form {
            border: 1px solid #efb809;
            border-radius: 5px;
            padding: 30px;
            max-width: 600px;
            margin: auto;
            margin-top: 60px;
          }

          .ambassadors-form form input {
            width: 100%;
            background: transparent;
            border: 1px solid var(--borderColor);
            padding: 12px;
            margin: 10px 0 30px;
          }

          .ambassadors-form form h5 {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .ambassadors-form form button {
            width: 100%;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 16px;
            border-radius: 10px;
            cursor: pointer;
            color: #fff;
          }

          .ambassadors-form form .input-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .ambassadors-form form button:hover {
            filter: brightness(1.15);
          }

          @media screen and (max-width: 991px) {
            .ambassadors {
              text-align: center;
            }

            .ambassadors h2 {
              font-size: 40px;
            }

            .ambassadors span {
              font-size: 20px;
            }

            .ambassadors-info-list {
              display: grid;
              gap: 60px;
              margin-top: 80px;
            }
            .ambassadors-form h4 {
              font-size: 24px;
            }
            .ambassadors-info-list-content h3 {
              font-size: 30px;
              margin-bottom: 20px;
            }
            .ambassadors-info h2 {
              font-size: 24px;
            }
            .ambassadors-form form .input-group {
              display: block;
            }
            .ambassadors {
              padding: 100px 0;
            }
          }
        `}
      </style>
    </Layout>
  );
}
