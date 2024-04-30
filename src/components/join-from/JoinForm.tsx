import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import MainJoin from './Join.style';
import logoBig from '../../assets/logos/logo-xl.png';

function JoinForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [pwError, setPwError] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const { error, isPending, signup } = useSignup();

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.id === 'user-pwcheck') {
      setPwcheck(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    } else if (event.target.type === 'text') {
      setDisplayName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== pwcheck) {
      setPwError(true);
    } else {
      setPwError(false);
      signup(email, password, displayName);
    }
  };

  return (
    <MainJoin className="main">
      <a href="./"><img src={logoBig} alt="당장복습헤 로고" className="logo-big" /></a>
      <h1 className="mark">회원가입</h1>
      <form className="form" action="#" method="post" name="user-info-join" onSubmit={handleSubmit}>
        <div className="input-user-email">
          <label htmlFor="user-email">이메일</label>
          <input type="email" id="user-email" name="user-email" className="user-email" placeholder="example@exam.ple" required onChange={handleData} />
          {error === 'Firebase: Error (auth/email-already-in-use).'
          && <p className="warning-text">아이디를 확인해주세요!</p>}
        </div>
        <div className="input-user-pw">
          <label htmlFor="user-pw">비밀번호</label>
          <input type="password" id="user-pw" name="user-pw" placeholder="비밀번호" className="user-pw" required onChange={handleData} />
          {error === 'Firebase: Password should be at least 6 characters (auth/weak-password).'
          && <p className="warning-text">비밀번호를 확인해주세요!</p>}
        </div>
        <div className="input-user-pwcheck">
          <label htmlFor="user-pwcheck">비밀번호 확인</label>
          <input type="password" id="user-pwcheck" name="user-pwcheck" placeholder="비밀번호 확인" className="user-pwcheck" required onChange={handleData} />
          {pwError && <p className="warning-text">비밀번호가 일치하지 않습니다.</p>}
        </div>
        <div className="input-user-nn">
          <label htmlFor="user-nn">닉네임</label>
          <input type="text" id="user-nn" name="user-nn" placeholder="닉네임" className="user-nn" required onChange={handleData} />
          {error && <p className="warning-text">닉네임을 입력해주세요!</p>}
        </div>
        {isPending ? <p>회원가입이 진행중입니다.</p> : (
          <button type="submit" className="btn-join">
            회원가입
          </button>
        )}
      </form>
      <p className="assistive-text">Copyright 2023. Sohee Park All rights reserved.</p>
    </MainJoin>
  );
}
export default JoinForm;
