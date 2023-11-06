import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function EditMyInfo() {
    const router = useRouter();
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    return(
        <section>
            <h2>회원정보수정</h2>
            <hr/>
            <ul>
                <li>회원정보를 변경하는 화면입니다.</li>
                <li><sup>*</sup> 는 필수입력 항목입니다.</li>
            </ul>
            <form>
                <table>
                    <tr>
                        <td>성명</td>
                        <td><input value={"이길동"} readOnly/></td>
                    </tr>
                    <tr>
                        <td>학번</td>
                        <td><input value={"23421106"} readOnly/></td>
                    </tr>
                    <tr>
                        <td>단과대학</td>
                        <td><input value={"공과대학"} readOnly/></td>
                    </tr>
                    <tr>
                        <td>학과</td>
                        <td><input value={"컴퓨터공학과"} readOnly/></td>
                    </tr>
                    <tr>
                        <td>비밀번호 <sup>*</sup></td>
                        <td>
                            <input type="password" name="pwd"
                                {...register("pwd", {
                                    required: "학번/교번을 입력해주세요.",
                                    maxLength: {
                                        value: 20,
                                        message: "20자 이하로 입력해주세요.",
                                    },
                                })}
                            />
                            <span>{errors.pwd?.message}</span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>비밀번호 확인 <sup>*</sup></td>
                        <td>
                            <input type="password"/>
                            <span>{errors.pwd?.message}</span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>이메일 <sup>*</sup></td>
                        <td>
                            <input/>
                            <span>{errors.pwd?.message}</span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>연락처 <sup>*</sup></td> 
                        <td className="phonenum">
                            <span>010</span> - 
                            <input/> - 
                            <input />
                            <span>{errors.pwd?.message}</span>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>주소 <sup>*</sup></td>
                        <td>
                            <input/> 
                            <button>주소찾기</button>
                            <span>{errors.pwd?.message}</span>
                        </td>
                        
                    </tr>
                </table>
            </form>
            <div>
                <button type="submit">수정</button>
                <button onClick={() => router.push("/user/mypage")}>취소</button>
            </div>		
            <style jsx>{`
                section {
                    margin : 0 3rem auto;
                }
                h2 {
                    border-left: 5px solid black;
                    padding-left: 1rem;
                }
                hr {
                    border: 1px solid #bcbcbc;
                }
                ul {
                    background-color: #E5E5E5;
                    padding-top: 15px;
                    padding-bottom: 10px;
                }
                form {
                    margin: 3rem 3rem 0 3rem;
                }
                sup {
                    color: red;
                }
                input {
                    border: none;
                    border-bottom: 1px solid black;
                    outline: none;
                    text-align: center;
                    padding-bottom: 0.5rem;
                }
                .phonenum input {
                    width: 4rem;
                    text-align: center;
                }
                table {
                    border-collapse: collapse
                }
                td:nth-child(1) {
                    font-weight: bold;
                }
                td {
                    padding-right: 5rem;
                    padding-bottom: 2rem;
                }
                button {
                    padding: 0.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    cursor: pointer;
                    margin-left: 1rem;
                }
                div {
                    text-align: center;
                }
            `}</style>
        </section>
    );
}