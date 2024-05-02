import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/join', element: <JoinPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/mypage', element: <MyPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
