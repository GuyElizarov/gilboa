
import {SecondStageQuestionnairePreview} from './second-stage-questionnaire-preview'
import { questionnaireData } from "../../data/conditionsData"


export const SecondStageQuestionnaireList= ()=>{
    return  <div className="second-stage-questionnaire-list">
        {questionnaireData.map(cardInfo =>  <SecondStageQuestionnairePreview cardInfo={cardInfo} />)}
            
        </div>
}
