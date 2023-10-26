import { lectureNavNo } from "@/recoil/lecture";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";


export default function LectureNav() {
    const { query } = useRouter();
    const clicknav = query.lecturenav;
    const [lecturenavno, setlecturenavno] = useRecoilState(lectureNavNo);
    const reset = useResetRecoilState(lectureNavNo);

    // reset 제대로 되는지 확인해보기

    useEffect(() => {
        console.log("...clicknav : "+clicknav);
        if(clicknav != undefined)setlecturenavno(clicknav);     
    },[clicknav]);

    return(
        <>
            <nav>
                <ul>
                    <Link href="/lecture"><li onClick={reset}>강의실 홈</li></Link>
                    <Link href="/lecture?lecturenav=1"><li>공지사항</li></Link>
                    <Link href="/lecture?lecturenav=2"><li>강의계획서</li></Link>
                    <Link href="/lecture?lecturenav=3"><li>강의자료</li></Link>
                    <Link href="/lecture?lecturenav=4"><li>과제게시판</li></Link>
                    <Link href="/lecture?lecturenav=5"><li>질문게시판</li></Link>
                    <Link href="/lecture?lecturenav=6"><li>쪽지시험</li></Link>
                </ul>
            </nav>
            <style jsx>{`
                nav {
                    width: 16rem;
                    text-align: left;
                }
                ul {
                    padding: 0.5rem;
                    margin: 0 1rem 0 1rem;
                    background-color: #e9e9e9;
                }
                li {
                    padding: 1.5rem 2rem 1.5rem 1rem;
                    margin: 0.4rem;
                    text-decoration: none;
                    color: #818181;
                    display: block;
                    border: 0.5px solid #bcbcbc;
                    border-radius: 0.2rem;
                    background-color: white;
                }
            `}</style>
        </>
    );
}