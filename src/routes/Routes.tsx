import { lazy } from 'react';
import { useRoutes } from 'react-router';

const Login = lazy(() => import('../pages/auth/Login'));
const Dashboard = lazy(() => import('../pages/app/dashboard'));

const AppRoutes = () => {
  const allRoutes = useRoutes([
    {
      path: '/',
      children: [
        { element: <Login />, index: true },
        { element: <Dashboard />, path: '/dashboard' },
      ],
    },
  ]);

  return allRoutes;
};

export default AppRoutes;
