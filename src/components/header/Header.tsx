import styled from 'styled-components';

import Left from './Left';
import Right from './Right';

const Container = styled.header`
  position: sticky;
  top: 0px;
  z-index: 30;

  height: 60px;
  padding: 16px;

  border-bottom: 2px solid ${(props) => props.theme.colors.background2};;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background3};

  &:hover {
    box-shadow: 0 0 24px ${(props) => props.theme.colors.background4};;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s;

  [class^=icon] {
    width: 32px;
    aspect-ratio: 1/1;
  }
`;

function Header() {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
}

export default Header;
