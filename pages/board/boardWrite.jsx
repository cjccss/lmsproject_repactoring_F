import { categoryNo } from "@/recoil/board";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useRecoilValue } from "recoil";

export default function BoardWrite() {
    const categoryno = useRecoilValue(categoryNo);
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

    const addComma = () => {
        let num = price?.replace(/,/g, "");
        if(isNaN(num)) {        
            return setprice(num?.toString().replace(/[^0-9]/g,""));
        }else{
            return setprice(num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }

    useEffect(() => {
        addComma();
    },[price])
    
    const onSubmit = (data) => {
        console.log("결과"+data);
    }

    const onError = (errors) => {
        alert(errors.userid?.message+ "\n" +errors.pwd?.message);
        console.log("아이디 : "+errors.userid?.message+ "\n 비번 :  " +errors.pwd?.message)
        console.log(errors.pwd == undefined ? '' : errors.pwd.message);
        console.log(errors);
        // useform 유효성검사보다는 submit할때 내용이 있나 없나를 확인해서 alert 띄워줘야 될 것 같다.
        // 온보딩 write 파일 참고 
    }

    // useEffect(() => {
    //      console.log("...글쓰기 컴포넌트 : "+categoryno);
        
    // })

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
                    작성자 <span>이길동</span>
                    {categoryno == 1 || categoryno == 5 ? 
                        <span>
                            <input type="checkbox" id="anony"/>
                            <label htmlFor="anony">익명</label>
                        </span>
                    :''}
                </div>
                {categoryno == 2 ?  
                    <>
                        <div>
                            분류 
                            <select onChange={(e) => setselected(e.target.value)} value={selected}>
                                <option value="판매">판매</option>
                                <option value="구매">구매</option>
                            </select>
                        </div>
                        <div>
                            가격 
                            <input type="text" onChange={(e) => setprice(e.target.value)} value={price} 
                                className="inputPrice" maxLength={10}/>원
                        </div>
                    </>
                :''}
            </div>
            <ReactQuill 
                modules={modules}
                style={{ height: '30rem' }}
                onChange={(e) => console.log(e)}
            />
            <button type="submit">등록하기</button>
            {/* 버튼 margin 수정하기 footer와 너무 붙어있음 */}
            <style jsx>{`
                form {
                    margin: 1rem 4rem 10rem 4rem;
                }
                div {
                    margin-bottom: 1rem;
                }
                span:nth-child(1) {
                    margin: 1rem;
                }
                input {
                    margin-left: 1rem;
                }
                select {
                    margin-left: 2rem;
                    padding: 0.3rem;
                }
                input[type=text] {
                    width: 60rem;
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
                span:nth-child(2) {
                    position: relative;
                    top: 0.15rem;
                }
                label {
                    position: relative;
                    top: -0.15rem;
                }
                button {
                    float: right;
                    padding: 0.6rem;
                    padding-top: 0.45rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    cursor: pointer;
                    margin-top: 4rem;
                }
                /* 모바일 대응css 추가하기 */
            `}</style>
        </form>
    );
}