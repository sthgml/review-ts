import {
  Dispatch, ReactNode, SetStateAction, createContext, useState,
} from 'react';

export const StateContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  lightTheme: boolean;
  setLightTheme: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  lightTheme: false,
  setLightTheme: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export function StateProvider({ children }: {children: ReactNode}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <StateContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      lightTheme,
      setLightTheme,
      isModalOpen,
      setIsModalOpen,
    }}
    >
      {children}
    </StateContext.Provider>
  );
}
