import styled from 'styled-components';

import { type DocumentData } from 'firebase/firestore';
import { type FilterData } from '../filter-list/filterData';

import DiaryItem from './DiaryItem';
import CategoryTitle from './CategoryTitle';
import ErrorDiv from '../common/errorDiv/ErrorDiv';
import useStateContexts from '../../hooks/useStateContexts';

const Container = styled.section`
  max-width: 100%;
  padding: 32px 48px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 16px;

  .note-list {
    display: flex;
    flex-direction: column;
    gap: 32px;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

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
    }
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

  @media (max-width:500px) {
    & {
      padding: 24px;
    }

    h2 {
      margin-bottom: 16px;
    }
  }
`;

type DiaryListProps = {
  selected: FilterData;
  diaryData: DocumentData[]
}

export default function DiaryList({ selected, diaryData } : DiaryListProps) {
  const { setIsModalOpen } = useStateContexts();

  return (
    <Container className="old">
      <div className="category-24hr">
        <CategoryTitle selected={selected} />
        <ul className="note-list">
          {diaryData.length ? diaryData.map((d) => (
            <li key={`${d.id}`} className="note-item">
              <DiaryItem data={d} />
            </li>
          )) : (
            <>
              <ErrorDiv text="아직 작성된 내용이 없어요" />
              <button
                type="button"
                className="btn-go-back"
                onClick={() => { setIsModalOpen(true); }}
              >
                당장 복습하기
              </button>
            </>
          )}
        </ul>
      </div>
    </Container>
  );
}
