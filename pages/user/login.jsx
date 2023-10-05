import SeoTitle from "@/components/common/seotitle";
import Link from "next/link";


export default function Login() {
    //input type=number e와 -입력 방지 노션에 만들어 놓은 것 참고

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const userid = e.target.userid.value;
        // const pwd = e.target.pwd.value;
        // console.log(userid, pwd);
    }

    // input type=number에 e와 -입력되면 ''로 바꾸기
    

    return(
        <form onSubmit={handleSubmit}>
            <SeoTitle title = "로그인" />
            <h1> 로그인</h1>
            <div className="loginFrm">
                <input type="number" name="userid" className="form-control" 
                    placeholder="학번/교번" id="loginUserid" maxLength="20" />
                <input type="password" name="pwd" className="form-control" 
                    placeholder="●●●●" id="loginPwd" maxLength="20" />
            </div>
            <div className="rememberId">
                <input type="checkbox" id="saveid" name="saveid"/>
                <label htmlFor="saveid">&nbsp;아이디저장</label>                       
                <span className="findAccount">
                    <Link href={'/'}>아이디 찾기</Link>
                    /
                    <Link href={'/'}>비밀번호 찾기</Link>
                </span>
            </div>
            <button type="submit">로그인</button>
            <div className="regAccount">
                <Link href={'/'}>등록하기</Link>
            </div>
            <style jsx>{`
                form {
                    margin: 10% 10% 0 10%;
                    display: grid;
                    justify-items: center;
                }
                .loginFrm {
                    width: 40%;
                }
                h1 {
                    margin-bottom: 0;
                }
                input[type=number],
                input[type=password]  {
                    height:7vh;
                    width: 100%;
                    margin-top: 10px;
                }
                input[type=number]::-webkit-outer-spin-button,
                input[type=number]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type=checkbox] {
                    float: left;
                }
                label {
                    position: relative;
                    top: -1px;
                    float: left;
                }
                label:hover {
                    font-weight: bolder;
                }
                .rememberId {
                    width: 41%;
                    margin-top: 1vh;
                }
                .findAccount {
                    float: right;
                    cursor: pointer;
                }
                .regAccount {
                    cursor: pointer;
                    width: 41%;
                    text-align: end;
                }
                button {
                    background-color: #666;
                    color: white;
                    margin: 1vh 0;
                    border: none;
                    cursor: pointer;
                    height:8vh;
                    width:41%;
                }
                button:hover {
                    font-weight: bolder;
                }
            `}</style>
        </form>
    );
}