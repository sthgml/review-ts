import styled from 'styled-components';
import TypingItem from './TypingItem';

const Container = styled.div`
  position: relative;
  width: 100%;

  .line {
    display: flex-wrap;
    row-gap: 8px;
    column-gap: 12px;
    width: 100%;
  }
`;

type TypingPracticeProps = {
  text: string;
}

export default function TypingPractice({
  text,
} : TypingPracticeProps) {
  const lines = text.split(/\n/);
  return (
    <Container>
      {
        lines.map((line, i) => (
          <div key={line + i.toString()} className="line">
            {
              line.replace(/ +/g, ' ').split(' ').map((v, ii) => (
                <TypingItem key={v + ii.toString()} word={v} />
              ))
            }
          </div>
        ))
      }

    </Container>
  );
}
