import styled from 'styled-components';
import contentError from '../../../assets/icon/folder.png';

const ErrorDivComp = styled.article`
  width: 478px;
  max-width: 100%;
  height: 100%;
  padding: 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img#content-error {
    width: 20%;
  }

  p {
    color: ${(props) => props.theme.colors.icon}
  }
`;

type ErrorDivProps = {
  text: string;
}

export default function ErrorDiv({ text }: ErrorDivProps) {
  return (
    <ErrorDivComp className="note-list">
      <img id="content-error" src={contentError} alt="content-error" />
      <p>{text}</p>
    </ErrorDivComp>
  );
}
