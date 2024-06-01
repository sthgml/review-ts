import {
  Dispatch,
  ReactNode, SetStateAction, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import throttle from '../../utils/throttle';

const Container = styled.div<{$wordLength: number}>`
  display: inline-block;
  width: 100%;

  p {
    position: absolute;
    white-space: pre-wrap;
    pointer-events : none;
    color: ${(props) => props.theme.colors.icon};
  }

  .complete {
    color: ${(props) => props.theme.colors.primary};
  }

  .focus {
    color: ${(props) => props.theme.colors.text};
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;

      width: 1.5px;
      height: 1.1em;

      top: 0;
      left: 0;

      background-color: ${(props) => props.theme.colors.primary};

      @keyframes blink {
        0% {
          opacity: 0;
        } 100% {
          opacity: 1;
        }
      }

      animation: blink 0.7s infinite;
    }
  }
  
  .wrong {
    color: red;
  }

  textarea {
    display: block;
    
    width: 100%;

    opacity: 0.1;
    background: none;
    
    resize: none;
  }
`;

type TypingItemProps = {
  word: string;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
}

export default function TypingItem({ word, setIsCompleted }: TypingItemProps) {
  if (word === '') return null;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [spanArr, setSpanArr] = useState<ReactNode[]>([word]);

  const handleBackspace = (e) => {
    if (textareaRef.current && textareaRef.current?.value.length > 0) return;
    if (e.key === 'Backspace') {
      let prevWord = e.target.parentNode.previousSibling?.lastChild;
      if (prevWord) {
        prevWord.focus();
      } else {
        prevWord = e.target.parentNode.parentNode.previousSibling?.lastChild?.lastChild;
        if (prevWord) {
          prevWord?.focus();
        }
      }
    }
  };

  const moveNext = (e) => {
    let nextWord = e.target.parentNode.nextSibling?.lastChild;
    if (nextWord && nextWord.type === 'textarea') {
      nextWord.focus();
    } else {
      nextWord = e.target.parentNode.parentNode.nextSibling?.firstChild?.lastChild;
      if (nextWord && nextWord.type === 'textarea') {
        nextWord?.focus();
      } else {
        setIsCompleted(true);
      }
    }
  };

  const handleChange = (e) => {
    if (!textareaRef.current) return;

    const trimedText = textareaRef.current.value.trim();
    const textareaArr = trimedText.split('');
    const textArr = word.trim().split('');

    const newSpanArr = textArr.map((v, i) => {
      let className = '';

      if (i < textareaArr.length) {
        if (v === textareaArr[i]) {
          className = 'complete';
        } else {
          className = 'wrong';
        }
      } else if (i === textareaArr.length) {
        className = 'focus';
      }

      return (
        <span key={i.toString() + v} className={`char ${className}`}>
          {v}
        </span>
      );
    });

    setSpanArr(newSpanArr);

    if (textareaRef.current.value.length > word.length) {
      moveNext(e);
      const slicedText = textareaRef.current.value.slice(0, word.length);
      textareaRef.current.value = slicedText;
    }
  };

  const throttleChange = throttle(handleChange, 50);

  // textarea 크기 변경!
  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, []);

  return (
    <Container
      $wordLength={word.length}
      className="typing-item"
    >
      <p>
        {spanArr}
      </p>
      <textarea
        ref={textareaRef}
        onChange={(e) => throttleChange(e)}
        className="word"
        onKeyDown={handleBackspace}
      />
    </Container>
  );
}
