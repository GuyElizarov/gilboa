import { QuestionnaireCard } from "../../interface/home/conditions"

export const QuestionnairePreview = ({cardInfo}:{cardInfo: QuestionnaireCard}) => {

    const { title, imgSrc, answers } = cardInfo 
    return <div className="questionnaire-card app-card">
        <img src={imgSrc} alt="" />
        <h1>{title}</h1>
        {answers.map(answer => <label > {answer} <input type="checkbox" /> </label>)}
    </div>
}
