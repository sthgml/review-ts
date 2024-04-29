import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import DefaultTheme from './styles/defaultTheme';
import { StateProvider } from './contexts/StateContexts';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={DefaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StateProvider>
  );
}
