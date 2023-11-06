import { level } from "@/recoil/user";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function UserInfo() {
    const router = useRouter();
    const levelno = useRecoilValue(level);

    return(
        <p>
            <div>
                <h2>나의 회원정보</h2>
                <button onClick={() => router.push("/user/editmyinfo")}>회원정보 수정</button>
            </div>
            <div>
                <Image src="/images/profile1.png" alt="프로필" width={130} height={140} />
                {levelno == 1 ? 
                    <ul>
                        <li>성명</li>
                        <li>학과</li>
                        <li>학번</li>
                        <li>이메일</li>
                    </ul>
                :
                    <ul>
                        <li>성명</li>
                        <li>소속학과</li>
                        <li>교번</li>
                        <li>이메일</li>
                    </ul>
                }
                <ul>
                    <li>이길동</li>
                    <li>컴퓨터공학과</li>
                    <li>23421106</li>
                    <li>lgd23@ssangyong.ac.kr</li>
                </ul>
            </div>
            <style jsx>{`
                p{
                    width: 100%;
                    margin-right: 2rem;
                }
                h2 {
                    border-left: 5px solid black;
                    padding-left: 1rem;
                }
                div {
                    display: flex;
                    justify-content: space-evenly;
                }
                div:nth-child(1) {
                    justify-content: space-between;
                    margin-right: 2rem;
                }
                div:nth-child(2) {
                    border-top: 2px solid #bcbcbc;
                    border-bottom: 2px solid #bcbcbc;
                    padding: 1rem 0 1rem 0;
                }
                ul{
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 0;
                    text-align: center;
                }
                li{
                    margin-bottom: 1rem;
                }
                button {
                    border: 1px solid #3498DB;
                    border-radius: 0.5rem;
                    background-color: #3498DB;
                    cursor: pointer;
                    height: 2.3rem;
                    margin-top: 1rem;
                    color: white;
                }
            `}</style>
        </p>
    );
}