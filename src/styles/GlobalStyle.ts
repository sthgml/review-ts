import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';

type GlobalStyleProps = {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    font-family: 'Pretendard';
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background2};
    color: ${(props) => props.theme.colors.text}
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .txt-hide {
    position: absolute;
    overflow: hidden;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
  }

  img {
    vertical-align: top;
  }

  button {
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  body {
    font-family: 'Pretendard';
    font-size: 14px;

    background-color: ${({ theme }) => theme.colors.background3};
    color: ${({ theme }) => theme.colors.text};
  }

  [class^="input-user"]{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  [class^="user-"] {
    width: 100%;
    padding: 14px;
    border-radius: 4px 4px 0px 0px;
    background: ${({ theme }) => theme.colors.background1};
    color: ${({ theme }) => theme.colors.text};
  }

  [class^="user-"]::placeholder {
    color: ${({ theme }) => theme.colors.secondaryText}88;
    line-height: 20px;
  }

  [class^="btn-"] {
    width: 100%;
    line-height: 20px;
    padding : 14px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background2};
    cursor: pointer;
    font-size: 16px;
    border-radius: 8px;
    box-sizing: border-box;
  }

  [class^="btn-"]:hover {
    box-sizing: border-box;
    box-shadow: inset 0 18px 18px #ffffff66;
  }

  [class^="btn-"]:active {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.primary}99;
    box-shadow: inset 0 -18px 18px #00000022;
  }

  .warning-text {
    font-size: 12px;
    color: #ff5d5d;
  }

  .assistive-text {
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  .mark {
    display: inline-block;
    width: fit-content;
    box-shadow: inset 0 -0.6em 0 ${({ theme }) => theme.colors.primary}55;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    line-height: 120%;
    font-weight: bold;
  }

  textarea[class^=user] {
    resize: none;
    border-radius: 4px;
  }

  [class^='icon'] {
    width: 32px;
  }

  .title {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 12px;
  }

  strong {
    font-weight: bold;
  }
`;

export default GlobalStyle;
