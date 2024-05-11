import { Timestamp } from 'firebase/firestore';

export default function getTimeString(time: {seconds: number; nanoseconds: number}) {
  const timestamp = new Timestamp(time.seconds, time.nanoseconds);
  const createdTime = timestamp.toDate();
  const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? '오후' : '오전'} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;
  return timeString;
}
