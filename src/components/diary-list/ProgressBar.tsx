import styled from 'styled-components';

const Container = styled.div<{$percentage: number}>`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  ${(props) => `
    background: linear-gradient(90deg, ${props.theme.colors.primary} ${props.$percentage}%, ${props.theme.colors.secondary} ${props.$percentage + 0.1}%); 
  `}

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 12px;

  p {
    font-size: 6px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

type ProgressBarPros = {
  reviewCnt: number;
}

export default function ProgressBar({ reviewCnt }: ProgressBarPros) {
  if (!reviewCnt) return <p />;
  let percentage: number;
  switch (reviewCnt) {
  case 1:
    percentage = 42;
    break;
  case 2:
    percentage = 56;
    break;
  case 3:
    percentage = 67;
    break;
  case 4:
    percentage = 75;
    break;
  case 5:
    percentage = 80;
    break;
  default:
    percentage = 100;
    break;
  }

  return (
    <Container
      $percentage={percentage}
    >
      <p>
        {percentage}
        %
      </p>
    </Container>
  );
}
