import { lectureNavName } from "@/recoil/lecture";
import { useRecoilValue } from "recoil";

export default function LectureBoard() {
    const lecturenavname = useRecoilValue(lectureNavName);

    return(
    <article>      
        <h4>| {lecturenavname}</h4>
        {/* 공지사항, 강의자료, 질문게시판에 사용하기 */}
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2023-10-13</td>
                    </tr>
                    <tr>
                        <td>배고파요</td>
                        <td>2023-10-13</td>
                    </tr>
                    <tr>
                        <td>잘가요</td>
                        <td>2023-10-13</td>
                    </tr>
                    <tr>
                        <td>잘가요</td>
                        <td>2023-10-13</td>
                    </tr>
                    <tr>
                        <td>잘가요</td>
                        <td>2023-10-13</td>
                    </tr>
                </tbody>
            </table>
            <div style={{textAlign:"center",border:"1px solid black", width:"300px", margin:"0 auto", marginTop: "2rem"}}>페이지 바</div>
        <style jsx>{`
            article {
                margin: 1rem;
                width: 100%;
            }
            table {
                width: 100%;
                border-collapse: collapse
            }
            thead{
                text-align:center;
                border-bottom: 1px solid #bcbcbc;
                background-color: #e9e9e9;
            }          
            th{
                text-align:center;
                padding: 0.3rem;
                font-weight: normal;
            }
            thead tr:first-child {
                border-bottom: 1px solid #bcbcbc;
            }
            tbody tr:last-child {
                border-bottom: 1px solid #bcbcbc;
            }
            tr {
                border-bottom:  solid 1px #F5F5F5;
            }
            td {
                padding: 0.5rem;
                text-align: center;
            }
        `}</style>
    </article>
    );
}