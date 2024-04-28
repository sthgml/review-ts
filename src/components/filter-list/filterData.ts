export type FilterData = {
  label: string,
  className: string,
  startTime: number,
  endTime: number,
  percent: number,
};

export const filterData: FilterData[] = [{
  label: '모든 기록',
  className: 'tap-all',
  startTime: 0,
  endTime: 9999,
  percent: 42,
}, {
  label: '24시간 이내',
  className: 'tap-0hr',
  startTime: 0,
  endTime: 24,
  percent: 56,
}, {
  label: '24시간 이상',
  className: 'tap-24hr',
  startTime: 24,
  endTime: 168,
  percent: 67,
}, {
  label: '일주일 이상',
  className: 'tap-week',
  startTime: 168,
  endTime: 672,
  percent: 75,
}, {
  label: '한 달 이상',
  className: 'tap-month',
  startTime: 672,
  endTime: 99999,
  percent: 80,
},
];
