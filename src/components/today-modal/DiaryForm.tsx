import React, { useEffect, useState } from 'react';
// import useFirestore from '../../../hooks/useFirestore';

// homejsx에서 props로 전달받은 uid
export default function DiaryForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  // const { addDocument, response } = useFirestore('diary');
  /* 원하는 이름을 넣엊세요 이것이 collection의 이름이 될겁니다 */
  const [error] = useState(null);

  const handleData = (event) => {
    if (event.target.id === 'user-title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'user-content') {
      setText(event.target.value);
    }
  };

  // useEffect(() => {
  //   if (response.success) { // firestore에 잘 적용됐다!
  //     setText('');
  //     setTitle('');
  //     handleClose();
  //   }
  // }, [response.success]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addDocument({ uid, title, text });
  // };

  return (
    <form className="form" action="#" method="post" name="user-info-join" onSubmit={() => {}/* handleSubmit */}>
      <div className="input-user-flex">
        <input type="text" id="user-title" name="user-title" placeholder="제목을 적어주세요!" className="user-title" onChange={handleData} />
        {error && <p className="warning-text">warning text</p>}
      </div>
      <div className="input-user-flex">
        <textarea id="user-content" name="user-content" className="user-content" rows={17} placeholder="50분간 배웠던 내용을 기억나는대로 적어보세요!" onChange={handleData} />
        {error && <p className="warning-text">warning text</p>}
      </div>
      <button type="submit" className="btn-save">
        저장하기
      </button>
    </form>
  );
}
