

export default function SyllabusWrite() {
    return(
        <form>
        <h4>기본정보</h4>
            <table>
                <tr>
                    <th>교과목명</th>
                    <td>컴퓨터공학개론</td>
                </tr>
                <tr>
                    <th>수강대상</th>
                    <td>컴퓨터공학과</td>
                    <th>개설학기</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>강의시간</th>
                    <td>월 15:00 ~ 17:00(</td>
                    <th>학점</th>
                    <td>4</td>
                </tr>
                <tr>
                    <th>성적평가</th>
                    <td>출석20 중간고사40 기말고사40</td>
                </tr>
                <tr>
                    <th>교재 및 참고자료</th>
                    <td>컴퓨터공학개론_홍길동/쌍용출판사</td>
                </tr>
                <tr>
                    <th>교수명</th>
                    <td>홍길동</td>
                    <th>소속</th>
                    <td>공과대학</td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>computer@ssangyong.ac.kr</td>
                    <th>연구실</th>
                    <td>가나다관 202호</td>
                </tr>
            </table>
            <h4>주차별 강의 계획</h4>
            <table>
                <colgroup>
                    <col width="*" />
                    <col width="60%" />
                </colgroup>
                <tr>
                    <th>주차</th>
                    <th>수업내용</th>
                </tr>
                <tr>
                    <td>1주차(2023.10.02 ~ 2023.10.06)</td>
                    <td>컴퓨터 알아보자컴퓨터 알아보자Request textDocument/definition failed</td>
                </tr>
                <tr>
                    <td>2주차(2023.10.09 ~ 2023.10.13)</td>
                    <td>개론 구경하기컴퓨터 알아보자</td>
                </tr>
                <tr>
                    <td>3주차(2023.10.16 ~ 2023.10.20)</td>
                    <td>컴퓨터와 개론컴퓨터 알아보자</td>
                </tr>
                <tr>
                    <td>4주차(2023.10.23 ~ 2023.10.27)</td>
                    <td>알아보고 구경하자컴퓨터 알아보자</td>
                </tr>
                <tr>
                    <td>5주차(2023.10.30 ~ 2023.10.31)</td>
                    <td>Request textDocument/definition failed 잘가요</td>
                </tr>
            </table>
                <button>완료</button>		
            <style jsx>{`
                article {
                    margin: 1rem;
                    width: 100%;
                }
                table:nth-child(3) {
                    margin-bottom: 5rem;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    border-top: 2px solid black;  
                }
                thead{
                    text-align:center;
                    border-bottom: 1px solid #bcbcbc;
                    background-color: #e9e9e9;
                }          
                th{
                    text-align:center;
                    padding: 0.3rem;
                    
                }
                tr {
                    border-bottom:  1px solid #F5F5F5;
                }
                td {
                    padding: 0.5rem;
                    text-align: center;
                }
                button {
                    float: right;
                    padding: 0.6rem;
                    padding-top: 0.45rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    cursor: pointer;
                    margin-top: 2rem;
                    margin-right: 1rem;
                }
            `}</style>
        </form>
    );
}