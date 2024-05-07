import { useState } from "react";

export default function Calculator({ handleBMIValue }) {
  const [measuring, setMeasuring] = useState("metric");

  return (
    <div id="calculator">
      <h3>Enter your details below</h3>
      <div className="input-group input-radio">
        <div className="input-pair">
          <input
            type="radio"
            name="classification"
            id="metric"
            onChange={() => setMeasuring("metric")}
            defaultChecked
          />
          <label htmlFor="metric">Metric</label>
        </div>
        <div className="input-pair">
          <input
            type="radio"
            name="classification"
            id="imperial"
            onChange={() => setMeasuring("imperial")}
          />
          <label htmlFor="imperial">Imperial</label>
        </div>
      </div>
      {measuring === "metric" ? (
        <div className="input-group input-measurements">
          <div className="input-pair" id="height">
            <input
              type="number"
              placeholder="0"
              name="height"
              onChange={(e) =>
                // handleBMIValue((prevValue) => ({
                //   ...prevValue,
                //   height: e.target.value,
                // }))
                console.log(handleBMIValue)
                // console.log(e.target.value)
              }
            />
            <span>cm</span>
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-pair" id="weight">
            <input type="number" placeholder="0" name="weight" id="weight" />
            <span>kg</span>
            <label htmlFor="weight">Weight</label>
          </div>
        </div>
      ) : (
        <div className="input-group input-measurements imperial">
          <div className="input-pair" id="height">
            <div className="input-imperial">
              <div className="input__imperial-container">
                <input type="number" placeholder="0" name="height" />
                <span>ft</span>
              </div>
              <div className="input__imperial-container">
                <input type="number" placeholder="0" name="height" />
                <span>in</span>
              </div>
            </div>
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-pair" id="weight">
            <div className="input-imperial">
              <div className="input__imperial-container">
                <input
                  type="number"
                  placeholder="0"
                  name="weight"
                  id="weight"
                />
                <span>st</span>
              </div>
              <div className="input__imperial-container">
                <input
                  type="number"
                  placeholder="0"
                  name="weight"
                  id="weight"
                />
                <span>lbs</span>
              </div>
            </div>
            <label htmlFor="weight">Weight</label>
          </div>
        </div>
      )}
      <div id="result">
        <div className="result-text">
          <p>Your BMI is...</p>
          <h2>23.5</h2>
        </div>

        <div className="result-description">
          <p>
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span>63.3kgs - 85.2kgs</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
