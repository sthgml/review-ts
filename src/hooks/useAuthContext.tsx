import { useContext } from 'react';
import { AuthContext, AuthContextValue } from '../contexts/AuthContext';

const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context as AuthContextValue;
};

export default useAuthContext;
