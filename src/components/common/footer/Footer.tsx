import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  height: 88px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background4};

  display: flex;
  justify-content: center;
  align-items: center;

  p.info-text {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Footer() {
  return (
    <Container>
      <p className="info-text">
        copyright |
        당장복습헤 2023 |
        박소희 | sthgml@naver.com
      </p>
    </Container>
  );
}
