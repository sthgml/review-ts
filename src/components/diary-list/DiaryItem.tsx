import {
  ChangeEventHandler,
  useEffect, useRef, useState,
} from 'react';

// import useFirestore from "../../hooks/useFirestore";
import { DocumentData } from 'firebase/firestore';
import iconEdit from '../../assets/icon/icon-edit-bk.png';
import iconDelete from '../../assets/icon/icon-delete.svg';

type DiaryItemProps = {
  data: DocumentData
}

export default function DiaryItem({ data }: DiaryItemProps) {
  const [textareaValue, setTextareaValue] = useState('');
  const textarea = useRef<HTMLTextAreaElement>(null);
  // textarea 크기 변경!
  useEffect(() => {
    if (!textarea.current) return;
    textarea.current.style.height = 'auto';
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  }, []);

  useEffect(() => {
    if (!textarea.current) return;
    textarea.current.style.height = 'auto';
    textarea.current.style.height = `${textarea.current.scrollHeight}px`;
  }, [textareaValue]);

  const handleTextareaChange: ChangeEventHandler = (e) => {
    const temp = e.target.value;
    setTimeout(() => {
      if (temp === e.target.value) {
        setTextareaValue(e.target.value);
      }
    }, 400);
  };
  // const createdTime = data.createdTime.toDate();
  const createdTime = new Date();
  const timeString = `${createdTime.getFullYear()}년 ${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일 ${createdTime.getHours() > 12 ? '오후' : '오전'} ${createdTime.getHours() % 12}시 ${createdTime.getMinutes()}분 ${createdTime.getSeconds()}초`;

  // const { deleteDocument, updateDocument } = useFirestore('diary');
  const handleDelete = () => {
    // if (window.confirm('정말로 삭제하시겠습니까?')) deleteDocument(item.id);
  };

  const handleUpdate = () => {
    // if (window.confirm('수정하시겠습니까?')) updateDocument(item.id, { 'doc.text': textareaValue });
  };

  return (
    <article className="note-article">
      <h4 className="note-title ell-1">
        {data.doc.title}
      </h4>
      <p className="note-date assistive-text">
        {timeString}
      </p>
      <textarea
        ref={textarea}
        className="note-content"
        placeholder={data.doc.text}
        defaultValue={data.doc.text}
        onChange={handleTextareaChange}
      />

      <div className="div-btns">
        <button type="button" onClick={() => handleUpdate()} className="edit-btn">
          <img src={iconEdit} alt="수정" />
        </button>
        <span className="divider-btns" />
        <button type="button" onClick={() => handleDelete()} className="delete-btn">
          <img src={iconDelete} alt="삭제" />
        </button>
      </div>
    </article>
  );
}
