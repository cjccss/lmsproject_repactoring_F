import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { registerUser } from "@/recoil/user";


export default function RegisterUser() {
    const exceptInput = ['e','E','-','.'];
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    const[loginFrm, setLoginFrm] = useRecoilState(registerUser);

    return(
        <form onSubmit={handleSubmit((e) => setLoginFrm(e))}>
            <h1> 등록하기 </h1>
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
                            required: "이름을 입력해주세요.",  
                    })}    
                />
                <p>{errors.name?.message}</p>
                이메일
                <input type="email" name="email" className="form-control" 
                    placeholder="example@ssangyong.ac.kr" id="loginEmail" maxLength="20" 
                    {...register("email", {
                            required: "이메일을 입력해주세요.",  
                    })}    
                />
                <p>{errors.email?.message}</p>
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
                    margin-bottom: 2em;
                }
                input[type=number],
                input[type=text],
                input[type=email]  {
                    height:3em;
                    width: 97.5%;
                    margin-top: 0.5em;
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
                    height: 3.3em;
                    width: 40%;
                }
                button:hover {
                    font-weight: bolder;
                }
                p {
                    margin: 0.5em 0 0.5em 0.5em;
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