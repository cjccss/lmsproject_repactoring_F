import { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';

export default function SideNav() {
    const [isOpen, setisOpen] = useState(false);
    return(
    <>
        <nav>
            <div onClick={() =>setisOpen((prev) => !prev)}>
                <Image width={35} height={35} src="/images/close.png" alt="close"/>
            </div>
            {/* 로그인했으면 "이름" 표시 로그인 안했으면 "로그인을 해주세요"표시 */}
            <ul>
                <Link href=""><li>마이페이지</li></Link>
                <Link href=""><li>공지사항</li></Link>
                <Link href=""><li>Q&A</li></Link>
                <Link href=""><li>커뮤니티</li></Link>
                <Link href=""><li>열람실좌석예약</li></Link>
            </ul>
        </nav>
        <div onClick={() =>setisOpen((prev) => !prev)}>
            <Image width={35} height={35} src="/images/addmenu.png"/>
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
                font-size: 23px;
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
                margin-left: 3em;
            }
        `}</style>
    </>
    );
}
