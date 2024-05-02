import {
  Dispatch, ReactNode, SetStateAction, createContext, useState,
} from 'react';

export const StateContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  lightTheme: boolean;
  setLightTheme: Dispatch<SetStateAction<boolean>>;
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  lightTheme: false,
  setLightTheme: () => {},
});

export function StateProvider({ children }: {children: ReactNode}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <StateContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      lightTheme,
      setLightTheme,
    }}
    >
      {children}
    </StateContext.Provider>
  );
}
