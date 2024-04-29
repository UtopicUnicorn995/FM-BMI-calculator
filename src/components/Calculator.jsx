import { useRef } from "react"


export default function Calculator(){
    const radioBtn = useRef()

    return <div id="calculator">
                <h3>
                    Enter your details below
                </h3>
                <div className="input-group input-radio">
                    <div className="input-pair">
                        <input type="radio" name="classification" id="metric" />
                        <label htmlFor="metric">Metric</label>
                    </div>
                    <div className="input-pair">
                        <input type="radio" name="classification" id="imperial" />
                        <label htmlFor="imperial">Imperial</label>
                    </div>
                </div>
                <div className="input-group input-measurements">
                    <div className="input-pair" id="height" >
                        <input type="number" placeholder="0" name="height" />
                        <span>cm</span>
                        <label htmlFor="height">Height</label>
                    </div>
                    <div className="input-pair"  id="weight" >
                        <input type="number" placeholder="0" name="weight" id="weight" />
                        <span>kg</span>
                        <label htmlFor="weight">Weight</label>
                    </div>
                </div>
                <div id="result">
                    <div className="result-text">
                        <p>
                            Your BMI is...
                        </p>
                        <h2>
                            23.5
                        </h2>
                    </div>

                    <div className="result-description">
                       <p>
                         Your BMI suggests you’re a healthy weight. Your ideal weight is between <span>63.3kgs - 85.2kgs</span>.
                       </p>
                    </div>
                </div>
        </div>
        
}
