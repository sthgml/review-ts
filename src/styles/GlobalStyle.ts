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

  :root {
    --icon : #9BABB2;
    --em : #DDE0E4;
    --medium : #677880;
    --bg : #263140;
    --primary : #96F2D7;
    --bg-2 : #2F3B4B;
    --bg-3 : #1d242c;
    --bg-4 : #10141a;
  }

  body {
    font-family: 'Pretendard';
    font-size: 14px;

    background-color: var(--bg-3, #263140);
    color: var(--em);
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
    border-bottom: 1px solid var(--text-3, #677880);
    background: var(--medium, #677880);
    color: white;
  }

  [class^="user-"]::placeholder {
    color: var(--icon);
    line-height: 20px;
  }

  [class^="btn-"] {
    width: 100%;
    line-height: 20px;
    padding : 14px;
    font-weight: bold;
    background-color: var(--primary);
    color: var(--bg);
    cursor: pointer;
    font-size: 16px;
    border-radius: 8px;
    box-sizing: border-box;
  }

  [class^="btn-"]:hover {
    background: linear-gradient(#bceedf, var(--primary));
    box-sizing: border-box;
    box-shadow: inset -1px -1px #60bba0;
  }

  [class^="btn-"]:active {
    background: linear-gradient(var(--primary), #60bba0);
    box-sizing: border-box;
    box-shadow: inset 1px 1px #60bba0;
  }

  .warning-text {
    font-size: 12px;
    color: #ff5d5d;
  }

  .assistive-text {
    font-size: 12px;
    line-height: 16px;
    color: var(--medium, #677880);
  }

  .mark {
    display: inline-block;
    width: fit-content;
    box-shadow: inset 0 -0.6em 0 #96F2D750;
    border-bottom: 1px solid var(--primary);
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
