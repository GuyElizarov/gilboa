import { Condition, PreviewTypes, QuestionnaireCard } from "../../interface/home/home-interface";
import { Dog } from "../../interface/shared/dogs-interface";
import { ConditionPreview } from "./condition-preview";

export const DynamicList = ({ type, content }: { type: PreviewTypes, content: Condition[] | QuestionnaireCard[] | Dog[] }) => {
    // switch (type){
    //     case 'condition':
    //         typeof content=== 
    //         return <div >{content.map(condition=>{
    //             return <ConditionPreview condition={condition}/>
    //         })}</div>
    //     case 'questionnaire':
    //         return <div className=""></div>
    // }
    return <div></div>



}