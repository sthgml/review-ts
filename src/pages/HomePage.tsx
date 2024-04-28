import styled from 'styled-components';
import { useState } from 'react';
import DiaryList from '../components/diary-list/DiaryList';
import BtnNew from '../components/today-modal/BtnNew';
import TodayModal from '../components/today-modal/TodayModal';
import FilterList from '../components/filter-list/FilterList';
import { DiaryData, mockData } from '../components/diary-list/diaries';
import { FilterData, filterData } from '../components/filter-list/filterData';

const Container = styled.main`
  display: flex;
  position: relative;

  main {
      display: flex;
      margin: 0 auto;
      margin-top: 32px;
      align-items: flex-start;
    }

  @media (max-width:748px) {
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 12px;
    }

    section.old {
      margin-top: 0;
    }
  } 
`;

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [diaryData, setDiaryData] = useState<DiaryData>();
  const [selected, setSelected] = useState<FilterData>(filterData[0]);
  const handleNewBtn = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <FilterList
        // setDiaryData={setDiaryData}
        setSelected={setSelected}
        selected={selected}
      />
      <DiaryList />
      <BtnNew handleNewBtn={handleNewBtn} />
      {isModalOpen && <TodayModal setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
}
