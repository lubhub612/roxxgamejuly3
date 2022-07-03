import { useState } from 'react';
import RaceTable from './RaceTable';

export default function EventOpen() {
  const [classRaces, setClassRaces] = useState('');
  return (
    <>
      <div className="event-open">
        <div className="container">
          <div className="event-open-inner">
            <h2>Races Open</h2>
            <div className="event-open-select">
              <button className="active" onClick={() => setClassRaces('All')}>
                All
              </button>
              <button onClick={() => setClassRaces('Class 7')}>Class VII</button>
              <button onClick={() => setClassRaces('Class 6')}>Class VI</button>
              <button onClick={() => setClassRaces('Class 5')}>Class V</button>
              <button onClick={() => setClassRaces('Class 4')}>Class IV</button>
              <button onClick={() => setClassRaces('Class 3')}>Class III</button>
              <button onClick={() => setClassRaces('Class 2')}>Class II</button>
              <button onClick={() => setClassRaces('Class 1')}>Class I</button>
              <button onClick={() => setClassRaces('G3')}>G3</button>
              <button onClick={() => setClassRaces('G2')}>G2</button>
              <button onClick={() => setClassRaces('G1')}>G1</button>
            </div>
          </div>
          <RaceTable classRaces={classRaces} />
        </div>
      </div>
      <style jsx>
        {`
          .event-open {
            background: var(--background);
            padding: 60px 0;
          }

          .event-open-inner {
            display: flex;
            align-items: center;
            color: #5b6068;
            margin-bottom: 30px;
            gap: 30px;
            grid-template-columns: 1fr 8fr;
          }

          .event-open-inner h2 {
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 500;
          }

          .event-open-select button {
            background: var(--eventButtonBg);
            border: none;
            border-radius: 50px;
            padding: 8px 20px;
            color: var(--eventButtonColor);
            margin: 5px 10px;
            cursor: pointer;
          }
          .event-open-select button.active {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }
          @media screen and (max-width: 991px) {
            .event-open-inner {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .event-open {
              padding: 40px 0;
            }

            .event-open-select {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 14px;
            }

            .event-open-select button {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
}
