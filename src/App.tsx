import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import useProtectedRoute from './routes';
import useAuthContext from './hooks/useAuthContext';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  const { isAuthReady, user } = useAuthContext();
  const { routes } = useProtectedRoute(user);
  const router = createBrowserRouter(routes);

  if (!isAuthReady) {
    return null;
  }

  return (
    <RouterProvider fallbackElement={<ErrorPage />} router={router} />
  );
}
