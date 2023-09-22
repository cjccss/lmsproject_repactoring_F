import Image from "next/image"


export default function Home() {
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Image width={30} height={30} src="/images/close.png" alt="close"/>
        </a>
        <div id="loginInfo">
          <c:if test="${empty sessionScope.loginuser}"><a href="<%=ctxPath%>/login.sam">로그인을 해주세요</a></c:if>
            <c:if test="${sessionScope.loginuser.identity == 0}">
            <a id="name">${sessionScope.loginuser.name}님</a>
        </c:if>
          <c:if test="${sessionScope.loginuser.identity == 1}">
            <a id="name">${sessionScope.loginuser.name}님</a>
        </c:if>
        </div>
        <a href="<%=ctxPath%>/mypage/mypage.sam">마이페이지</a>
        <a href="<%=ctxPath%>/board/list.sam?categoryno=4">공지사항</a>
        <a href="<%=ctxPath%>/board/list.sam?categoryno=5">Q&A</a>
        <a href="<%=ctxPath%>/board/list.sam?categoryno=1">커뮤니티</a>
        <a href="<%=ctxPath %>/reading/index.sam">열람실좌석예약</a>
        
      </div>
      <div>Hello</div>
    </>
  )
}
