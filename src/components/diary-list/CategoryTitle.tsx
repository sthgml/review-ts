import styled from 'styled-components';
import iconDofDay from '../../assets/icon/icon-d-of-day.png';
import { FilterData } from '../filter-list/filterData';

type CategoryTitleProps = {
  selected: FilterData
}

const Container = styled.h3`
  flex-direction: column;
  margin: 12px auto;
  margin-bottom: 32px;
  text-align: center;
  width: 70%;
  line-height: 1.2em;
`;

export default function CategoryTitle({ selected }: CategoryTitleProps) {
  return (
    <Container className="title">
      <img src={iconDofDay} alt="icon-d-of-day" className="icon-d-of-day" />
      <p>
        {
          selected?.label === '모든 기록'
            ? <strong> 학습 직후 </strong>
            : (
              <strong>
                {selected?.startTime}
                {' '}
                -
                {' '}
                {selected?.endTime}
                시간 내
              </strong>
            )
        }
        에 복습하면
        <br />
        <strong>
          {' '}
          {selected?.percent}
          %
        </strong>
        {' '}
        를 더 기억할 수 있어요!
      </p>
    </Container>
  );
}
