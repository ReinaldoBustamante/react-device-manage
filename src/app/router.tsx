import { createBrowserRouter } from 'react-router';
import { GuessLayout } from '../shared/layouts/GuessLayout';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import { AuthPage } from '../features/auth/pages/AuthPage';
import { AuthLayout } from '../shared/layouts/AuthLayout';
import { DevicePage } from '../features/devices/pages/DevicePage';
import { ProtectedRoutes } from './ProtectedRoutes';
import { UserPages } from '../features/users/pages/UserPages';
import { RegisterPage } from '../features/registers/pages/RegisterPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <GuessLayout />,
        children: [
            { index: true, element: <DashboardPage /> }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { index: true, element: <AuthPage /> }
        ]
    },
    {
        path: '/devices',
        element: <ProtectedRoutes>
            <GuessLayout />
        </ProtectedRoutes>,
        children: [
            { index: true, element: <DevicePage /> }
        ]
    },
    {
        path: '/users',
        element: <ProtectedRoutes>
            <GuessLayout />
        </ProtectedRoutes>,
        children: [
            { index: true, element: <UserPages /> }
        ]
    },
    {
        path: '/logs',
        element: <ProtectedRoutes>
            <GuessLayout />
        </ProtectedRoutes>,
        children: [
            { index: true, element: <RegisterPage /> }
        ]
    }
])