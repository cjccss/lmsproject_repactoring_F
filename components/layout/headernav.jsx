import Link from 'next/link';

export default function HeaderNav() {
    return(
    <>
        <nav>
            <ul>
                <Link href="/"><li>HOME</li></Link>
                <Link href="/"><li>커뮤니티</li></Link>
                <Link href="/"><li>공지사항</li></Link>
                <Link href="/"><li>Q&A</li></Link>
            </ul>
        </nav>
        <style jsx>{`
            nav {
                border-bottom: solid 1px black;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: gainsboro;
            }
            ul {
                margin: 0;
                list-style: none;
                display: flex;
            }
            li {
                padding: 8px 50px;
                color: black;              
            }
        `}</style>
    </>
    );
}