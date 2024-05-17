import { useEffect } from 'react';
import styled from 'styled-components';
import { DocumentData } from 'firebase/firestore';

import { filterData } from '../filter-list/filterData';
import useStateContexts from '../../hooks/useStateContexts';

import iconDofDay from '../../assets/icon/icon-d-of-day.png';
import iconDofDayLigt from '../../assets/icon/light/icon-d-of-day-light.png';
import Calendar from './Calendar';

export type TimeFilteredData = {
  [key: string]: DocumentData[];
};

const Container = styled.div`
  max-width: 100%;
  padding: 48px;
  box-sizing: border-box;
  
  border-radius: 16px;
  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.background2};
  
  text-align: center;

  .statistics-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    margin: 12px auto 32px auto;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2em;
  }

  .calendar {
    width: 478px;
    margin-bottom: 24px;
  }

  .graph-list {
    display: flex;
    align-items: end;
    gap: 12px;
    justify-content: space-evenly;

    background-color: ${(props) => props.theme.colors.background1};
    padding: 32px 24px 24px 24px;
    border-radius: 12px;

    width: 478px;
    max-width: 100%;
  }

  .graph-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 8px;
      margin: 8px auto;
    }
  }
`;

const GraphBar = styled.div<{$quantity: number | undefined}>`
  &#graph-bar {
    position: relative;
    display: block;
    width: 24px;
    height: 120px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px 2px 0 0;

    &::after {
      content:'';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;

      width: 24px;
      height: ${(props) => (props.$quantity ?? 0) * 2}px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

type GrpahListProps = {
  data: DocumentData[] | null
}

export default function GraphList({ data }: GrpahListProps) {
  const { timeFilteredData, setTimeFilteredData } = useStateContexts();
  const { lightTheme } = useStateContexts();

  // 복습 횟수
  const reviewCntTotal = data?.reduce((a, c) => {
    let current = c.reviewCnt;
    if (!current) current = 1;
    return a + (current);
  }, 0);

  // 월별 - 이번 달
  const timeFilteredDataArr = Object.entries(timeFilteredData ?? {});

  useEffect(() => {
    if (!data) return;
    filterData.forEach((f) => {
      const filteredDocuments = data.filter((doc: DocumentData) => {
        const createdTime = doc.createdTime.toDate();
        const now = new Date();
        const diff = now - createdTime;
        const selectedMilliEnd = Number(f.endTime) * 60 * 60 * 1000;
        const selectedMilliStart = Number(f.startTime) * 60 * 60 * 1000;
        return diff < selectedMilliEnd && diff > selectedMilliStart;
      });

      setTimeFilteredData((prev) => ({
        ...prev,
        [f.label]: filteredDocuments,
      }));
    });
  }, [data, filterData]);

  return (
    <Container className="statistics-panel">
      <h2 className="statistics-title">
        <img src={lightTheme ? iconDofDayLigt : iconDofDay} alt="icon-d-of-day" className="icon-d-of-day" />
        <p>내 복습 통계</p>
        <p className="assistive-text">내 복습 기록에 대한 통계를 한 눈에 확인해보세요!</p>
      </h2>
      <Calendar data={data ?? []} />
      <ul className="graph-list">
        <li className="graph-item">
          <GraphBar $quantity={reviewCntTotal && reviewCntTotal} id="graph-bar" />
          <h3>
            총 복습 횟수
          </h3>
          <p>
            {reviewCntTotal && reviewCntTotal}
          </p>
        </li>
        {timeFilteredDataArr.length && timeFilteredDataArr.map((d) => (
          <li key={d[0]} className="graph-item">
            <GraphBar $quantity={d[1].length} id="graph-bar" />
            <h3>
              {d[0]}
            </h3>
            <p>
              {d[1].length}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
