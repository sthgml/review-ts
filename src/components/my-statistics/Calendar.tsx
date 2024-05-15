import { DocumentData } from 'firebase/firestore';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .date-cell {
    width: 14.2%;
    text-transform: uppercase;
    padding: 8px;

    border: 2px solid ${({ theme }) => theme.colors.background1};
    box-sizing: border-box;
  }

  th {
    background-color: ${({ theme }) => theme.colors.background1};
    font-weight: 700;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

type CalendarProps = {
  data: DocumentData[];
}

export default function Calendar({ data }: CalendarProps) {
  const cal = new Array(31).fill(0).map((v, i) => i + 1);
  const day = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  return (
    <Container className="calendar">
      {day.map((v) => (
        <th key={`day${v}`} className="date-cell">
          {v}
        </th>
      ))}
      {cal.map((v) => (
        <tr key={`date${v}`} className="date-cell">
          {v}
        </tr>
      ))}
    </Container>
  );
}
