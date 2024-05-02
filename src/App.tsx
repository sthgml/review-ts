import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React, { ReactNode } from 'react';
import routes from './routes';

import { StateProvider } from './contexts/StateContexts';
import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter(routes);

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
    ) => React.createElement(context, { children: prev })
    , children,
  );
}

export default function App() {
  return (
    <MultiContextProvider contexts={[
      StateProvider,
      AuthContextProvider,
    ]}
    >
      <RouterProvider router={router} />
    </MultiContextProvider>
  );
}
