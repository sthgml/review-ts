import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { useMediaQuery } from 'react-responsive';

import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';

import logoSm from '../../../assets/logos/logo-sm.png';
import logoXs from '../../../assets/logos/logo-xs.png';
import logoSmLight from '../../../assets/icon/light/logo-sm-light.png';
import logoXsLight from '../../../assets/icon/light/logo-xs-light.png';

import useAuthContext from '../../../hooks/useAuthContext';
import useStateContexts from '../../../hooks/useStateContexts';

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
  const isMobile: boolean = useMediaQuery({
    query: '(max-width: 475px)',
  });

  const [logoSrc, setLogoSrc] = useState('');

  const { user } = useAuthContext();
  const { lightTheme } = useStateContexts();

  useEffect(() => {
    if (lightTheme) {
      setLogoSrc(isMobile ? logoXsLight : logoSmLight);
    } else {
      setLogoSrc(isMobile ? logoXs : logoSm);
    }
  }, [lightTheme, isMobile]);

  return (
    <Container className="left-header">
      {
        user
            && (
              <Hamburger />
            )
      }

      <Link to="./">
        <h1>
          <img src={logoSrc} alt="당장복습헤 로고" className="logo-sm" />
        </h1>
      </Link>
    </Container>
  );
}
