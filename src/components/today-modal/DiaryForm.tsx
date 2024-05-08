import { useEffect, useRef, useState } from 'react';
import useFirestore from '../../hooks/useFireStore';
import useStateContexts from '../../hooks/useStateContexts';

type DiaryFormProps = {
  uid: string | undefined;
}

export default function DiaryForm({ uid }: DiaryFormProps) {
  const inputEl = useRef<HTMLInputElement>(null);
  const textareaEl = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { addDocument, updateDocument, response } = useFirestore('diary');
  const [error] = useState(null);

  const { selected, setSelected, setIsModalOpen } = useStateContexts();

  const handleData = (event) => {
    if (event.target.id === 'user-title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'user-content') {
      setText(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected.id) {
      updateDocument(selected.id, { 'doc.text': text, 'doc.title': title });
    } else {
      addDocument({ uid, title, text });
    }
  };

  useEffect(() => {
    if (response.success) { // firestore에 잘 적용됐다!
      setText('');
      setTitle('');
      setSelected({});
      setIsModalOpen(false);
    }
  }, [response.success]);

  useEffect(() => {
    if (selected.id && textareaEl?.current && inputEl?.current) {
      setText(selected.doc.text);
      setTitle(selected.doc.title);
      textareaEl.current.value = selected.doc.text;
      inputEl.current.value = selected.doc.title;
    }
  }, [selected]);

  return (
    <form
      className="form"
      action="#"
      method="post"
      name="user-info-join"
      onSubmit={handleSubmit}
    >
      <div className="input-user-flex">
        <div className="input-user-flex">
          <input
            ref={inputEl}
            type="text"
            id="user-title"
            name="user-title"
            placeholder="제목을 적어주세요!"
            className="user-title"
            onChange={handleData}
          />
          {error && <p className="warning-text">warning text</p>}
        </div>
        <div className="input-user-flex">
          <textarea
            ref={textareaEl}
            id="user-content"
            name="user-content"
            className="user-content"
            rows={6}
            placeholder="50분간 배웠던 내용을 기억나는대로 적어보세요!"
            onChange={handleData}
          />
          {error && <p className="warning-text">warning text</p>}
        </div>
      </div>
      <button
        type="submit"
        className="btn-save"
      >
        저장하기
      </button>
    </form>
  );
}
