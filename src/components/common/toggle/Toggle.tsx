import { ChangeEventHandler, useRef } from 'react';
import styled from 'styled-components';

const ToggleDiv = styled.div`
  margin-top: 12px;
  margin-left: 56px;
  position: relative;

  input {
    display: none;
  }

  #toggle-ball,
  #toggle-ball::after {
    content: '';
    display: inline-block;
    position: absolute;

    border-radius: 16px;
    margin-right: 8px;
  }

  #toggle-ball {
    height: 24px;
    width: 48px;
    top: -4px;
    left: -56px;
    box-shadow:  inset 0 0 4px ${({ theme }) => theme.colors.background4};
    background-color: ${({ theme }) => theme.colors.background3};
    transition: 0.3s;

    &::after {
      height: 20px;
      aspect-ratio: 1/1;
      box-sizing: border-box;

      top: 2px;
      left: 2px;

      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: inset -2px -2px 2px #355048, inset 2px 2px 2px #83a099;
      transition: 0.3s;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.background4};

      &::after {
        transform: translateX(6px);
      }
    }
  }

  input:checked + #toggle-ball::after {
    transform: translateX(24px);
  }

  input:checked + #toggle-ball:hover::after {
    transform: translateX(20px);
  }

  input:checked + #toggle-ball {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

type ToggleProps = {
  onChange: ChangeEventHandler
}

export default function Toggle({ onChange }: ToggleProps) {
  const checkboxInput = useRef<HTMLInputElement>(null);
  const handleClickToggleBall = () => {
    checkboxInput.current?.click();
  };

  return (
    <ToggleDiv>
      <label htmlFor="btn-test">테스트 계정으로 체험하기</label>
      <input ref={checkboxInput} type="checkbox" id="btn-test" onChange={onChange} />
      <button type="button" id="toggle-ball" onClick={handleClickToggleBall}>
        <span className="a11y-hidden">toggle-ball</span>
      </button>
    </ToggleDiv>
  );
}