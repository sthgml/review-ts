import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';

import HomePage from './pages/HomePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
];

export default routes;
