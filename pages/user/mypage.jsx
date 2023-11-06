import SeoTitle from "@/components/common/seotitle";
import BookInfo from "@/components/user/mypage/bookinfo";
import UserInfo from "@/components/user/mypage/userinfo";
import UserLectureInfo from "@/components/user/mypage/userlectureinfo";
import { level } from "@/recoil/user";
import { useRecoilValue } from "recoil";


export default function MyPage() {
    const levelno = useRecoilValue(level);

    return(
        <section>
            <SeoTitle title = "마이페이지" />
            <h1><span>이길동{levelno == 2? "(학생)" : "(교수)"}</span> 님의 마이페이지</h1>
            <hr/>
            <article>
                <UserInfo />
                <BookInfo />
            </article>
            <article>
                <UserLectureInfo />
            </article>
        <style jsx>{`
            section {
                margin : 0 3rem auto;
            }
            span {
                color:#3498DB;
            }
            hr {
                border: 1px solid #bcbcbc;
            }
            article:nth-child(3) {
                display: flex;
            }
        `}</style>
        </section>
    );
}