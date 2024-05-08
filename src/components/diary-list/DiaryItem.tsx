import { Timestamp, type DocumentData } from 'firebase/firestore';
import { useEffect } from 'react';
import useFirestore from '../../hooks/useFireStore';
import DiaryBtns from './DiaryBtns';
import TextArea from '../common/TextArea';
import useStateContexts from '../../hooks/useStateContexts';

type DiaryItemProps = {
  data: DocumentData
}

export default function DiaryItem({ data }: DiaryItemProps) {
  const { setIsModalOpen, setSelected } = useStateContexts();
  const timestamp = new Timestamp(data.createdTime.seconds, data.createdTime.nanoseconds);
  const createdTime = timestamp.toDate();
  const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? '오후' : '오전'} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;

  const { deleteDocument } = useFirestore('diary');
  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) deleteDocument(data.id);
  };
  const handleUpdate = () => {
    setIsModalOpen(true);
    setSelected(data);
  };

  return (
    <article className="note-article">
      <h4 className="note-title ell-1">
        {data.doc.title}
      </h4>
      <p className="note-date assistive-text">
        {timeString}
      </p>
      <TextArea placeholder={data.doc.text} value={data.doc.text} />
      <DiaryBtns fns={{ handleDelete, handleUpdate }} />
    </article>
  );
}
