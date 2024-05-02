import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import useLogout from '../../../hooks/useLogout';

import iconLogout from '../../../assets/icon/icon-logout.svg';
import iconLogin from '../../../assets/icon/icon-login.svg';
import iconJoin from '../../../assets/icon/icon-join.svg';
import useAuthContext from '../../../hooks/useAuthContext';
import Toggle from '../toggle/Toggle';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  [class^="link"] {
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @media (max-width: 475px) {
    .text-logout, p.welcome-text {
      display: none;
    }

    &.right-header {
      gap: 4px;
    }
  }
`;

export default function Right() {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  const [lightTheme, setLightTheme] = useState(false);

  return (
    <Container className="right-header">
      <Toggle
        onChange={() => { setLightTheme(!lightTheme); }}
        labelText="theme"
      />
      {user
        ? (
          <>
            <p className="welcome-text">
              <span className="welcome">환영합니다.&nbsp;</span>
              <span className="mark">{user.displayName}</span>
              <span>님!</span>
            </p>

            <span>|</span>

            <Link to="/login" className="link-logout" onClick={logout}>
              <img src={iconLogout} alt="icon-logout" className="icon-logout" />
              <p className="text-logout">로그아웃</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="link-login">
              <img src={iconLogin} alt="icon-login" className="icon-login" />
              <p className="text-login">로그인</p>
            </Link>
            <Link to="/join" className="link-join">
              <img src={iconJoin} alt="icon-join" className="icon-join" />
              <p className="text-join">회원가입</p>
            </Link>
          </>
        )}
    </Container>
  );
}
