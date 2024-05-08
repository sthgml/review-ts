import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { type DocumentData } from 'firebase/firestore';
import DiaryList from '../components/diary-list/DiaryList';
import BtnNew from '../components/today-modal/BtnNew';
import TodayModal from '../components/today-modal/TodayModal';
import FilterList from '../components/filter-list/FilterList';
import { FilterData, filterData } from '../components/filter-list/filterData';
import useAuthContext from '../hooks/useAuthContext';
import useCollection from '../hooks/useCollection';
import useStateContexts from '../hooks/useStateContexts';

const Container = styled.main`
  div.diary-panel {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;

    margin: 0 auto;
  }

  @media (max-width:748px) {
    & div.diary-panel {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
      padding: 0px;
    }
  } 

  button#testtest {
    position: fixed;
    top: 120px;
    left: 0;

    width: 100px;
    height: 100px;
    background-color: red;
  }
`;

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { documents } = useCollection('diary', ['doc.uid', '==', user?.uid ?? '']);

  useEffect(() => {
    if (!user?.email) {
      navigate('/login');
    }
  }, [user?.email]);

  const { isModalOpen } = useStateContexts();
  const [diaryData, setDiaryData] = useState<DocumentData[] | null>(documents);
  const [selected, setSelected] = useState<FilterData>(filterData[0]);

  useEffect(() => {
    if (documents) {
      setDiaryData(documents);
    }
  }, [isModalOpen, documents]);

  return (
    <Container>
      <div className="diary-panel">
        <FilterList
          setDiaryData={setDiaryData}
          setSelected={setSelected}
          selected={selected}
        />
        <DiaryList selected={selected} diaryData={diaryData ?? []} />
      </div>
      <BtnNew />
      {isModalOpen && <TodayModal />}
    </Container>
  );
}
