import { boardaction } from "@/recoil/board";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useRecoilState } from "recoil";

export default function WriteForm() {
    const [write, setwrite] = useRecoilState(boardaction); // true면 글쓰기 open
    const [selected, setselected] = useState();
    const [price, setprice] = useState();
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    const modules = {
        toolbar: {
            container: [
                [{ 'size': ['small', false, 'large', 'huge'] }],
                ['image',
                'bold', 'italic', 'underline', 'strike',
                { 'align': [] },
                { 'color': [] }, { 'background': [] }],
            ],
        }
    }

    const addComma = (e) => {
        let num = e.target.value.replace(/,/g, "");
        if(isNaN(num)) {       
            return;
        }else{
            return setprice(num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }

    const onClick = () => {
        setwrite(false);

    }
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const onError = (errors) => {
        alert(errors.userid?.message+ "\n" +errors.pwd?.message);
        console.log("아이디 : "+errors.userid?.message+ "\n 비번 :  " +errors.pwd?.message)
        console.log(errors.pwd == undefined ? '' : errors.pwd.message);
        console.log(errors);
        // useform 유효성검사보다는 submit할때 내용이 있나 없나를 확인해서 alert 띄워줘야 될 것 같다.
        // 온보딩 write 파일 참고 
    }
    return(
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <div>
                    제목 <input type="text" maxLength={50}
                            {...register("title", {
                                required: "제목을 입력해주세요.",
                            })}
                        />
                </div>
                <div>
                    작성자 
                    <input type="checkbox" id="anony"/>
                    <label htmlFor="anony">익명</label>
                </div>
                <div>
                    분류 
                    <select onChange={(e) => setselected(e.target.value)} value={selected}>
                        <option value="판매">판매</option>
                        <option value="구매">구매</option>
                    </select>
                </div>
                <div>
                    가격 
                    <input type="text" onChange={addComma} value={price} 
                        className="inputPrice" maxLength={10}/>원
                </div>
            </div>
            <ReactQuill 
                modules={modules}
                style={{ height: '30rem' }}
                onChange={(e) => console.log(e)}
            />
            <button type="submit" onClick={onClick}>등록하기</button>
            <style jsx>{`
                form {
                    margin: 1rem 4rem 1rem 4rem;
                }
                div {
                    margin-bottom: 1rem;
                }
                input {
                    margin-left: 1rem;
                }
                select {
                    margin-left: 2rem;
                    padding: 0.3rem;
                }
                input[type=text] {
                    width: 66rem;
                    border: 1px solid #bcbcbc;
                    padding: 0.5rem;
                    margin-left: 1.6rem;
                }
                .inputPrice {
                    width: 10rem !important;
                    margin-right: 0.5rem;
                    margin-left: 2rem !important;
                    text-align: right;
                }
                label {
                    position: relative;
                    top: -0.1rem;
                }
                button {
                    margin-top: 4rem;
                    float: right;
                }
            `}</style>
        </form>
    );
}