import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { logout } from "../../store/user/user.actions"
import { selectUser } from "../../store/user/user.slice"

import logo from "../../assets/imgs/logo.png"

export const AppHeader = () => {

    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const onLogout = () => {

        dispatch(logout())
    }
    return <header className='main-layout '>
        <div className="header-container flex space-between">

            <div className="header-right-container flex center">
                <div className="header-right-container-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-right-container-txt flex column space-between">
                    <h1>גלבוע אוהבת חיות</h1>
                    <div>
                        <span>היי אורח! </span>
                        <NavLink to={'/login'}>התחבר</NavLink>
                    </div>
                </div>
            </div>
            <nav className="header-left-container flex">
                <NavLink to={'/'}>אודות</NavLink>
                <NavLink to={'/about'}>תהליך אימוץ</NavLink>

                <NavLink to={'/vote'}>אני רוצה לאמץ</NavLink>

            </nav>
        </div>
    </header>
}