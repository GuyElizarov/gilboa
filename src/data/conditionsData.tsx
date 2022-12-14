import { Condition, QuestionnaireCard , FifthStageQuestionnaire } from "../interface/home/home-interface";
import HomeImg from '../assets/imgs/stage1/home.png'
import AgeImg from '../assets/imgs/stage1/age.png'
import LocationImg from '../assets/imgs/stage1/location.png'
import MaintenanceImg from '../assets/imgs/stage1/maintenance.png'
import CartImg from '../assets/imgs/stage1/cart.png'
import DogImg from '../assets/imgs/dog.png'
import ClockImg from '../assets/imgs/clock.png'
import BabyImg from '../assets/imgs/baby.png'
import TreeImg from '../assets/imgs/tree.png'
import HartImg from '../assets/imgs/hart.png'
const text = 'לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום '

export const conditionsData: Condition[] = [
    {
        title: 'מיקום',
        text,
        imgSrc: LocationImg
    }
    , {
        title: 'גיל',
        text,
        imgSrc: AgeImg
    },
    {
        title: 'דירה',
        text,
        imgSrc: HomeImg
    }, {
        title: 'אחזקה',
        text,
        imgSrc: MaintenanceImg
    },
    {
        title: 'סל אימוץ',
        text,
        imgSrc: CartImg
    }
]
export const secondSageQuestionnaireData: QuestionnaireCard[] = [
    {
        title: 'האם היו לך כלבים בעבר?',
        imgSrc: DogImg,
        answers: ['לא, זה הכלב הראשון שלי', 'היה לי כלב בילדות בבית הורי', 'היה לי כבר כלב בעבר באחזקתי', '(היו לי ____ כלבים בעבר (צריך מספר']
    },
    {
        title: 'מס’ שעות פעילות בממוצע',
        imgSrc: ClockImg,
        answers: ['כ-שעה ביום', '1-2 שעות ביום', '2-3 שעות ביום', '3 ומעלה']
    },
    {
        title: 'מה הגיל הכי קטן בבית?',
        imgSrc: BabyImg,
        answers: ['מתחת לגיל 8', 'בין 8-16', 'מעל 16']
    },

]
export const forthStageQuestionnaireData: QuestionnaireCard[] = [
    {
        title: 'איפה הכלב יחיה?',
        imgSrc: HartImg,
        answers: ['הכלב יהיה איתנו בתוך הבית', 'יש לנו חצר/מרפסת מפנקת בשבילו', 'גם בבית וגם בחצר, אבל ישן רק בבית', '(היו לי ____ כלבים בעבר (צריך מספר']
    },
    {
        title: 'כמה שעות הכלב יהיה לבד?',
        imgSrc: ClockImg,
        answers: ['1-4 שעות ביום', '4-7 שעות ביום', '7-10 שעות ביום', '10 ומעלה']
    },
    {
        title: 'יש לך חצר?',
        imgSrc: TreeImg,
        answers: ['מגודרת', 'לא מגודרת', 'אין לי חצר']
    },

]

export const fifthStageQuestionnaireData: FifthStageQuestionnaire[] = [
    {
        id: '101',
        question: 'הכלב שבחרת צריך להיות מחוץ לבית X פעמים ביום. האם ברצונך להמשיך?',
        answer: null
    },
    {
        id: '102',
        question: 'האם אתם פתוחים לאפשרות לאמץ זוג כלבים שכבר מחוברים? ',
        answer: null
    },
    {
        id: '103',
        question: 'האם גידלת בעבר כלב מאחד הגזעים ה"מסוכנים" (*)? ',
        answer: null
    },
    {
        id: '104',
        question: 'האם אתה מכיר את חוק הגזעים ה"מסוכנים" (למי שבחר גזע מסוכן ) (*)?',
        answer: null
    }
]