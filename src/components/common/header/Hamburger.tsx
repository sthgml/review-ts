import styled from 'styled-components';
import useStateContexts from '../../../hooks/useStateContexts';

const DivHamburger = styled.div`
  #hamburger {
    width: 40px;
    height: 40px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #hamburger div {
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.icon};
    transition: all 0.3s;
  }
  /* hover */
  #hamburger:hover div:first-child{
    transform: rotate(40deg) translate(0.5em) scaleX(0.5);
  }

  #hamburger:hover div:nth-child(2){
    transform: translate(-0.2em);
  }

  #hamburger:hover div:nth-child(3){
    transform: rotate(-40deg) translate(0.5em) scaleX(0.5);
  }
  
  /* active */
  #hamburger:active div:first-child{
    transform: translate(0.5em) rotate(40deg) translate(0.5em) scaleX(0.5);
  }

  #hamburger:active div:nth-child(2){
    transform: translate(0.2em) ;
  }

  #hamburger:active div:nth-child(3){
    transform: translate(0.5em) rotate(-40deg) translate(0.5em) scaleX(0.5); ;
  }

  /* opened */
  /* opened:hover */
  #hamburger.opened:hover div:first-child{
    transform: rotate(-40deg) translate(-0.5em) scaleX(0.5);
  }

  #hamburger.opened:hover div:nth-child(2){
    transform: translate(0.2em) ;
  }

  #hamburger.opened:hover div:nth-child(3){
    transform: rotate(40deg) translate(-0.5em) scaleX(0.5);
  }
  
  /* opened:active */
  #hamburger.opened:active div:first-child{
    transform: translate(-0.5em) rotate(-40deg) translate(-0.5em) scaleX(0.5);
  }

  #hamburger.opened:active div:nth-child(2){
    transform: translate(-0.5em) translate(0.2em);
  }

  #hamburger.opened:active div:nth-child(3){
    transform: translate(-0.5em) rotate(40deg) translate(-0.5em) scaleX(0.5); ;
  }
`;

export default function Hamburger() {
  const state = useStateContexts();
  const { isMenuOpen, setIsMenuOpen } = state;

  return (
    <DivHamburger>
      <button
        type="button"
        id="hamburger"
        className={`menu-btn ${isMenuOpen ? 'opened' : ''}`}
        onClick={() => { setIsMenuOpen(!isMenuOpen); }}
      >
        <div className="menu-stroke 1" />
        <div className="menu-stroke 2" />
        <div className="menu-stroke 3" />
        <span className="a11y-hidden">
          메뉴버튼
        </span>
      </button>
    </DivHamburger>
  );
}
