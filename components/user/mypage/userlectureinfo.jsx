import { level } from "@/recoil/user";
import { useRecoilValue } from "recoil";


export default function UserLectureInfo() {
    const levelno = useRecoilValue(level);
    return(
        <p>
            {levelno == 2&& 
                <>
                    <div>
                        <h2>과목별 성적조회</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>과목번호</th>
                                <th>강의명</th>
                                <th>교수</th>
                                <th>총점</th>
                                <th>상세보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>회계원리</td>
                                <td>일길동</td>
                                <td>50/100</td>
                                <td><span>세부성적 조회하기</span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>경영학개론</td>
                                <td>이길동</td>
                                <td>40/100</td>
                                <td><span>세부성적 조회하기</span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>배고픔의원리</td>
                                <td>삼길동</td>
                                <td>30/100</td>
                                <td><span>세부성적 조회하기</span></td>
                            </tr>
                        </tbody>
                    </table>
                </>
            }
            <style jsx>{`
                p{
                    width: 100%;
                    height: 8.8rem;
                }
                h2 {
                    border-left: 5px solid black;
                    padding-left: 1rem;
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
                span {
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    padding: 0.2rem;
                    cursor: pointer;
                }
            `}</style>
        </p>
    );
}