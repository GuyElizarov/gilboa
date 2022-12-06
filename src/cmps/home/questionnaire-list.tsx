
import {QuestionnairePreview} from './questionnaire-preview'
import { questionnaireData } from "../../data/conditionsData"


export const QuestionnaireList= ()=>{
    return  <div className="questionnaire-list">
        {questionnaireData.map(cardInfo =>  <QuestionnairePreview cardInfo={cardInfo} />)}
            
        </div>
}
