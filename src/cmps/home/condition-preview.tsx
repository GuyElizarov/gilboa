import { Condition } from "../../interface/home/conditions"

export const ConditionPreview = ({ condition }: { condition: Condition }) => {
    return <article className="condition-preview">
        <div className="img-wrapper">
            <img src={condition.imgSrc} alt="" />
        </div>
        <h3>{condition.name}</h3>
        <p>{condition.text}</p>

    </article>
}