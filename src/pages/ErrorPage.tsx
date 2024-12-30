import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

import ErrorDiv from '../components/common/errorDiv/ErrorDiv';

const MainError = styled.main`
  margin: 120px auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  
  width: 574px;
  max-width: 100%;
  height: calc(100vh - 240px);
  padding: 40px 24px;

  background: ${({ theme }) => theme.colors.background2};
  border-radius: 16px;
  box-shadow: -23px -20px 120px ${({ theme }) => theme.colors.background1}
  , 32px 20px 180px ${({ theme }) => theme.colors.background4};
`;

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <MainError>
        <ErrorDiv text="존재하지 않는 페이지 입니다!" />
        <button
          type="button"
          className="btn-go-back"
          onClick={() => { navigate('/'); }}
        >
          홈페이지로 가기
        </button>
      </MainError>
    </Layout>
  );
}
