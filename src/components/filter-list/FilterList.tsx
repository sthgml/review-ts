import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';

import { DocumentData } from 'firebase/firestore';
import iconHeart from '../../assets/icon/heart.svg';

import { type FilterData, filterData } from './filterData';

import useAuthContext from '../../hooks/useAuthContext';
import useCollection from '../../hooks/useCollection';

const Container = styled.nav`
  padding: 48px 0;
  position: sticky;
  top: 68px;

  z-index: 20;
  height: fit-content;

  ul.filterList-ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 16px;
    
    li > button {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.background4};
      padding: 8px 24px 8px 16px;
      border-radius: 8px 0 0 8px;
      transition: all 0.2s;
      width: 160px;

      &::before {
        content: '';
        display: inline-block;
        width: 32px;
        height: 32px;
        vertical-align: -0.6em;
        background: url(${iconHeart}) no-repeat;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.background2};
      }

      &.opened {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background2};
        font-weight: bold;

        &::before {
          background: url(${iconHeart}) no-repeat;
        }

        &::hover {
          background-color: ${({ theme }) => theme.colors.background1};
        }
      }
    }
  }

  @media (max-width:748px) {
    & {
      width: 100vw;
      padding: 0;
      position: fixed;
      top: calc(100vh - 88px);
      z-index: 30;
      margin-bottom: -8px;
    }

    ul.filterList-ul {
      flex-direction: row;
      justify-content: center;
      gap: 4px;
    }

    ul.filterList-ul li > button {
      width: 72px;
      height: 128px;
      padding: 12px 8px;

      display: flex;
      flex-direction: column;
      align-items: center;

      border-radius: 8px;
      box-shadow: 0 0 4px #00000025;

      font-size: 12px;
      word-break: keep-all;
    }
  }
`;

type FilterListProps = {
  setDiaryData: Dispatch<SetStateAction<DiaryData[]>>;
  selected: FilterData;
  setSelected: Dispatch<SetStateAction<FilterData>>;
}

export default function FilterList({
  setDiaryData,
  selected,
  setSelected,
}: FilterListProps) {
  const { user } = useAuthContext();
  const { documents } = useCollection('diary', ['doc.uid', '==', user?.uid ?? '']);

  const handleDiaryFilter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const clickedEndTime = Number(e.target.getAttribute('data-end'));
    const newSelected = filterData
      .find((datum) => datum.endTime === clickedEndTime)
      ?? filterData[0];
    setSelected(newSelected);
  };

  useEffect(() => {
    if (!documents) return;

    const filteredDocuments = documents.filter((doc: DocumentData) => {
      const createdTime = doc.createdTime.toDate();
      const now = new Date();
      const diff = now - createdTime;
      const selectedMilliEnd = Number(selected.endTime) * 60 * 60 * 1000;
      const selectedMilliStart = Number(selected.startTime) * 60 * 60 * 1000;
      return diff < selectedMilliEnd && diff > selectedMilliStart;
    });

    setDiaryData(filteredDocuments);
  }, [selected]);

  return (
    <Container className="filterList">
      <ul className="filterList-ul">
        {filterData.map((datum) => (
          <li
            key={datum.className}
          >
            <button
              type="button"
              data-end={datum.endTime}
              className={`${datum.className} ${
                datum.startTime === selected.startTime
                  && datum.endTime === selected.endTime
                  ? 'opened' : ''}`}
              onClick={handleDiaryFilter}
            >
              {datum.label}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
