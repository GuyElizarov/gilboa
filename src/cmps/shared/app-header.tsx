import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { logout } from "../../store/user/user.actions"
import { selectUser } from "../../store/user/user.slice"



export const AppHeader = () => {

    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const onLogout = () => {

        dispatch(logout())
    }
    return <header className='main-layout '>
        <div className="header-container flex space-between">

            <div className="header-right-container">

            </div>
            <nav className="header-left-container flex">
                <NavLink to={'/'}>אודות</NavLink>
                <NavLink to={'/about'}>תהליך אימוץ</NavLink>

                <NavLink to={'/vote'}>אני רוצה לאמץ</NavLink>

            </nav>
        </div>
    </header>
}