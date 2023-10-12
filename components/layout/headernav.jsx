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