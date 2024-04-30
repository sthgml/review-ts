import styled from 'styled-components';

const Container = styled.footer`
  position: relative;
  bottom: -40px;
  height: 128px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background4};

  p.info-text {
    margin: 0 auto;
    padding-top: 52px;
    padding-bottom: 52px;
    width: fit-content;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Footer() {
  return (
    <Container>
      <p className="info-text assistive-text">Copyright 2023. Sohee Park All rights reserved.</p>
    </Container>
  );
}
