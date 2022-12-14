
import { QuestionnaireList } from "./questionnaire-list"
import { secondSageQuestionnaireData } from "../../data/conditionsData"

export const SecondStage = ({ setAdoptionProcessStage }: { setAdoptionProcessStage: Function }) => {

    const onchangeAdoptionProcess = () => {
        setAdoptionProcessStage('forth')
    }


    return <div className="questionnaire">
        <p className="flex column">

            <span>אז אחרי שהבנתם מה נדרש ממכם כדי לאמץ כלב, </span>
            <span>נשארו לנו עוד כמה שאלות קטנות לפני שתוכלו לפגוש את החבר הכי טוב החדש שלכם 🐶.</span>
            <span>אל תדאגו - תמיד אפשר לשנות את התשובות שלכם בדף X (או לחזור אחורה).</span>
        </p>
        <QuestionnaireList questionnaireData={secondSageQuestionnaireData} />

        <button onClick={onchangeAdoptionProcess} >הצג התאמות &#62;&#62;</button>

    </div>
}