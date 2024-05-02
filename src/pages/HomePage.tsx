import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryList from '../components/diary-list/DiaryList';
import BtnNew from '../components/today-modal/BtnNew';
import TodayModal from '../components/today-modal/TodayModal';
import FilterList from '../components/filter-list/FilterList';
import { FilterData, filterData } from '../components/filter-list/filterData';
import SideMenu from '../components/side-menu/SideMenu';
import useAuthContext from '../hooks/useAuthContext';
import { DiaryData, mockData } from '../components/diary-list/diaries';

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 130px - 60px);

  div.diary-panel {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 32px;
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

    section.old {
      margin-top: 0;
    }
  } 
`;

export default function HomePage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate('/login');
    }
  }, [user?.email]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diaryData, setDiaryData] = useState<DiaryData[]>(mockData);
  const [selected, setSelected] = useState<FilterData>(filterData[0]);
  const handleNewBtn = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <SideMenu />
      <div className="diary-panel">
        <FilterList
          setDiaryData={setDiaryData}
          setSelected={setSelected}
          selected={selected}
        />
        <DiaryList selected={selected} />
      </div>
      <BtnNew handleNewBtn={handleNewBtn} />
      {isModalOpen && <TodayModal setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
}
