import { DocumentData, DocumentReference } from 'firebase/firestore';

export type Timestamp = {
  seconds: number;
  nanoseconds: number;
}

export type DiaryData = {
  id: string;
  doc: DocumentData;
  createdTime: Timestamp;
}

export const mockData: DiaryData[] = [{
  id: '12dva2123',
  doc: {
    title: 'sohee',
    text: '내용내용',
  },
  createdTime: {
    nanoseconds: 570000000,
    seconds: 1713694338,
  },
}, {
  id: '12dva2123',
  doc: {
    title: 'sohee2',
    text: '내용내용2',
  },
  createdTime: {
    nanoseconds: 849000000,
    seconds: 1713685549,
  },
}];
