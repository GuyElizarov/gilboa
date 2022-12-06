import { Home } from './pages/home'
import { About } from './pages/about'
import { FunctionComponent } from 'react';
import { LoginSignup } from './pages/login-signup'


interface RouteStructure {
    path: string
    element: FunctionComponent
}

export const routes: RouteStructure[] = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/about',
        element: About
    },
    {

        path: '/singup',
        element: LoginSignup
    },
    {

        path: '/login',
        element: LoginSignup
    },
]