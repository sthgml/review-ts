import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { appAuth } from '../firebase/config';

import useAuthContext from './useAuthContext';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const logout = () => {
    setIsPending(true);

    signOut(appAuth).then(() => {
      dispatch({ type: 'logout' });
      setIsPending(false);
    }).catch((errormsg) => {
      setError(errormsg);
      setIsPending(false);
    });
  };
  return { error, isPending, logout };
};

export default useLogout;
