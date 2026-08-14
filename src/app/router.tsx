import { createBrowserRouter } from 'react-router';
import { GuestLayout } from '../shared/layouts/GuestLayout';
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
        element: <GuestLayout />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: '/devices', element: <ProtectedRoutes><DevicePage /></ProtectedRoutes>},
            { path: '/users', element: <ProtectedRoutes><UserPages /></ProtectedRoutes>},
            { path: '/logs', element: <ProtectedRoutes><RegisterPage /></ProtectedRoutes>},
            
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