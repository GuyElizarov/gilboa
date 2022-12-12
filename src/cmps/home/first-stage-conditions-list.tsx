import { FirstStageConditionPreview } from './first-stage-condition-preview'
import { conditionsData } from "../../data/conditionsData"

export const FirstStageConditionList = () => {
    return <div className="first-stage-conditions-list">
        {conditionsData.map(condition => {
            return <FirstStageConditionPreview key={condition.title} condition={condition} />
        })}
    </div>
}