import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';

const Container = styled.div`
  height: 100vh;
  position: relative;

  main {
    margin-top: 60px;
  }
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
