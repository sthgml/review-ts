import styled from 'styled-components';

import DiaryItem from './DiaryItem';

import quoteStart from '../../assets/icon/quote-start.png';
import quoteEnd from '../../assets/icon/quote-end.png';
import { mockData } from './diaries';

const Container = styled.section`
  max-width: 100%;
  width: fit-content;
  margin: auto;
  padding: 32px 48px;
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 16px;
    
  h2.title::before {
    content: '';
    background: url(${quoteStart}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }

  h2.title::after {
    content: '';
    background: url(${quoteEnd}) center/contain no-repeat;
    width: 60px;
    height: 60px;
  }

  h2 {
    margin: 0;
  }

  h2 span {
    flex-shrink: 0;
    margin-right: 12px;
  }

  .note-list,
  .one-day .note-list,
  .one-week .note-list,
  .one-month .note-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .note-list article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    max-width: 100%;
    width: 478px;
    padding: 30px 28px 35px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.background};
    transition: all 0.2s;
  }

  .note-list article:hover {
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.background};
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
  }

  .note-content:hover {
    background-color: ${({ theme }) => theme.colors.background3};
  }

  @media (max-width:500px) {
    & {
      padding: 24px;
    }

    h2 {
      margin-bottom: 16px;
    }

    h3.title {
      flex-direction: column;
    }
  }
`;

export default function DiaryList() {
  return (
    <Container>
      <ul>
        {mockData.map((d) => (
          <li key={d.createdTime.nanoseconds}>
            <DiaryItem data={d} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
