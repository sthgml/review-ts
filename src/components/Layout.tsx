import { Outlet } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import { useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import useStateContexts from '../hooks/useStateContexts';
import LightTheme from '../styles/lightTheme';
import DefaultTheme from '../styles/defaultTheme';
import Theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';

const Container = styled.div`
  max-height: 100vh;
  position: relative;

  main {
    margin-top: 60px;
  }
`;

export default function Layout() {
  const { lightTheme } = useStateContexts();
  const [theme, setTheme] = useState<Theme>(DefaultTheme);

  useEffect(() => {
    if (lightTheme) {
      setTheme(LightTheme);
    } else {
      setTheme(DefaultTheme);
    }
  }, [lightTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
