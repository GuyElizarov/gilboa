import { QuestionnaireCard } from "../../interface/home/conditions"

export const QuestionnairePreview = ({ cardInfo }: { cardInfo: QuestionnaireCard }) => {

    const { title, imgSrc, answers } = cardInfo
    return <div className="questionnaire-card app-card">
        <img src={imgSrc} alt="" />
        <h1>{title}</h1>
        <div className="questions flex column">

            {answers.map(answer => <label className="app-small-checkbox" > <input type="checkbox" /> {answer} </label>)}
        </div>
    </div>
}
