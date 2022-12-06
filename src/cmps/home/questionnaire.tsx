export const Questionnaire = () => {


    return <div className="questionnaire">
        <div className="questionnaire-top-container flex column">
            <span>אז אחרי שהבנתם מה נדרש ממכם כדי לאמץ כלב, </span>
            <span>נשארו לנו עוד כמה שאלות קטנות לפני שתוכלו לפגוש את החבר הכי טוב החדש שלכם 🐶.</span>
            <span>אל תדאגו - תמיד אפשר לשנות את התשובות שלכם בדף X (או לחזור אחורה).</span>
        </div>
        <div className="questionnaire-bottom-container flex">
            <div className="questionnaire-card app-card"></div>
            <div className="questionnaire-card app-card"></div>
            <div className="questionnaire-card app-card"></div>
        </div>

    </div>
}