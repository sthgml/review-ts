import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './header/Header';
import Footer from './footer/Footer';

const Container = styled.div`
  height: 100vh;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
