import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { Dim } from '../side-menu/SideMenu';

import quoteStart from '../../assets/icon/quote-start.png';
import quoteEnd from '../../assets/icon/quote-end.png';
import DiaryForm from './DiaryForm';
import useAuthContext from '../../hooks/useAuthContext';

const Container = styled.div`
  &.today { 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;

    padding: 32px 24px;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.background2};
    border-radius: 16px;  

    width: 50%;
    height: 50%;

    max-width: 100vw;
    max-height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 748px) {
      padding: 24px 16px;
      width: 95%;
      height:70%;

      .form {
        padding: 0px;
        gap: 16px;
        
        textarea {
          height: 200px;
        }
      }
    }
  }

  .form {
    background: ${({ theme }) => theme.colors.background2};
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    height: calc(100% - 100px);
  }

  h2 {
    width: max-content;
    margin: 0 auto;
    margin-bottom: 32px;
  }

  h2.title::before {
    content: '';
    background: url(${quoteStart}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }

  h2.title::after {
    content: '';
    background: url(${quoteEnd}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }
`;

export default function TodayModal({ setIsModalOpen }: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { user } = useAuthContext();
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container className="today">

        <h2 className="title typing">
          <span className="mark">당장</span>
          &nbsp;기록해서 복습하기
        </h2>

        <DiaryForm uid={user?.uid} handleClose={handleClose} />
      </Container>
      <Dim className="dim" onClick={handleClose} />
    </>
  );
}
