import { createBrowserRouter } from 'react-router';
import { GuessLayout } from '../shared/layouts/GuessLayout';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import { AuthPage } from '../features/auth/pages/AuthPage';
import { AuthLayout } from '../shared/layouts/AuthLayout';


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
    }
])