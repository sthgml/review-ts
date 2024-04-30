import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import React, { ReactNode } from 'react';
import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import DefaultTheme from './styles/defaultTheme';
import { StateProvider } from './contexts/StateContexts';
import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter(routes);

interface MultiContextProps {
  contexts: typeof StateProvider[];
  children: ReactNode;
}

export default function App() {
  const MultiContextProvider = ({
    contexts,
    children,
  }: MultiContextProps) => contexts.reduce((
    prev,
    context,
  ) => React.createElement(context, {
    children: prev,
  }), children);

  return (
    <MultiContextProvider contexts={[
      StateProvider,
      AuthContextProvider,
    ]}
    >
      <ThemeProvider theme={DefaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </MultiContextProvider>
  );
}
