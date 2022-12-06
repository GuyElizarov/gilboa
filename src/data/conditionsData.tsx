import { Condition } from "../interface/home/conditions";
import HomeImg from '../assets/imgs/home.png'
import AgeImg from '../assets/imgs/age.png'
import LocationImg from '../assets/imgs/location.png'
import MaintenanceImg from '../assets/imgs/maintenance.png'
import CartImg from '../assets/imgs/cart.png'
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