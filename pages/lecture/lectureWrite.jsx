import AttachFile from "@/components/common/attachfile";
import { lectureNavNo } from "@/recoil/lecture";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";


export default function LectureWrite() {
    const lecturenavno= useRecoilValue(lectureNavNo);

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    const onSubmit = (data) => {
        console.log("결과"+data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    제목 <input type="text" maxLength={50}
                            {...register("title", {
                                required: "제목을 입력해주세요.",
                            })}
                        />
                </div>
                <div>
                    작성자 <span>이길동</span>
                    {lecturenavno == 5 && 
                        <span>
                            <input type="checkbox" id="anony"/>
                            <label htmlFor="anony">비밀글</label>
                        </span>
                    }
                </div>
                <AttachFile />
            </div>
            <textarea/>
            <button type="submit">등록하기</button>
            {/* 버튼 margin 수정하기 footer와 너무 붙어있음 */}
            <style jsx>{`
                form {
                    margin: 1rem;
                    width: 100%;
                }
                div {
                    margin-bottom: 1rem;
                    margin-left: 1rem;
                }
                span:nth-child(1) {
                    margin: 3rem;
                }
                input {
                    margin-left: 1rem;
                }
                input[type=text] {
                    width: 56.2rem;
                    border: 1px solid #bcbcbc;
                    padding: 0.5rem;
                    margin-left: 4rem;
                }
                span:nth-child(2) {
                    position: relative;
                    top: 0.15rem;
                }
                label {
                    position: relative;
                    top: -0.15rem;
                }
                textarea {
                    width: 91%;
                    height: 30rem;
                    resize: none;
                    border: 1px solid #bcbcbc;
                    margin-left: 2rem;
                    outline: none;
                }
                button {
                    float: right;
                    padding: 0.6rem;
                    padding-top: 0.45rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    cursor: pointer;
                    margin-top: 1rem;
                    margin-right: 4rem;
                }   
                /* 모바일 대응css 추가하기 */
            `}</style>
        </form>
    );
}