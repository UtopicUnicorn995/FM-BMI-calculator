
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
        </div>
        
}
