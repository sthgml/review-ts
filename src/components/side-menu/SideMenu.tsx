import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useStateContexts from '../../hooks/useStateContexts';

export const Dim = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #00000055;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
`;

const Container = styled.ul`
  width: 240px;
  height: 100vh;
  
  position: fixed;
  z-index: 40;
  left: -240px;
  top: 0;
  
  background: ${({ theme }) => theme.colors.background4};
  transition: all 0.5s;

  &.opened {
    transform: translateX(240px);
    transition: all 0.5s;
  }
  
  li {
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export default function SideMenu() {
  const { isMenuOpen, setIsMenuOpen } = useStateContexts();
  const navigate = useNavigate();
  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && <Dim onClick={handleClose} />}
      <Container className={`paper-list ${isMenuOpen ? 'opened' : ''}`}>
        <li>
          <button
            className="btn-settings"
            type="button"
            onClick={() => {
              navigate('/mypage');
              handleClose();
            }}
          >
            마이페이지
          </button>
        </li>
      </Container>
    </>
  );
}
