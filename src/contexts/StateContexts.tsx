import { DocumentData } from 'firebase/firestore';
import {
  Dispatch, ReactNode, SetStateAction, createContext, useState,
} from 'react';
import { mockData } from '../components/diary-list/diaries';
import { TimeFilteredData } from '../components/my-statistics/GraphList';

export const StateContext = createContext<{
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  lightTheme: boolean;
  setLightTheme: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  selected: DocumentData;
  setSelected: Dispatch<SetStateAction<DocumentData>>;
  timeFilteredData: TimeFilteredData;
  setTimeFilteredData: Dispatch<SetStateAction<TimeFilteredData>>;
}>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  lightTheme: false,
  setLightTheme: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  selected: mockData,
  setSelected: () => {},
  timeFilteredData: {
    this: mockData,
  },
  setTimeFilteredData: () => {},
});

export function StateProvider({ children }: {children: ReactNode}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const [selected, setSelected] = useState<DocumentData>(mockData);

  const [timeFilteredData, setTimeFilteredData] = useState<TimeFilteredData>();

  return (
    <StateContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      lightTheme,
      setLightTheme,
      isModalOpen,
      setIsModalOpen,
      selected,
      setSelected,
      timeFilteredData,
      setTimeFilteredData,
    }}
    >
      {children}
    </StateContext.Provider>
  );
}
