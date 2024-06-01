import styled from 'styled-components';

import { useEffect, useRef, useState } from 'react';
import Left from './Left';
import Right from './Right';
import throttle from '../../../utils/throttle';

const Container = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 30;

  height: 60px;
  padding: 16px;

  border-bottom: 2px solid ${(props) => props.theme.colors.background2};;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.background3};
  box-shadow: 0 0 24px ${(props) => props.theme.colors.background4};;

  &::before {
    content: '';
    position: fixed;
    width: 100vw;
    height: 60px;

    position: absolute;
    top: 60px;
    left: 0;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s;

  &.hide {
    transform: translateY(-60px);
  }

  [class^=icon] {
    width: 32px;
    aspect-ratio: 1/1;
  }
`;

function Header() {
  const [hide, setHide] = useState<boolean>(false);
  const pageY = useRef(0);

  const handleScrollOnTop = (e: Event) => {
    const deltaY = scrollY - pageY.current;
    const willhide = scrollY !== 0 && deltaY >= 0 && innerHeight < scrollY;
    setHide(willhide);
    pageY.current = scrollY;
  };

  const throttleScroll = throttle(handleScrollOnTop, 50);

  useEffect(() => {
    document.addEventListener('scroll', throttleScroll);
    return () => {
      document.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  return (
    <Container
      onMouseEnter={() => {
        setHide(false);
      }}
      onMouseLeave={(e) => {
        setHide(true);
        throttleScroll(e);
      }}
      className={
        hide ? 'hide' : ''
      }
    >
      <Left />
      <Right />
    </Container>
  );
}

export default Header;
