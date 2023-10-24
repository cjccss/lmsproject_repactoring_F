import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BoardNav from './boardnav';
import {useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {boardaction, categoryNo } from '@/recoil/board';
import { subNo } from '@/recoil/lecture';

export default function HeaderNav() {
    const path = usePathname();
    const categoryno = useRecoilValue(categoryNo);
    const reset = useResetRecoilState(categoryNo);
    const subno = useRecoilValue(subNo);
    const [write, setwrite] = useRecoilState(boardaction);
    
    return(
    <>
        <nav>
            <ul onClick={() => setwrite(false)}>
                <Link href="/"><li onClick={reset}>HOME</li></Link>
                <Link href="/board"><li className={categoryno == undefined&&'active'}>커뮤니티</li></Link>
                <Link href="/board?categoryno=4"><li className={categoryno == 4&&'active'}>공지사항</li></Link>
                <Link href="/board?categoryno=5"><li className={categoryno == 5&&'active'}>Q&A</li></Link>
            </ul>
        </nav>    
        {path === "/board" ? <BoardNav /> : ''}
        <style jsx>{`
            nav {
                border-bottom: solid 1px black;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #e9e9e9;
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
    </>
    );
}