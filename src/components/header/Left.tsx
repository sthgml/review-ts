import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { useMediaQuery } from 'react-responsive';

import Hamburger from './Hamburger';

import logoSm from '../../assets/logos/logo-sm.png';
import logoXs from '../../assets/logos/logo-xs.png';

const Container = styled.div`
  &.left-header {
    display: flex;
    align-items: center;
  }

  .logo-sm {
    height: 32px;
    aspect-ratio: 277/112;
    margin: 8px;
    object-fit: contain;
  }

  @media (max-width: 475px) {
    .logo-sm {
      width: 32px;
      padding: 4px;
      box-sizing: border-box;
      background-size: contain;
    }
  }
`;

export default function Left() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile: boolean = useMediaQuery({
    query: '(max-width: 475px)',
  });

  const user = {
    name: 'sohee',
    email: 'sthgml@naver.com',
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container className="left-header">
      {
        user
            && (
              <Hamburger
                isMenuOpen={isMenuOpen}
                handleMenu={handleMenu}
              />
            )
      }

      <Link to="./">
        <h1>
          <img src={isMobile ? logoXs : logoSm} alt="당장복습헤 로고" className="logo-sm" />
        </h1>
      </Link>
    </Container>
  );
}
