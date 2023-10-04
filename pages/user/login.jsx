import SeoTitle from "@/components/common/seotitle";
import Link from "next/link";


export default function Login() {
    //input type=number e와 -입력 방지 노션에 만들어 놓은 것 참고
    return(
        <>
            <SeoTitle title = "로그인" />
            <div class="loginView">
                <h1> 로그인</h1>
                <br/>
                <div>
                    <input type="number" name="userid" class="form-control" 
                        placeholder="학번/교번" id="loginUserid" maxlength="20" />
                    <input type="password" name="pwd" class="form-control" 
                        placeholder="●●●●" id="loginPwd" maxlength="20" />
                </div>
                <input type="checkbox" id="saveid" name="saveid"/>
                <label htmlFor="saveid">&nbsp;아이디저장</label>
                <span>
                    <Link href={'/'}>아이디 찾기</Link>
                    <Link href={'/'}>비밀번호 찾기</Link>
                </span>
                <br/>	
                <button type="button" id="btnSubmit" class="loginSubmit">로그인</button>
                <span>
                    <Link href={'/'}>등록하기</Link>
                </span>
            </div>
            <style jsx>{`
                h1 {
                    font-weight: bold;
                }
                div {
                    text-align:center;
                    width: 600px;
                }
                div input {
                    height:50px;
                    width: 80%;
                    margin-top: 10px;
                    margin-left:60px;
                }
                span:nth-child(1){
                    margin-left:240px;
                    cursor: pointer;
                }
                span:nth-child(2){
                    margin-left:430px;
                    cursor: pointer;
                }
                button {
                    background-color: #666;
                    color: white;
                    padding: 14px 20px;
                    margin: 12px 0;
                    border: none;
                    cursor: pointer;
                    height:60px;
                    width:80%;
                }

            `}</style>
        </>
    );
}