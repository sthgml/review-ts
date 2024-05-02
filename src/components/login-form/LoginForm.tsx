import {
  ChangeEventHandler, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Toggle from '../common/toggle/Toggle';

import useLogin from '../../hooks/useLogin';
import logoBig from '../../assets/logos/logo-xl.png';
import MainJoin from '../join-from/Join.style';

const MainLogin = styled(MainJoin)`
  div.test-toggle-div {
    margin-top: 12px;
    margin-left: 60px;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const handleData = (event) => {
    const temp = event.target.value;
    setTimeout(() => {
      if (temp === event.target.value) {
        if (event.target.type === 'email') {
          setEmail(temp);
        } else if (event.target.type === 'password') {
          setPassword(temp);
        }
      }
    }, 400);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  const handleCheckChange: ChangeEventHandler = async (e) => {
    const { checked } = e.target;
    if (checked) {
      setEmail('example@exam.ple');
      setPassword('123123');
    } else if (!checked) {
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (!inputEmail.current || !inputPassword.current) return;
    inputEmail.current.value = email;
    inputPassword.current.value = password;
  }, [email, password]);

  return (
    <MainLogin className="main">
      <Link to="./">
        <img src={logoBig} alt="당장복습헤 로고" className="logo-big" />
      </Link>
      <h1 className="mark">로그인</h1>
      <form
        className="form"
        action="#"
        method="post"
        name="user-info-join"
        onSubmit={handleSubmit}
      >
        <div className="input-user-email">
          <label htmlFor="user-email">
            이메일
          </label>
          <input
            ref={inputEmail}
            type="email"
            id="user-email"
            name="user-email"
            className="user-email"
            placeholder="example@exam.ple"
            onKeyUp={handleData}
            required
          />
          {error && (
            <p className="warning-text">
              아이디를 확인해주세요!
            </p>
          )}
        </div>

        <div className="input-user-pw">
          <label htmlFor="user-pw">
            비밀번호
          </label>
          <input
            ref={inputPassword}
            type="password"
            id="user-pw"
            name="user-pw"
            placeholder="비밀번호"
            className="user-pw"
            onChange={handleData}
            required
          />
          {error && (
            <p className="warning-text">
              비밀번호를 확인해주세요!
            </p>
          )}
        </div>

        <div className="test-toggle-div">
          <Toggle onChange={handleCheckChange} labelText="테스트 계정으로 체험하기" />
        </div>

        {isPending
          ? <strong>로그인이 진행중입니다.</strong>
          : (
            <button
              type="submit"
              className="btn-join"
            >
              로그인
            </button>
          )}
      </form>
    </MainLogin>
  );
}
export default LoginForm;
