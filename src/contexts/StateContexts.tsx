import {
  Dispatch, ReactNode, SetStateAction, createContext, useState,
} from 'react';

export const StateContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export function StateProvider({ children }: {children: ReactNode}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StateContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </StateContext.Provider>
  );
}
