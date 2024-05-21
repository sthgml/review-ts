import { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;

  p {
    position: absolute;
    white-space: pre-wrap;
  }

  .complete {
    color: ${(props) => props.theme.colors.primary};
  }

  .focus {
    color: black;
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 1.5em;
      top: 0;
      left: 0em;
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  
  .wrong {
    color: red;
  }

  textarea {
    width: 100%;
    height: 350px;
    opacity: 0.1;
  }
`;

type TypingPracticeProps = {
  text: string;
}

export default function TypingPractice({ text } : TypingPracticeProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [sliceIdx, setSliceIdx] = useState(0);
  const [wrongIdx, setWrongIdx] = useState([0]);

  const handleChange = (e) => {
    if (!textareaRef.current) return;

    console.log(text.slice(0, textareaRef.current.value.length));
    console.log(textareaRef.current.value);

    if (text.slice(0, textareaRef.current.value.length) === textareaRef.current.value) {
      setSliceIdx(textareaRef.current.value.length);
      setWrongIdx([]);
    } else {
      setWrongIdx((prev) => [...prev, textareaRef.current.value.length]);
    }
  };

  return (
    <Container>
      <p className="wrong">
        {wrongIdx ? wrongIdx.map((v) => (
          <span key={v}>
            {text.slice(v, v + 1)}
          </span>
        )) : text }
      </p>
      <p>
        {sliceIdx ? (
          <>
            <span className="complete">
              {text.slice(0, sliceIdx)}
            </span>
            <span className="focus">
              {text.slice(sliceIdx, sliceIdx + 1)}
            </span>
            <span>
              {text.slice(sliceIdx + 1)}
            </span>
          </>
        ) : text }
      </p>
      <textarea ref={textareaRef} onChange={handleChange} />
    </Container>
  );
}
