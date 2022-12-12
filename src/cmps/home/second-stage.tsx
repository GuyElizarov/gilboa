
import {SecondStageQuestionnaireList} from "./second-stage-questionnaire-list"

export const SecondStage = () => {


    return <div className="second-stage-questionnaire">
        <p className="flex column">

            <span>אז אחרי שהבנתם מה נדרש ממכם כדי לאמץ כלב, </span>
            <span>נשארו לנו עוד כמה שאלות קטנות לפני שתוכלו לפגוש את החבר הכי טוב החדש שלכם 🐶.</span>
            <span>אל תדאגו - תמיד אפשר לשנות את התשובות שלכם בדף X (או לחזור אחורה).</span>
        </p>
        <SecondStageQuestionnaireList />
        
        <button>הצג התאמות &#62;&#62;</button>

    </div>
}