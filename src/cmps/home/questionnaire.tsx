
import {QuestionnaireList} from "./questionnaire-list"

export const Questionnaire = () => {


    return <div className="questionnaire">
        <p className="flex column">

            <span>אז אחרי שהבנתם מה נדרש ממכם כדי לאמץ כלב, </span>
            <span>נשארו לנו עוד כמה שאלות קטנות לפני שתוכלו לפגוש את החבר הכי טוב החדש שלכם 🐶.</span>
            <span>אל תדאגו - תמיד אפשר לשנות את התשובות שלכם בדף X (או לחזור אחורה).</span>
        </p>
        <QuestionnaireList />
        
        <button>הצג התאמות &#62;&#62;</button>

    </div>
}