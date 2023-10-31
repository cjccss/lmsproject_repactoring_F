import { lectureaction } from "@/recoil/lecture";
import { level } from "@/recoil/user";
import { useRecoilState, useRecoilValue } from "recoil";

export default function LectureNotice() {
    const [write, setwrite] = useRecoilState(lectureaction);
    const levelno = useRecoilValue(level);

    return(
    <article>      
        <h3>| 공지사항</h3>
            <table>
                <colgroup>
                    <col width="70%" />
                    <col width="*" />  
                </colgroup>
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
            {levelno == 1&&<button onClick={()=>setwrite(true)}>게시글 등록</button>}
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
            button {
                float: right;
                padding: 0.6rem;
                padding-top: 0.45rem;
                border: none;
                border-radius: 0.5rem;
                background-color: #e9e9e9;
                cursor: pointer;
                margin-top: 1rem;
            }
        `}</style>
    </article>
    );
}