import { forthStageQuestionnaireData } from "../../data/conditionsData"
import { QuestionnaireList } from "./questionnaire-list"

export const ForthStage = ({ setAdoptionProcessStage }: { setAdoptionProcessStage: Function }) => {

    return <div className="questionnaire">

        <p>אז לפני שקובעים דייט, חשוב לנו לדעת עוד כמה פרטים כדי שונכל לתת לכם את הוראות הטיפול הטובות ביותר עבור הכלב שתבחרו לאמץ :) </p>

        <QuestionnaireList questionnaireData={forthStageQuestionnaireData} />
        <button>לשלב האחרון &#62;&#62;</button>

    </div>
}