import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { registerUser } from "@/recoil/user";
import SeoTitle from "@/components/common/seotitle";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function FindUser() {
    const exceptInput = ['e','E','-','.'];
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});
    const[loginFrm, setLoginFrm] = useRecoilState(registerUser);
    const { query } = useRouter();
    const type = query.type;

    // 페이지 랜딩시 console.log 출력
    useEffect(() => {
        console.log("페이지 랜딩 : "+type);
    });

    // 이메일 인증 후 type=id 일 경우 id보여주는 컴포넌트 or 페이지로 이동 
    // 이메일 인증 후 type=pwd 일 경우 비밀번호 변경 컴포넌트 or 페이지로 이동
    return(
        <>
            <SeoTitle title = {type == 'id'?'아이디 찾기':'비밀번호 찾기'} />
            <form onSubmit={handleSubmit((e) => setLoginFrm(e))}>
                <h1> {type == 'id'?'아이디 찾기':'비밀번호 찾기'}</h1>
                <div className="loginFrm">
                    아이디
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
                    이름
                    <input type="text" name="name" className="form-control" 
                        placeholder="성명" id="loginName" maxLength="20" 
                        {...register("name", {
                                required: "이름 입력해주세요.",  
                        })}    
                    />
                    <p>{errors.pwd?.message}</p>
                    인증번호
                    <input type="number" name="authcode" className="form-control" 
                        id="authcode" maxLength="20" 
                        {...register("authcode", {
                                required: "인증번호를 입력해주세요.",  
                        })}    
                    />
                    <p>{errors.authcode?.message}</p>
                </div>
                <button type="submit">이메일 인증하기</button>
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
                    input[type=text],
                    input[type=email]  {
                        height:3rem;
                        width: 97.5%;
                        margin-top: 0.6rem;
                    }
                    input[type=number]::-webkit-outer-spin-button,
                    input[type=number]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type=checkbox] {
                        float: left;
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
        </>
    );
}