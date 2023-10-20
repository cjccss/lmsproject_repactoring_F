import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isLogin } from '@/recoil/user';

export default function SideNav() {
    const [isOpen, setisOpen] = useState(false);
    const [loginCheck, setloginCheck] = useRecoilState(isLogin);

    return(
    <>
        <nav>
            <div onClick={() => setisOpen((prev) => !prev)}>
                <Image width={35} height={35} src="/images/close.png" alt="close"/>
            </div>
            {loginCheck?
                <ul>
                    <Link href=""><li>마이페이지</li></Link>
                    <Link href="/board?categoryno=4"><li>공지사항</li></Link>
                    <Link href="/board?categoryno=5"><li>Q&A</li></Link>
                    <Link href="/board"><li>커뮤니티</li></Link>
                    <Link href=""><li>열람실좌석예약</li></Link>
                </ul>
            :   
                <ul><Link href={'/user/login'}><li>로그인을 해주세요</li></Link></ul>
            }
        </nav>
        <div onClick={() =>setisOpen((prev) => !prev)}>
            <Image width={35} height={35} src="/images/addmenu.png" alt='메뉴열기' />
        </div>
        <style jsx>{`
            nav {
                height: 100%;
                width: ${isOpen ? "250px" : "0px"};
                position: fixed;
                top: 0;
                background-color: #111;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 30px;
                z-index:2; 
            }
            nav li {
                padding: 8px 25px 8px 0;
                text-decoration: none;
                font-size: 22px;
                color: #818181;
                display: block;
                transition: 0.3s;
                text-align: right;
            }
            nav li:hover {
                color: #f1f1f1;
            }
            nav div {
                padding-right: 30px;
                text-align: right;
            }
            div {
                margin-left: 3rem;
                width: 5%;
                cursor: pointer;
            }
            @media(max-width: 640px) {
                div {margin-left: 2rem;}
            }
        `}</style>
    </>
    );
}
