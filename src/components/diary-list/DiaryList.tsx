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

export default function DiaryList({
  selected,
  diaryData,
} : DiaryListProps) {
  const { setIsModalOpen } = useStateContexts();

  return (
    <Container className="old">
      <div className="category-24hr">
        <CategoryTitle selected={selected} />
        <ul className="note-list">
          {diaryData.length
            ? diaryData.map((d) => (
              <li key={`${d.id}`} className="note-item">
                <DiaryItem data={d} />
              </li>
            ))
            : (
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
