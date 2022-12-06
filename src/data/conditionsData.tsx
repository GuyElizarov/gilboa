import { Condition } from "../interface/home/conditions";
import HomeImg from '../assets/imgs/home.png'
import AgeImg from '../assets/imgs/age.png'
import LocationImg from '../assets/imgs/location.png'
import MaintenanceImg from '../assets/imgs/maintenance.png'
import CartImg from '../assets/imgs/cart.png'
const text = 'לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום לורם איפסום '

export const conditionsData: Condition[] = [
    {
        name: 'מיקום',
        text,
        imgSrc: LocationImg
    }
    , {
        name: 'גיל',
        text,
        imgSrc: AgeImg
    },
    {
        name: 'דירה',
        text,
        imgSrc: HomeImg
    }, {
        name: 'גיל',
        text,
        imgSrc: AgeImg
    }, {
        name: 'אחזקה',
        text,
        imgSrc: MaintenanceImg
    },
    {
        name: 'סל אימוץ',
        text,
        imgSrc: CartImg
    }
]