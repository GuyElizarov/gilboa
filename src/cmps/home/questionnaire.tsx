import dog from "../../assets/imgs/dog.png"
import clock from "../../assets/imgs/clock.png"
import baby from "../../assets/imgs/baby.png"

export const Questionnaire = () => {


    return <div className="questionnaire">
        <div className="questionnaire-top-container flex column">
            <span>אז אחרי שהבנתם מה נדרש ממכם כדי לאמץ כלב, </span>
            <span>נשארו לנו עוד כמה שאלות קטנות לפני שתוכלו לפגוש את החבר הכי טוב החדש שלכם 🐶.</span>
            <span>אל תדאגו - תמיד אפשר לשנות את התשובות שלכם בדף X (או לחזור אחורה).</span>
        </div>
        <div className="questionnaire-bottom-container flex">
            <div className="questionnaire-card app-card">
                <img src={dog} alt="" />
            </div>
            <div className="questionnaire-card app-card">
                <img src={clock} alt="" />
            </div>
            <div className="questionnaire-card app-card">
                <img src={baby} alt="" />
            </div>
        </div>

    </div>
}