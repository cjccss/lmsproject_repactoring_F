import Head from 'next/head';
import Image from 'next/image';
import SideNav from './sideinfo';
import HeaderNav from './headernav';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { isLogin } from '@/recoil/user';

export default function Header() {
    const [loginCheck, setloginCheck] = useRecoilState(isLogin);
    const path = usePathname();
    return(
        <>
            <Head>
                <title>쌍용대학교</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <header>
                    <div>
                        {loginCheck?
                            <Link href={'/'}><span>이길동 님</span></Link>
                        :
                            <Link href={'/user/login'}><span>로그인</span></Link>
                        }   
                        {path === "/" ? <SideNav /> : ''}
                    </div>
                    <span><Link href={'/'}><Image width={300} height={150} src="/images/logo.png" alt="쌍용대학교" style={{cursor: 'pointer'}}/></Link></span>
            </header>
            {path === "/" || path === "/user/signin" ? '' : <HeaderNav />}
            <style jsx>{`
                header {
                    height:220px;
                    border-bottom: solid 1px black;
                    padding-bottom: 1em;
                }
                header div {
                    height: 35px;
                    position: relative;
                    top: 4em;
                    margin-right: 3em;
                }
                div span{
                    float: right;
                    border : 0;
                    border-radius: 0.5em;
                    padding: 5px 10px 5px 10px; 
                    box-shadow: 4px 4px 4px;
                    background-color: #e9e9e9;
                }
                span{
                    display: flex;
                    justify-content: center;
                }
                @media(max-width: 640px) {
                    header div {top: 2em;margin-right: 2em;}
                }
            `}</style>
        </>
    );

}