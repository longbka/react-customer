import { Navigate } from 'react-router-dom';
import MainLayout from '../layouts/Main/MainLayout';
import NotFoundPage from '../pages/Error/NotFound';
import LoginPage from '../components/LoginPage/login'
import Dashboard from '../pages/Dashboard';
import Account from '../pages/Account';

const routes = [
  {
    path: '/customer',
    element:<MainLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '404', element: <NotFoundPage /> },
      {path:"account",element:<Account/>},
      { path: '*', element: <Navigate to="/customer/404" /> }
    ]
  },
  {
    path: '/customer/login',
    element: <LoginPage />
  }
];

export default routes;
