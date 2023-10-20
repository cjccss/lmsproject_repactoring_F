import SeoTitle from "@/components/common/seotitle";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loginInfo } from "@/recoil/user";


export default function Login() {
    const exceptInput = ['e','E','-','.'];
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    const[loginFrm, setLoginFrm] = useRecoilState(loginInfo);

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit((e) => setLoginFrm(e))}>
            <SeoTitle title = "로그인" />
            <h1> 로그인 </h1>
            <div className="loginFrm">
                <input type="number" name="userid" className="form-control" 
                    placeholder="학번/교번" id="loginUserid"
                    onKeyDown={(e) => exceptInput.includes(e.key) && e.preventDefault()}
                    {...register("userid", {
                            required: "학번/교번을 입력해주세요.",
                            maxLength: {
                                value: 20,
                                message: "20자 이하로 입력해주세요.",
                            },
                    })}
                />
                <p>{errors.userid?.message}</p>
                <input type="password" name="pwd" className="form-control" 
                    placeholder="●●●●" id="loginPwd" maxLength="20" 
                    {...register("pwd", {
                            required: "비밀번호를 입력해주세요.",  
                    })}    
                />
                <p>{errors.pwd?.message}</p>
            </div>
            <div className="rememberId">
                <input type="checkbox" id="saveid" name="saveid"/>
                <label htmlFor="saveid">&nbsp;아이디저장</label>                       
                <span className="findAccount">
                    <Link href={'/user/finduser?type=id'}>아이디 찾기</Link>
                    /
                    <Link href={'/user/finduser?type=pwd'}>비밀번호 찾기</Link>
                </span>
            </div>
            <button type="submit">로그인</button>
            <div className="regAccount">
                <Link href={'/user/registeruser'}>등록하기</Link>
            </div>
            <style jsx>{`
                form {
                    margin: 10%;
                    display: grid;
                    justify-items: center;
                }
                .loginFrm {
                    width: 40%;
                }
                h1 {
                    margin-bottom: 2rem;
                }
                input[type=number],
                input[type=password]  {
                    height:3rem;
                    width: 97.5%;
                    margin-top: 0.5rem;
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
                    width: 40%;
                    margin: 0.5rem 0 0.5rem 0;
                }
                .findAccount {
                    float: right;
                    cursor: pointer;
                }
                .regAccount {
                    cursor: pointer;
                    width: 40%;
                    text-align: end;
                }
                button {
                    background-color: #666;
                    color: white;
                    margin: 1vh 0;
                    border: none;
                    cursor: pointer;
                    height: 3.3rem;
                    width: 40%;
                }
                button:hover {
                    font-weight: bolder;
                }
                p {
                    margin: 0.5rem 0 0.5rem 0.5rem;
                    color: red;
                }
                @media(max-width: 640px) {
                    .loginFrm {width: 80%;}
                    .rememberId {width: 80%;}
                    .regAccount {width: 80%;}
                    button {width: 80%;}
                    label {top: 0px;}
                }
            `}</style>
        </form>
    );
}