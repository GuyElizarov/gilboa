import { ConditionPreview } from './condition-preview'
import { conditionsData } from "../../data/conditionsData"

export const ConditionList = () => {
    return <div className="conditions-list">
        {conditionsData.map(condition => {
            return <ConditionPreview condition={condition} />
        })}
    </div>
}