import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

// import useCollection from '../../../hooks/useCollection.jsx';
// import { useAuthContext } from '../../../hooks/useAuthContext.jsx';

import iconHeart from '../../assets/icon/heart.svg';

import { type FilterData, filterData } from './filterData';

const Container = styled.nav`
  padding: 48px 0;
  position: sticky;
  top: 68px;
  z-index: 20;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 16px;
  }

  ul li {
    cursor: pointer;
    color: var(--medium);
    background: var(--bg-4);
    padding: 8px 24px 8px 16px;
    border-radius: 8px 0 0 8px;
    transition: all 0.2s;
  }

  ul li.opened {
    color: var(--em);
    background: var(--bg-2);
    font-weight: bold;
  }

  ul li::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: -0.6em;
    background: url(${iconHeart}) no-repeat;
  }

  ul li.opened::before {
    background: url(${iconHeart}) no-repeat;
  }

  ul li:hover {
    background-color: var(--bg);
  }

  ul li.opened:hover {
    background-color: var(--bg-2);
  }

  @media (max-width:748px) {
    & {
      padding: 0;
      top:42px;
      margin-bottom: -8px;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 4px;
    }

    ul li {
      width: 80px;
      border-radius: 8px;
      box-shadow: 0 0 4px #00000025;
    }
  }
`;

type FilterListProps = {
  // setDiaryData: Dispatch<SetStateAction<DiaryData>>;
  selected: FilterData;
  setSelected: Dispatch<SetStateAction<FilterData>>;
}

export default function FilterList({
  // setDiaryData,
  selected,
  setSelected,
}: FilterListProps) {
  // const { user } = useAuthContext();
  // const { documents } = useCollection( 'diary', ['doc.uid', '==', user.uid] );
  // const documents = mockData;

  const handleDiaryFilter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const newSelected = filterData.find((datum) => datum.endTime === e.target.getAttribute('data-end')) ?? filterData[0];
    setSelected(newSelected);
  };

  // useEffect(() => {
  //   if (!documents) return;

  //   const filteredDocuments = documents.filter((doc: Doc) => {
  //     // const createdTime = doc.createdTime.toDate();
  //     // const now = new Date();
  //     // const diff = now - createdTime;
  //     const diff = 0;
  //     const selectedMilliEnd = Number(selected.endTime) * 60 * 60 * 1000;
  //     const selectedMilliStart = Number(selected.startTime) * 60 * 60 * 1000;
  //     return diff < selectedMilliEnd && diff > selectedMilliStart;
  //   });

  //   setDiaryData(filteredDocuments);
  // }, [selected]);

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
