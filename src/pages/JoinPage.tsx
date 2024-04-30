import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import JoinForm from '../components/join-from/JoinForm';

import useAuthContext from '../hooks/useAuthContext';

export default function JoinPage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate('/');
    }
  }, [user?.email]);

  return (
    <JoinForm />
  );
}
