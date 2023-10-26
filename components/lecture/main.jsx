import LectureNav from "@/components/layout/lecturenav";
import { lectureNavNo } from "@/recoil/lecture";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";


export default function LectureMain() {
    const lecturenavno = useRecoilValue(lectureNavNo);

    return(     
        <> 
            <div className="contents">
                <article>
                    <h4>| <Link href="">공지사항</Link></h4>
                    <table>
                        <thead>
                            <tr>
                                <th>글제목</th>
                                <th>작성일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>명일 강의는 교수님 개인사정으로 인한 휴강입니다.</td>
                                <td>2023-10-24</td>
                            </tr>
                            <tr>
                                <td>수업시간에 대해 공지드립니다.</td>
                                <td>2023-10-10</td>
                            </tr>
                            <tr>
                                <td>이번 강의를 신청해주셔서 감사합니다.</td>
                                <td>2023-10-01</td>
                            </tr>	
                        </tbody>		
                    </table>
                </article>
                <article>
                    <div>
                        <h4>| <Link href="">강의자료</Link></h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>글제목</th>
                                    <th>작성일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10월 22일 강의자료</td>
                                    <td>2023-10-20</td>
                                </tr>
                                <tr>
                                    <td>10월 21일 강의자료</td>
                                    <td>2023-10-19</td>
                                </tr>
                                <tr>
                                    <td>10월 20일 강의자료</td>
                                    <td>2023-10-18</td>
                                </tr>	
                            </tbody>		
                        </table>
                    </div>
                    <div>
                        <h4>| <Link href="">질문게시판</Link></h4>
                        <table >
                            <thead>
                                <tr>
                                    <th>글제목</th>
                                    <th>작성일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>어제 강의에 대해 질문드립니다</td>
                                    <td>2023-10-23</td>
                                </tr>
                                <tr>
                                    <td>쪽지시험 정말 매달 보나요..?</td>
                                    <td>2023-10-20</td>
                                </tr>
                                <tr>
                                    <td>자료제출관련 문의드립니다</td>
                                    <td>2023-10-02</td>
                                </tr>	
                            </tbody>		
                        </table>
                    </div>
                </article>  
            </div>
            <style jsx>{`
                h4 {
                    text-align: left;
                }
                .contents {
                    margin: 1rem;
                    width: 100%;
                }
                article:nth-child(2) {
                    display: flex;
                }
                article:nth-child(1) {
                    display: grid;
                    text-align: center;
                }
                div {
                    width: 100%;
                }
                div:nth-child(1) {
                    margin-right: 1rem;
                }
                div:nth-child(1) {
                    margin-right: 1rem;
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
        </>
    );
}