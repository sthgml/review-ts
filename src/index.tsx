import ReactDOM from 'react-dom/client';
import { createElement, ReactNode } from 'react';
import App from './App';
import { StateProvider } from './contexts/StateContexts';

import { AuthContextProvider } from './contexts/AuthContext';

interface MultiContextProps {
  contexts: typeof StateProvider[];
  children: ReactNode;
}

function MultiContextProvider({
  contexts,
  children,
}: MultiContextProps) {
  return contexts.reduce(
    (
      prev,
      context,
      // eslint-disable-next-line
    ) => createElement(context, { children: prev })
    , children,
  );
}

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <MultiContextProvider contexts={[
      StateProvider,
      AuthContextProvider,
    ]}
    >
      <App />
    </MultiContextProvider>,
  );
}
