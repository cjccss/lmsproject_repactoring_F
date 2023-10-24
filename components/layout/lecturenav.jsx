import Link from "next/link";


export default function LectureNav() {
    return(
        <>
            <nav>
                <ul>
                    <Link href="/lecture"><li>강의실 홈</li></Link>
                    <Link href=""><li>공지사항</li></Link>
                    <Link href=""><li>강의계획서</li></Link>
                    <Link href=""><li>강의자료</li></Link>
                    <Link href=""><li>과제게시판</li></Link>
                    <Link href=""><li>질문게시판</li></Link>
                    <Link href=""><li>쪽지시험</li></Link>
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