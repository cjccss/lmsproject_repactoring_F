## LMS Project Repactoring
이전에 만든 LMS프로젝트 리팩토링 
   
 

### 상세내용

```
지금까지 공부한 ReactJS와 NextJS를 되돌아보고 연습할겸 이전에 JSP방식으로 진행한
프로젝트를 리팩토링(?) 한다. AWS를 이용한 배포까지 해보는 것이 목표!
```

기간 : 2023.09.21 ~     
사용기술 및 사용 툴 :  Html, Css, ReactJS v18, NextJS v18, Recoil, Java, MySQL, VSCode, AWS 


### 계획
- All
    - JSP(JavaServer Pages) → SPA(Single Page Application)
    프론트, 백 분리개발하기
- Front
    - 코드는 자바스크립트 → 리액트, 서버는 nextjs,  상태관리 recoil 사용해보기
    - 에러처리페이지 활용하기(404.js or error boundary)
    - SEO, 웹최적화 해보기
    - 앨범게시판? 또는 게시판 정렬방식을 이미지가보이는 식으로 바꿔서 이미지최적화 해보기
    - 로그인 JWT 사용해보기
    - 네이버, 카카오 등 sns 회원가입 및 로그인 추가
- Back
    - VO → DTO
    - API 만들기
    - id / pw 암호화해서 db 저장하기 (기존에 사용하던 AES256 사용)
- DB_MySQL
    - 기존설계찾아보고 동일하게 만들기
