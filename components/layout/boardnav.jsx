import { boardaction, categoryNo } from '@/recoil/board';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function BoardNav() {
    const categoryno = useRecoilValue(categoryNo);
    const [write, setwrite] = useRecoilState(boardaction);
    return(
    <nav>
        <ul onClick={() => setwrite(false)}>
            <Link href="/board?categoryno=1"><li className={categoryno == 1&&'active'}>자유게시판</li></Link>
            <Link href="/board?categoryno=2"><li className={categoryno == 2&&'active'}>중고거래</li></Link>
            <Link href="/board?categoryno=3"><li className={categoryno == 3&&'active'}>모집합니다</li></Link>
        </ul>
        <style jsx>{`
            nav {
                border-bottom: solid 1px black;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            ul {
                margin: 0;
                list-style: none;
                display: flex;
            }
            li {
                padding: 0.5rem 10rem;
                color: black;              
            }
            .active {
                font-weight: bold;
            }
            @media(max-width: 1265px) {
                li {padding: 0.5rem 8rem;}
            }
            @media(max-width: 1059px) {
                li {padding: 0.5rem 6rem;}
            }
            @media(max-width: 850px) {
                li {padding: 0.5rem 4rem;}
            }
            @media(max-width: 640px) {
                li {padding: 0.5rem 2rem;}
            }
            @media(max-width: 640px) {
                li {font-size: 0.8rem;}
            }
        `}</style>
    </nav>
    );
}