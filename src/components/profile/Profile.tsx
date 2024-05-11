import styled from 'styled-components';
import { FormEventHandler, useRef } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import ProfileImage from './ProfileImage';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import useCollection from '../../hooks/useCollection';

const Container = styled.main`
  margin: 0 auto;
  margin-top: 80px;
  
  max-width: 100%;
  width: 400px;
  padding: 40px 24px;

  background: ${({ theme }) => theme.colors.background2};
  border-radius: 16px;
  box-shadow: -23px -20px 120px 0px ${({ theme }) => theme.colors.background1}
  , 32px 20px 180px 0px ${({ theme }) => theme.colors.background4};

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    div {
      width: 100%;
    }
  }

  h2 {
    font-weight: 800;
    padding-bottom: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.background1};
    margin-bottom: 8px;
  }

  #graph {
    background-color: ${({ theme }) => theme.colors.primary};

  }
`;

export default function Profile() {
  const { user } = useAuthContext();
  const displayNameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const phoneNumberEl = useRef<HTMLInputElement>(null);
  const { update, error, isPending } = useUpdateProfile();
  const { documents } = useCollection('diary', ['doc.uid', '==', user?.uid ?? '']);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!window.confirm('수정하시겠습니까?')) return;
    update(displayNameEl.current?.value ?? '', phoneNumberEl.current?.value ?? '');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <ProfileImage src={user?.photoURL ?? ''} />
        <div>
          <h2>
            별명
          </h2>
          <input
            ref={displayNameEl}
            type="text"
            placeholder={user?.displayName ?? '별명을 추가해주세요'}
            defaultValue={user?.displayName ?? ''}
            className="user-nickname"
          />
        </div>

        <div>
          <h2>
            이메일
          </h2>
          <input
            ref={emailEl}
            type="email"
            placeholder={user?.email ?? 'email를 추가해주세요'}
            defaultValue={user?.email ?? ''}
            className="user-email"
            readOnly
          />
        </div>

        <div>
          <h2>
            전화번호
          </h2>
          <p>
            <input
              ref={phoneNumberEl}
              type="number"
              placeholder={user?.phoneNumber ?? '전화번호를 추가해주세요'}
              defaultValue={user?.phoneNumber ?? ''}
              className="user-phone-number"
            />
          </p>
        </div>

        {documents && (
          <div>
            <h2>
              내가 복습한 기록
            </h2>
            <div
              id="graph"
              style={{
                width: '28px',
                height: `${2 * documents.length}px`,
              }}
            />
            <p>
              {documents.length}
            </p>
          </div>
        )}
        {isPending
          ? (
            <p className="assistive-text">
              제출하고 있습니다
            </p>
          )
          : (
            <button type="submit" className="btn-submit-update">
              수정하기
            </button>
          )}
      </form>
    </Container>
  );
}
