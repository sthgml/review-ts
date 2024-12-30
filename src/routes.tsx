import { Navigate } from 'react-router-dom';
import { UserInfo } from 'firebase/auth';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

const useProtectedRoute = (user: UserInfo | null) => {
  const routes = [
    {
      element: <Layout />,
      children: [
        { path: '/', element: user ? <HomePage /> : <Navigate to="/login" /> },
        { path: '/join', element: user ? <Navigate to="/" replace /> : <JoinPage /> },
        { path: '/login', element: user ? <Navigate to="/" replace /> : <LoginPage /> },
        { path: '/mypage', element: user ? <MyPage /> : <Navigate to="/login" replace /> },
      ],
    },
    {
      path: '',
      element: <Navigate to="/" />,
    },
  ];

  return { routes };
};

export default useProtectedRoute;
