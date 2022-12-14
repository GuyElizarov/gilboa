import { ChangeEvent, useState } from 'react'
import { FirstStageConditionList } from './first-stage-conditions-list'


export const FirstStage = ({ setAdoptionProcessStage }: { setAdoptionProcessStage: Function }) => {
    const [isAccept, setIsAccept] = useState<boolean>(false)


    const setAnswer = (ev: ChangeEvent<HTMLInputElement>) => {
        setIsAccept(ev.target.checked)
    }

    const onchangeAdoptionProcess = () => {
        if (!isAccept) return
        setAdoptionProcessStage('second')
    }

    return <section className="first-stage-introduction">
        <p className='intro-txt'>
            <span> תודה שבחרת לאמץ כלב אצלנו!</span>
            <span>
                כל כלב הוא עולם ומלואו, חשוב לנו ליצור התאמה מירבית בין העדפותיך לצרכי הכלב, ולכן חשוב לנו שהמענה לשאלות הבאות יהיה אמיתי וכנה. אנחנו עושים את מירב המאמצים לתת לך את הכלב שמתאים לך וכל כלב את המקום הראוי לו. תודה רבה!</span>
            <span>
                אז לפני שמתחילים, חשוב לנו לוודא איתכם כמה דברים :)
            </span>
        </p>
        <FirstStageConditionList />
        <div className='actions'>
            <label htmlFor="accept">
                <input className='app-big-checkbox' type="checkbox" name="" id="accept" onChange={setAnswer} /><span>אני מאשר</span>
            </label>
            <button onClick={onchangeAdoptionProcess}>להיכרות אישית&#62;&#62;</button>
        </div>
    </section>
}