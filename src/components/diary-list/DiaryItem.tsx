import TextArea from '../common/TextArea';

import { type DiaryData } from './diaries';

type DiaryItemProps = {
  data: DiaryData
}

export default function DiaryItem({ data }: DiaryItemProps) {
  // const createdTime = data.createdTime.toDate();
  const createdTime = new Date();

  const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? '오후' : '오전'} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;

  return (
    <article className="note-article">
      <h4 className="note-title ell-1">
        {data.doc.title}
      </h4>
      <p className="note-date assistive-text">
        {timeString}
      </p>

      <TextArea
        placeholder={data.doc.text}
        value={data.doc.text}
      />
    </article>
  );
}
