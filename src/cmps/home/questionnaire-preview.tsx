import { QuestionnaireCard } from "../../interface/home/home-interface"

export const QuestionnairePreview = ({ cardInfo }: { cardInfo: QuestionnaireCard }) => {

    const { title, imgSrc, answers } = cardInfo
    return <div className="questionnaire-card app-card">
        <img src={imgSrc} alt="" />
        <h1>{title}</h1>
        <div className="questions flex column">

            {answers.map(answer => <label className="app-small-checkbox" >
                <input type="checkbox" /><span> {answer} </span>
            </label>)}
        </div>
    </div>
}
