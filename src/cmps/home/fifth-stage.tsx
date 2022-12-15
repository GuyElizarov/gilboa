// import { fifthStageQuestionnaireData } from "../../data/conditionsData"
// import { ChangeEvent, useState } from 'react'

import { FifthStageQuestionnaire } from "../../interface/home/home-interface"

export const FifthStage = ({ QuestionnaireData, setQuestionnaireData }: { QuestionnaireData: FifthStageQuestionnaire[], setQuestionnaireData: Function }) => {

    // const [clr, setClr] = useState<string>("#D97325")

    // const onAnswerClick = () => {
    //     let clrToUse = clr === '#26C6DA' ? '#D97325' : '#26C6DA'
    //     setClr(clrToUse)
    // }

    // const setAnswer = (id: string, answer: 'כן'| 'לא'): void => {
    //     const questionToUpdate = QuestionnaireData.find(question => question.id === id)
    //     questionToUpdate.answer = answer
    // }

    return <div className="fifth-stage ">
        <div className="fifth-stage-list flex column">
            {QuestionnaireData.map(({ question, answer, id }) => <div className="fifth-stage-preview flex column" key={id}>
                <span>{question}</span>
                <div className="button-container flex">
                    {/* <button onClick={() => setAnswer(id, 'כן')}>כן</button>
                    <button onClick={() => setAnswer(id, 'לא')}>לא</button> */}
                </div>
            </div>)}
        </div>
        <span className="last-msg">I’ts a date!</span>
    </div>

}