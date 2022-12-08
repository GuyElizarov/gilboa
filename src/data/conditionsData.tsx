import { Condition, QuestionnaireCard } from "../interface/home/conditions";
import HomeImg from '../assets/imgs/home.png'
import AgeImg from '../assets/imgs/age.png'
import LocationImg from '../assets/imgs/location.png'
import MaintenanceImg from '../assets/imgs/maintenance.png'
import CartImg from '../assets/imgs/cart.png'
import DogImg from '../assets/imgs/dog.png'
import ClockImg from '../assets/imgs/clock.png'
import BabyImg from '../assets/imgs/baby.png'
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
        title: 'גיל',
        text,
        imgSrc: AgeImg
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
export const questionnaireData: QuestionnaireCard[] = [
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