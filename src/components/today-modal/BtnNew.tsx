import styled from 'styled-components';
import useStateContexts from '../../hooks/useStateContexts';

const Container = styled.button`
  position: fixed;
  margin-left: 16px;
  bottom: 40px;
  right: 32px;

  width: 65px;
  height: 65px;
  border-radius: 50%;

  box-shadow: 0 0 16px ${({ theme }) => theme.colors.background3};
  z-index: 10;
  order: 10;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 748px) {
    transform: translateY(-72px);
  }
  
  .x-1,
  .x-2 {
    width: 32px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.background2};
    position: absolute;
    top: 31px;
    left: 16px;
    transition: all 0.4s;
  }

  .x-1 {
    transform: rotate(90deg);
  }

  .x-2 {
    transform: rotate(0deg);
  }

  .guide {
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    width: 120px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background1};
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.background3};
    opacity: 0;

    top: -2em;
    left: calc(0px - 10px - 1em);

    border-radius: 8px;
    padding: 8px;
    transition: all 0.3s;
  }

  &:hover .guide{
    opacity: 1;
    transform: translateY(-1em);
  }

  &:hover .x-1 {
    transform: rotate(180deg);
  }

  &:hover .x-2 {
    transform: rotate(90deg);
  }
`;

export default function BtnNew() {
  const { setIsModalOpen, setSelected } = useStateContexts();
  const handleCreate = () => {
    setIsModalOpen((prev) => !prev);
    setSelected({});
  };

  return (
    <Container type="button" className="btn-new" onClick={handleCreate}>
      <div className="x-1" />
      <div className="x-2" />
      <p className="guide">당장 복습하기!</p>
    </Container>
  );
}
