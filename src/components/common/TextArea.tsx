import { useEffect, useRef, useState } from 'react';

type TextAreaProps = {
  placeholder: string;
  value: string;
}
export default function TextArea({
  placeholder, value,
}: TextAreaProps) {
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

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const temp = e.target.value;
    setTimeout(() => {
      if (temp === e.target.value) {
        setTextareaValue(e.target.value);
      }
    }, 400);
  };

  useEffect(() => {
    if (!textarea.current) return;
    textarea.current.value = value;
  }, [placeholder, value]);

  return (
    <textarea
      ref={textarea}
      className="note-content"
      placeholder={placeholder}
      defaultValue={value}
      onChange={handleTextareaChange}
    />
  );
}
