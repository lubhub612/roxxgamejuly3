import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
export default function CollectionCreate() {
  const [category, setCategory] = useState(false);
  const [coin, setCoin] = useState(false);
  return (
    <Layout>
      <div className="collection-create">
        <div className="container">
          <h2>Create a Collection</h2>

          <div className="collection-input-item">
            <h3>Logo Image</h3>
            <p>
              This image will also be used for navigation. 350 x 350
              recommended.
            </p>
            <div className="input-image">
              <button className="input-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </button>
              <input type="file" name="logo" />
            </div>
          </div>
          <div className="collection-input-item">
            <h3>Featured image</h3>
            <p>
              This image will be used for featuring your collection on the
              homepage, category pages, or other promotional areas of OpenSea.
              600 x 400 recommended.
            </p>
            <div className="input-image">
              <button className="input-btn input-width">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </button>
              <input type="file" name="logo" />
            </div>
          </div>
          <div className="collection-input-item">
            <h3>Banner image</h3>
            <p>
              This image will appear at the top of your collection page. Avoid
              including too much text in this banner image, as the dimensions
              change on different devices. 1400 x 350 recommended.
            </p>
            <div className="input-image">
              <button className="input-btn input-large-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </button>
              <input type="file" name="logo" />
            </div>
          </div>
          <div className="collection-input-item">
            <h3>Name</h3>
            <input type="text" placeholder="Example: Treasures of the Sea" />
          </div>
          <div className="collection-input-item">
            <h3>URL</h3>
            <p>
              Customize your URL on OpenSea. Must only contain lowercase
              letters, numbers, and hyphens.
            </p>
            <input
              type="text"
              placeholder="https://rox.run/collection/treasures-of-the-sea"
            />
          </div>
          <div className="collection-input-item">
            <h3>Description</h3>
            <p>Markdown syntax is supported. 0 of 1000 characters used.</p>
            <textarea rows="12"></textarea>
          </div>
          <div className="collection-input-item">
            <h3>Category</h3>
            <p>
              Adding a category will help make your item discoverable on
              OpenSea.
            </p>
            <div className="collection-category">
              <span onClick={() => setCategory((e) => !e)}>
                All categories
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
                <ul>
                  <li onClick={() => setCategory(false)}>New</li>
                  <li onClick={() => setCategory(false)}>Art</li>
                  <li onClick={() => setCategory(false)}>Collectibles</li>
                  <li onClick={() => setCategory(false)}>Domain Names</li>
                  <li onClick={() => setCategory(false)}>Music</li>
                  <li onClick={() => setCategory(false)}>Photography</li>
                  <li onClick={() => setCategory(false)}>Sports</li>
                  <li onClick={() => setCategory(false)}>Trading Cards</li>
                  <li onClick={() => setCategory(false)}>Utility</li>
                  <li onClick={() => setCategory(false)}>Virtual Worlds</li>
                </ul>
              )}
            </div>
          </div>
          <div className="collection-input-item">
            <h3>Links</h3>
            <ul className="collection-link-list">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                <input type="text" />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
                <input type="text" />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <input type="text" />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-medium"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                </svg>
                <input type="text" />
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
                <input type="text" />
              </li>
            </ul>
          </div>
          <div className="collection-input-item">
            <h3>Creator Earnings</h3>
            <p>
              Collect a fee when a user re-sells an item you originally created.
              This is deducted from the final sale price and paid monthly to a
              payout address of your choosing. Learn more about creator
              earnings.
            </p>
            <input type="text" placeholder="e.g. 2.5" />
          </div>
          <div className="collection-input-item">
            <h3>Blockchain</h3>
            <p>
              Select the blockchain where you&apos;d like new items from this
              collection to be added by default.
            </p>
            <div className="collection-category">
              <span onClick={() => setCoin((e) => !e)}>
                Ethereum
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
              {coin && (
                <ul>
                  <li onClick={() => setCoin(false)}>Ethereum</li>
                  <li onClick={() => setCoin(false)}>Polygon</li>
                  <li onClick={() => setCoin(false)}>Klaytn</li>
                  <li onClick={() => setCoin(false)}>Solana</li>
                </ul>
              )}
            </div>
          </div>
          <div className="collection-input-item">
            <h3>Display theme</h3>
            <p>Change how your items are shown.</p>
            <ul className="collection-choose">
              <li className="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <Image
                  src="/images/card-display-padded.svg"
                  width={211}
                  height={97}
                  alt="card"
                />
                <h3>Padded</h3>
                <p>Recommended for assets with transparent background</p>
              </li>
              <li>
                <Image
                  src="/images/card-display-contain.svg"
                  width={211}
                  height={97}
                  alt="card"
                />
                <h3>Contained</h3>
                <p>Recommended for assets that are not a 1:1 ratio</p>
              </li>
              <li>
                <Image
                  src="/images/card-display-cover.svg"
                  width={211}
                  height={97}
                  alt="card"
                />
                <h3>Covered</h3>
                <p>Recommended for assets that can extend to the edge</p>
              </li>
            </ul>
          </div>
          <div className="collection-input-item">
            <h3>Explicit & sensitive content</h3>
            <p>Set this collection as explicit and sensitive content</p>
          </div>
          <div className="collection-input-item">
            <button>Create</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .collection-create {
            padding: 50px 0 20px;
          }
          .input-image {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }
          .collection-input-item .input-btn {
            border: 2px dotted var(--colorWhite);
            color: var(--colorWhite);
            background: transparent;
            padding: 20px;
            border-radius: 8px;
            font-size: 20px;
            font-weight: bold;
            width: 180px;
            height: 180px;
            border-radius: 100%;
          }
          .input-btn svg {
            width: 70px;
            height: auto;
          }
          .input-image input[type='file'] {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            cursor: pointer;
          }
          .collection-input-item .input-btn.input-width {
            width: 350px;
            height: 200px;
            border-radius: 10px;
          }

          .collection-input-item .input-btn.input-large-img {
            border-radius: 10px;
            width: 700px;
            height: 200px;
          }
          .collection-category {
            position: relative;
            max-width: fit-content;
          }

          .collection-category span {
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

          .collection-category ul {
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

          .collection-category ul li {
            padding: 8px 20px;
            cursor: pointer;
          }

          .collection-category ul li:hover {
            background: var(--settingItemBg);
          }
          .collection-create h2 {
            font-size: 36px;
          }

          .collection-input-item h3 {
            font-size: 16px;
            margin-bottom: 5px;
          }

          .collection-input-item p {
            opacity: 0.5;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .collection-input-item {
            margin: 50px 0;
          }

          .collection-input-item input,
          .collection-input-item textarea {
            border: 2px solid var(--borderColor);
            background: transparent;
            width: 100%;
            padding: 18px;
            font-size: 14px;
            color: var(--colorWhite);
            border-radius: 10px;
          }

          .collection-link-list li {
            position: relative;
            margin: 10px 0;
          }

          .collection-link-list li svg {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
          }

          .collection-link-list li input {
            padding: 18px 50px;
          }

          .collection-choose {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 60%;
            gap: 30px;
          }

          .collection-choose li {
            border: 1px solid var(--borderColor);
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
          }

          .collection-choose li h3 {
            margin-top: 10px;
          }

          .collection-choose li p {
            margin-bottom: 0;
          }

          .collection-input-item button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 20px 50px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
          }
          .collection-choose li.active {
            border: 1px solid #eab50e;
            position: relative;
          }

          .collection-choose li.active svg {
            position: absolute;
            right: -10px;
            width: 30px;
            height: auto;
            z-index: 9;
            top: -10px;
            color: #eab50e;
          }
          @media screen and (max-width: 991px) {
            .collection-input-item .input-btn.input-large-img,
            .collection-input-item .input-btn.input-width {
              width: 80vw;
            }
          }
        `}
      </style>
    </Layout>
  );
}
