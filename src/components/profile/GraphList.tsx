import { DocumentData } from 'firebase/firestore';
import styled from 'styled-components';
import { useEffect } from 'react';
import { filterData } from '../filter-list/filterData';
import useStateContexts from '../../hooks/useStateContexts';

export type TimeFilteredData = {
  [key: string]: DocumentData[];
};

const Container = styled.div`
  width: 100%;

  .graph-list {
    display: flex;
    align-items: end;
    gap: 12px;
    justify-content: space-between;

    background-color: ${(props) => props.theme.colors.background1};
    padding: 12px;
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
    width: 24px;
    height: ${(props) => (props.$quantity ?? 0) * 2}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px 2px 0 0;
  }
`;

type GrpahListProps = {
  data: DocumentData[] | null
}

export default function GraphList({ data }: GrpahListProps) {
  const { timeFilteredData, setTimeFilteredData } = useStateContexts();

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
    <Container>
      <h2>
        내 복습 통계
      </h2>
      <ul className="graph-list">
        <li className="graph-item">
          <GraphBar $quantity={data?.length} id="graph-bar" />
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
