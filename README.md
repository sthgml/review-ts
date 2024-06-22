# 당장복습헤!

## 1. Overview ｜ 당장복습헤! 소개

![[왼쪽부터 1회차(수업 직후) 2회차(다음날 아침) 3회차 (다음주 아침) 복습 후 모습](https://sohee-parks-organization.gitbook.io/devnote/23-07-23-11-or-fe/10)](https://prod-files-secure.s3.us-west-2.amazonaws.com/1d260432-5f76-4cf8-85f4-d6225fe09422/28a8a8e9-6d59-4549-b75a-5d6f60a28001/Untitled.png)

부트캠프 기간 중 학습에 사용했던 망각곡선 이론 바탕 복습법을 활용한 기록 저장 서비스입니다. **학습 직후에 학습한 내용을 데이터 베이스에 저장**하고 **현 시점 기준 24시간, 일주일, 한 달 전 기록 표시**하여 다시 타이핑 해보면서 복습하도록 유도합니다.

[왼쪽부터 1회차(수업 직후) 2회차(다음날 아침) 3회차 (다음주 아침) 복습 후 모습](https://sohee-parks-organization.gitbook.io/devnote/23-07-23-11-or-fe/10)

| 항목 | 내용 |
| --- | --- |
| 기간 |2023.07.19 - 진행중|
| 배포 | [https://review-now-green.vercel.app/](https://sthgml.github.io/review-now/)|
| 기술 스택 | TypeScript, React, styled-component, firebase, vercel |

## 2. 🥦 개발환경

### ⌨️ 기술스택

<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
   <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>&nbsp
   <img src="https://img.shields.io/badge/firebase-FFA611?style=for-the-badge&logo=firebase&logoColor=white" />
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
   <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
 </td>
</tr>
<tr>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
  <tr>
 <td align="center">배포</td>
 <td>
      <img src="https://img.shields.io/badge/vercel-F9DC3E?style=for-the-badge&logo=vercel&logoColor=white"/>&nbsp
</tr>
</table>

### 기술스택을 선택한 이유

- React:  컴포넌트 각각의 내부 로직과 렌더링 원칙을 활용해 확장성이 뛰어나고, 웹 앱 일관성을 달성할 수 있습니다. 또한 DOM을 가상화하여 메모리에 보관함으로써 React는 모든 뷰 변경 사항을 가상 DOM에 즉시 반영하여 놀라운 속도의 렌더링을 제공할 수 있기 때문에 사용하였습니다.

- TS: 타입을 미리 정의해 자동완성기능을 사용하고, 컴파일 과정에서 오류를 미리 발견하여 개발의 효율성을 높일 수 있었습니다.

- Vercel: 배포 자동화를 손쉽게 해주는 도구, aws나 docker를 통한 연결에 대해서 어려워하는 프론트엔드 개발자에게 쉽게 배포환경을 제공해주고 관리가 쉽기 때문에 선택했습니다. 소스 코드가 있는 깃허브 저장소를 Vercel에 연결하면 매 push마다 자동으로 배포할 수 있습니다.

- Styled-Component: 스타일을 따로 정의해 코드의 가독성과 유지 보수성을 높이기 위해 사용하였습니다.

- React Router : React의 SPA 환경에서 URL에 따라 동적으로 컴포넌트를 변화시킴으로써, 브라우저의 뒤로 가기와 앞으로 가기 기능을 활용할 수 있게 됩니다. 새로운 페이지로 이동할 경우 전체 페이지를 다시 렌더링 하지 않고, 변화가 필요한 컴포넌트만을 업데이트하여 React의 효율적인 렌더링을 유지하기 위해 사용하셨습니다.

<br />
  
## 99. 커밋컨벤션

| Type | 설명 |
| --- | --- |
| fix |버그, 오류 수정|
| docs |README.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)|
| style |CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)|
| refactor |코드 리팩토링|
| chore |패키지 매니저 설정할 경우, etc 등 (ex. gitignore)|
| comment |필요한 주석 추가 및 변경|
| rename |파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우|
| remove |파일을 삭제하는 작업만 수행한 경우|
