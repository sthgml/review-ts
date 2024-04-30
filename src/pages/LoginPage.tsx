import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/login-form/LoginForm';

import useAuthContext from '../hooks/useAuthContext';

export default function LoginPage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate('/');
    }
  }, [user?.email]);

  return (
    <LoginForm />
  );
}
