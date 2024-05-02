import {
  ChangeEventHandler,
  useEffect, useRef, useState,
} from 'react';

import { type DocumentData } from 'firebase/firestore';
import useFirestore from '../../hooks/useFireStore';
import DiaryBtns from './DiaryBtns';
import TextArea from '../common/TextArea';

type DiaryItemProps = {
  data: DocumentData
}

export default function DiaryItem({ data }: DiaryItemProps) {
  // const createdTime = data.createdTime.toDate();
  const createdTime = new Date();
  const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? '오후' : '오전'} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;

  const { deleteDocument, updateDocument } = useFirestore('diary');
  const handleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) deleteDocument(data.id);
  };

  const handleUpdate = () => {
    if (window.confirm('수정하시겠습니까?')) updateDocument(data.id, { 'doc.text': textareaValue });
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
