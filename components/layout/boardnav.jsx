import Link from 'next/link';

export default function BoardNav() {
    return(
    <>
        <nav>
            <ul>
                <Link href="/board?categoryno=1"><li>자유게시판</li></Link>
                <Link href="/board?categoryno=2"><li>중고거래</li></Link>
                <Link href="/board?categoryno=3"><li>모집합니다</li></Link>
            </ul>
        </nav>
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
                padding: 0.5em 10em;
                color: black;              
            }
            @media(max-width: 1265px) {
                li {padding: 0.5em 8em;}
            }
            @media(max-width: 1059px) {
                li {padding: 0.5em 6em;}
            }
            @media(max-width: 850px) {
                li {padding: 0.5em 4em;}
            }
            @media(max-width: 640px) {
                li {padding: 0.5em 2em;}
            }
            @media(max-width: 640px) {
                li {font-size: 0.8em;}
            }
        `}</style>
    </>
    );
}