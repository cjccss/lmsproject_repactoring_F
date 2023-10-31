import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BoardNav from './boardnav';
import {useRecoilState, useResetRecoilState } from 'recoil';
import {boardaction, categoryNo } from '@/recoil/board';
import { lectureNavNo, lectureaction } from '@/recoil/lecture';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function HeaderNav() {
    const path = usePathname();
    const lootpath = path.split('/')[1];
    const { query } = useRouter();
    const clicknav = query.categoryno;

    const [categoryno, setcategoryno] = useRecoilState(categoryNo);
    const resetcategory = useResetRecoilState(categoryNo);
    const resetlecture = useResetRecoilState(lectureNavNo);
    const [writeB, setwriteB] = useRecoilState(boardaction);

    const [lecutre, setlecture] = useState('');

    const reset = () => {
        resetcategory();
        resetlecture();
    }
    const closeWrite = () => {
        setwriteB(false);
    }

    useEffect(() =>{
        if(clicknav != undefined)setcategoryno(clicknav);
    },[clicknav]);

    useEffect(() => {
        // if(query.subno)setlecture(query.subno)
        if(query.subno)setlecture('컴퓨터공학개론')
    })  
    return(
    <>
        <nav>
            <ul onClick={closeWrite}>
                <Link href="/"><li onClick={reset}>HOME</li></Link>
                <Link href="/board"><li className={path == "/board"&&!clicknav &&'active'}>커뮤니티</li></Link>
                <Link href="/board?categoryno=4"><li className={categoryno == 4&&'active'}>공지사항</li></Link>
                <Link href="/board?categoryno=5"><li className={categoryno == 5&&'active'}>Q&A</li></Link>
            </ul>
        </nav>    
        {lootpath == "board"&&<BoardNav />}
        {lootpath == "lecture"&&<h1>{lecutre}</h1>}
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
            h1{
                text-align: center;
                margin-top: 3rem;
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