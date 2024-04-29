import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { Dim } from '../side-menu/SideMenu';

import quoteStart from '../../assets/icon/quote-start.png';
import quoteEnd from '../../assets/icon/quote-end.png';
import iconHeart from '../../assets/icon/heart.svg';
import DiaryForm from './DiaryForm';

const Container = styled.div`
  &.today { 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;

    padding: 32px 24px;
    width: 464px;
    flex-direction: column;

    min-width: 464px;
    max-width: 100%;
    background: ${({ theme }) => theme.colors.background1};
    border-radius: 16px;  
  }

  .form {
    background: ${({ theme }) => theme.colors.background2};
    padding: 16px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 100%;
    min-width: 368px;
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
  // const { user } = useAuthContext();
  const handleClose = () => {
    setIsModalOpen(false);
    // console.log('modal close');
  };

  return (
    <>
      <Container className="today">

        <h2 className="title typing">
          <span className="mark">당장</span>
          &nbsp;기록해서 복습하기
        </h2>

        <h3 className="title">
          <img src={iconHeart} alt="icon-heart" className="icon-heart" />
          <strong>당장</strong>
          {' '}
            &nbsp;기록해서 복습하면&nbsp;
          <strong>42%</strong>
            &nbsp;를 더 기억할 수 있어요!
        </h3>

        {/* <DiaryForm uid={user.uid} handleClose={handleClose} /> */}
        <DiaryForm />
      </Container>
      <Dim className="dim" onClick={handleClose} />
    </>
  );
}
