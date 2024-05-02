import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import useLogout from '../../../hooks/useLogout';

import iconLogout from '../../../assets/icon/icon-logout.svg';
import iconLogin from '../../../assets/icon/icon-login.svg';
import iconJoin from '../../../assets/icon/icon-join.svg';
import iconLogoutLight from '../../../assets/icon/light/icon-logout-light.svg';
import iconLoginLight from '../../../assets/icon/light/icon-login-light.svg';
import iconJoinLight from '../../../assets/icon/light/icon-join-light.svg';

import useAuthContext from '../../../hooks/useAuthContext';
import Toggle from '../toggle/Toggle';
import useStateContexts from '../../../hooks/useStateContexts';

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

  .nickname {
    color: ${(props) => props.theme.colors.text};
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

  const { lightTheme, setLightTheme } = useStateContexts();

  const { pathname } = useLocation();

  return (
    <Container className="right-header">
      <Toggle
        onChange={() => { setLightTheme(!lightTheme); }}
        labelText={lightTheme ? 'light' : 'dark'}
        id="light-theme"
      />
      {user
        ? (
          <>
            <p className="welcome-text">
              <span className="welcome">환영합니다.&nbsp;</span>
              <Link to="/mypage" className="nickname mark">{user.displayName}</Link>
              <span>님!</span>
            </p>

            <span>|</span>

            <Link to="/login" className="link-logout" onClick={logout}>
              <img src={lightTheme ? iconLogoutLight : iconLogout} alt="icon-logout" className="icon-logout" />
              <p className="text-logout">로그아웃</p>
            </Link>
          </>
        )
        : (
          <>
            {
              !pathname.includes('login')
              && (
                <Link to="/login" className="link-login">
                  <img src={lightTheme ? iconLoginLight : iconLogin} alt="icon-login" className="icon-login" />
                  <p className="text-login">로그인</p>
                </Link>
              )
            }
            {!pathname.includes('join')
              && (
                <Link to="/join" className="link-join">
                  <img src={lightTheme ? iconJoinLight : iconJoin} alt="icon-join" className="icon-join" />
                  <p className="text-join">회원가입</p>
                </Link>
              )}
          </>
        )}
    </Container>
  );
}
