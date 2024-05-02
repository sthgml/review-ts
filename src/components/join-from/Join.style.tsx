import styled from 'styled-components';

const MainJoin = styled.main`
  &.main {
    margin-top: 120px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  
  max-width: 100%;
  width: 400px;

  margin: 32px auto;
  
  padding: 40px 24px;

  background: ${({ theme }) => theme.colors.background2};
  border-radius: 16px;
  box-shadow: -23px -20px 120px 0px ${({ theme }) => theme.colors.background1}
  , 32px 20px 180px 0px ${({ theme }) => theme.colors.background4};

  .logo-big {
    width: 166px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .btn-join {
    margin-top: 24px;
  }
`;

export default MainJoin;
