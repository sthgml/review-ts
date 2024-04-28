export type Timestamp = {
  seconds: number;
  nanoseconds: number;
}

export type Doc = {
  title: string;
  text: string;
}

export type DiaryData = {
  doc: Doc;
  createdTime: Timestamp;
}

export const mockData: DiaryData[] = [{
  doc: {
    title: 'sohee',
    text: '내용내용',
  },
  createdTime: {
    nanoseconds: 570000000,
    seconds: 1713694338,
  },
}, {
  doc: {
    title: 'sohee2',
    text: '내용내용2',
  },
  createdTime: {
    nanoseconds: 849000000,
    seconds: 1713685549,
  },
}];
