import { Condition } from "../../interface/home/home-interface"

export const FirstStageConditionPreview = ({ condition }: { condition: Condition }) => {
    return <article className="first-stage-condition-preview app-card">
        <div className="img-wrapper">
            <img src={condition.imgSrc} alt="" />
        </div>
        <h3>{condition.title}</h3>
        <p>{condition.text}</p>

    </article>
}