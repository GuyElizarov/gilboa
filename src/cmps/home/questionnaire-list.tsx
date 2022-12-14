
import { QuestionnaireCard } from '../../interface/home/home-interface'
import { QuestionnairePreview } from './questionnaire-preview'


export const QuestionnaireList = ({ questionnaireData }: { questionnaireData: QuestionnaireCard[] }) => {
    return <div className="questionnaire-list">
        {questionnaireData.map(cardInfo => <QuestionnairePreview cardInfo={cardInfo} />)}

    </div>
}
