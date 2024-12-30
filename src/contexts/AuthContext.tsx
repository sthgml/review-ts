import {
  Dispatch,
  ReactNode, Reducer, createContext, useEffect, useReducer,
} from 'react';

import { Timestamp } from 'firebase/firestore';
import { UserInfo } from 'firebase/auth';
import { appAuth } from '../firebase/config';

const actionTypes = {
  login: 'login',
  logout: 'logout',
  authIsReady: 'authIsReady',
} as const;

type ActionType = typeof actionTypes;

type Action =
  {
      type: ActionType['login'],
      payload: UserInfo
    }
  | {
      type: ActionType['logout'],
    }
  | {
      type: ActionType['authIsReady'],
      payload: UserInfo
    };

type State = {
  user: UserInfo | null;
  isAuthReady: boolean;
}

export type AuthContextValue = {
  user: UserInfo | null;
  isAuthReady : boolean;
  dispatch?: Dispatch<Action>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthReady: false,
});

const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'login':
    return { ...state, user: action.payload, isAuthReady: true };
  case 'logout':
    return { ...state, user: null, isAuthReady: true };
  case 'authIsReady':
    return { ...state, user: action.payload, isAuthReady: true };
  default:
    return state;
  }
};

function AuthContextProvider({ children }: {children: ReactNode}) {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'authIsReady', payload: user });
      } else {
        dispatch({ type: 'logout' });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
