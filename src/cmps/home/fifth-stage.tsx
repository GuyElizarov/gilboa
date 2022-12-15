import { fifthStageQuestionnaireData } from "../../data/conditionsData"
import { ChangeEvent, useState } from 'react'

export const FifthStage = () => {

    const [clr, setClr] = useState<string>("#D97325")

    const onAnswerClick = () => {
        let clrToUse = clr === '#26C6DA' ? '#D97325' : '#26C6DA'
        setClr(clrToUse)
    }
    return <div className="fifth-stage ">
        <div className="fifth-stage-list flex column">
            {fifthStageQuestionnaireData.map(({ question, answer, id }) => <div className="fifth-stage-preview flex column" key={id}>
                <span>{question}</span>
                <div className="button-container flex">
                    <button onClick={onAnswerClick} style={{ backgroundColor: clr }}>כן</button>
                    <button onClick={onAnswerClick} style={{ backgroundColor: clr }}>לא</button>
                </div>
            </div>)}
        </div>
        <span className="last-msg">I’ts a date!</span>
    </div>

}