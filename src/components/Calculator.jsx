
export default function Calculator(){
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
                    <input type="number" name="height" />
                    <span>cm</span>
                    <label htmlFor="height">Height</label>
                </div>
                <div className="input-pair"  id="weight" >
                    <input type="number" name="weight" id="weight" />
                    <span>kg</span>
                    <label htmlFor="weight">Weight</label>
                </div>
            </div>
        </div>
        
}
