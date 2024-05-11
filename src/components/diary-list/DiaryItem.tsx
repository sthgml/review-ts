import { useEffect, useState } from 'react';

import { type DocumentData } from 'firebase/firestore';
import styled from 'styled-components';
import useFirestore from '../../hooks/useFireStore';

import DiaryBtns from './DiaryBtns';
import TextArea from '../common/TextArea';

import useStateContexts from '../../hooks/useStateContexts';
import getTimeString from '../../utils/getTimeString';
import ProgressBar from './ProgressBar';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  * {
    /* box-shadow: inset 0 0 32px blue; */
  }

  max-width: 100%;
  width: 478px;
  padding: 30px 28px 35px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background1};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.background1};
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.background1};
    transform: scale(1.02);
  }

  .note-title {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.icon};
    width: 100%;
    text-align: center;
    white-space: pre-wrap;
    line-height: 20px;
  }

  .note-dates {
    width: 100%;
  }

  .note-content {
    background: none;
    width: 100%;
    min-height: 10px;
    max-height: 400px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 20px;
    resize: none;
    border-radius: 8px;
    padding: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background3};
    }
  }
`;

type DiaryItemProps = {
  data: DocumentData
}

export default function DiaryItem({ data }: DiaryItemProps) {
  const { setIsModalOpen, setSelected } = useStateContexts();
  const createdTimeString = getTimeString(data.createdTime);
  const [temp, setTemp] = useState('');

  useEffect(() => {
    if (data.lastUpdatedTime) {
      const lastUpdatedTimeString = getTimeString(data.lastUpdatedTime);
      setTemp(lastUpdatedTimeString);
    }
  }, [data.lastUpdatedTime]);

  const { deleteDocument } = useFirestore('diary');
  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) deleteDocument(data.id);
  };
  const handleUpdate = () => {
    setIsModalOpen(true);
    setSelected(data);
  };

  return (
    <Container className="note-article">
      <h4 className="note-title ell-1">
        {data.doc.title}
      </h4>
      <div className="note-dates">
        <p className="note-date assistive-text">
          첫 복습 시각 :
          {' '}
          {createdTimeString}
        </p>
        {temp !== '' && (
          <p className="note-date assistive-text">
            마지막 복습 시각 :
            {temp}
          </p>
        )}
      </div>
      <ProgressBar reviewCnt={data.reviewCnt} />
      <TextArea placeholder={data.doc.text} value={data.doc.text} />
      <DiaryBtns fns={{ handleDelete, handleUpdate }} />
    </Container>
  );
}
