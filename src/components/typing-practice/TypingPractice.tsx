import styled from 'styled-components';
import { useState } from 'react';
import TypingItem from './TypingItem';

const Container = styled.div`
  position: relative;
  width: 100%;
  box-shadow: inset 0 0 32px blue;

  .line {
    width: 100%;
    display: flex-wrap;
    row-gap: 8px;
    column-gap: 12px;
  }
`;

type TypingPracticeProps = {
  text: string;
  addReviewCnt: (e: Event) => void;
}

export default function TypingPractice({
  text, addReviewCnt,
} : TypingPracticeProps) {
  const lines = text.split(/\n/);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Container>
      {
        lines.map((line, i) => (
          <TypingItem key={line + i.toString()} word={line} setIsCompleted={setIsCompleted} />
        ))
      }
      <button
        type="submit"
        className="btn-complete"
        disabled={!isCompleted}
        onClick={(e) => {
          console.log('review-completed!!');
          addReviewCnt(e);
        }}
      >
        복습완료!
      </button>
    </Container>
  );
}
