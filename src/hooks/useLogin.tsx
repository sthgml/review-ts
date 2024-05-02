// eslint-disable-next-line
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { appAuth } from '../firebase/config';

import useAuthContext from './useAuthContext';

const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = (
    email: string,
    password: string,
  ) => {
    setIsPending(true);
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch({ type: 'login', payload: user });
        setIsPending(false);
        if (!user) {
          throw new Error('회원정보를 받아올 수 없습니다.');
        }
      }).catch((errormsg) => {
        setError(errormsg.toString());
        setIsPending(false);
      });
  };
  return { error, isPending, login };
};

export default useLogin;
