import { ConditionList } from './conditions-list'


export const Introduction = () => {
    return <section className="introduction">
        <p>
            <span> תודה שבחרת לאמץ כלב אצלנו!</span>
            <span>
                כל כלב הוא עולם ומלואו, חשוב לנו ליצור התאמה מירבית בין העדפותיך לצרכי הכלב, ולכן חשוב לנו שהמענה לשאלות הבאות יהיה אמיתי וכנה. אנחנו עושים את מירב המאמצים לתת לך את הכלב שמתאים לך וכל כלב את המקום הראוי לו. תודה רבה!</span>
            <span>
                אז לפני שמתחילים, חשוב לנו לוודא איתכם כמה דברים :)
            </span>
        </p>
        <ConditionList />
    </section>
}