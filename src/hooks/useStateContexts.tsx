import { useContext } from 'react';
import { StateContext } from '../contexts/StateContexts';

export default function useStateContexts() {
  const context = useContext(StateContext);

  return context;
}
