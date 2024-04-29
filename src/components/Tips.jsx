import eatingIcon from "/assets/images/icon-eating.svg";
import exerciseIcon from "/assets/images/icon-exercise.svg";
import sleepIcon from "/assets/images/icon-sleep.svg";


export default function Tips(){
    return <section id="tips">
        <div className="tips-card">
           <img src={eatingIcon} alt="" className="tips-icon" />
           <div className="tips-text">
            <h3>Healthy eating</h3>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
           </div>
        </div>
        <div className="tips-card">
           <img src={exerciseIcon} alt="" className="tips-icon" />
           <div className="tips-text">
            <h3>Regular exercise</h3>
            <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.</p>
           </div>
        </div>
        <div className="tips-card">
           <img src={sleepIcon} alt="" className="tips-icon" />
           <div className="tips-text">
            <h3>Adequate sleep</h3>
            <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
           </div>
        </div>
    </section>
}