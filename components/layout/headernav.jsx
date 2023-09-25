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
            }
            li {
                text-align:center;
                width: 350px;
                color: black;
                border-right: solid 1px black;
                padding: 2px;
                float: left;
            }
            ul {
                
            }
        `}</style>
    </>
    );
}