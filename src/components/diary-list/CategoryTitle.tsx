import iconDofDay from '../../assets/icon/icon-d-of-day.png';
import { FilterData } from '../filter-list/filterData';

type CategoryTitleProps = {
  selected: FilterData
}
export default function CategoryTitle({ selected }: CategoryTitleProps) {
  return (
    <h3 className="title">
      <img src={iconDofDay} alt="icon-d-of-day" className="icon-d-of-day" />
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
              시간
            </strong>
          )
      }
      &nbsp;| 지금 복습하면&nbsp;
      {' '}
      <p>
        <strong>
          {selected?.percent}
          %
        </strong>
      &nbsp;를 더 기억할 수 있어요!
      </p>
    </h3>
  );
}
