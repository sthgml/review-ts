import { Outlet } from 'react-router-dom';

import styled, { ThemeProvider } from 'styled-components';

import { ReactNode, useEffect, useState } from 'react';
import { Reset } from 'styled-reset';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import useStateContexts from '../hooks/useStateContexts';
import LightTheme from '../styles/lightTheme';
import DefaultTheme from '../styles/defaultTheme';
import Theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';
import SideMenu from './side-menu/SideMenu';

const Container = styled.div`
  position: relative;

  main {
    min-height: calc(100vh - 128px);
    padding-top: 120px;
    padding-bottom: 80px;
    box-sizing: border-box; 

    @media (max-width: 478px) {
      padding-top: 66px;
      width: 100vw;
    }
  }
`;

type LayoutProps = {
  children?: ReactNode | null;
}

export default function Layout({ children = null }: LayoutProps) {
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
        <SideMenu />
        {children ?? <Outlet />}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
