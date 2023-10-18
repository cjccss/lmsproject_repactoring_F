import Board from "@/components/board/board";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardaction, categoryName, categoryNo } from "@/recoil/board";
import SeoTitle from "@/components/common/seotitle";
import Link from 'next/link';
import WriteForm from "@/components/board/writeform";

export default function BoardHome() {
    const { query } = useRouter();
    const [categoryno, setcategoryno] = useRecoilState(categoryNo);
    const category = useRecoilValue(categoryName);
    const [write, setwrite] = useRecoilState(boardaction);

    useEffect(() => {
        setcategoryno(query.categoryno);     
        // console.log("...게시판제목 "+category);
        // console.log("...게시판제목2 "+categoryno);
        
    })

    return(
        <>
            <SeoTitle title = {category == '인기게시물'?'커뮤니티':category} />
            <h1>
                {category}
            </h1>
            {!write?<Board />:<WriteForm />}
            {categoryno == undefined||write?'':
                <>
                    <div>
                        <input type="text" />
                        <button><Image width={18} height={18} src="/images/search.png" alt="검색" /></button>
                        {/* {categoryno == 4?'':<Link href={'/board/write'}><span>게시글 등록</span></Link>} */}
                        {categoryno == 4?'':<button onClick={()=>setwrite(true)}>게시글 등록</button>}
                    </div>
                    <div className="filterSub">자동완성</div>
                    <div style={{textAlign:"center",border:"1px solid black", width:"300px", margin:"0 auto"}}>페이지 바</div>
                </>
            }
            <style jsx>{`
                h1 {
                    margin-left: 2em;
                }
                div {
                    margin-left: 2em;
                    margin-right: 2em;
                }
                input {
                    padding: 0.5em;
                    border: 1px solid #bcbcbc;
                    border-radius: 0.5em;
                }
                input:focus {
                    outline: 1px solid;
                }
                button:nth-child(2) {
                    border: 0;
                    background-color: #e9e9e9;
                    position: relative;
                    top: 0.3em;
                    left: -2.71em;
                    border-radius: 0 0.5em 0.5em 0;
                    padding-top: 0.25em;
                    width: 2.575em;
                    height: 2.11em;
                    cursor: pointer;
                }
                button:nth-child(3) {
                    float: right;
                    padding: 0.6em;
                    padding-top: 0.45em;
                    border: none;
                    border-radius: 0.5em;
                    background-color: #e9e9e9;
                    cursor: pointer;
                }
                /* span {
                    float: right;
                    padding: 0.6em;
                    padding-top: 0.45em;
                    border: none;
                    border-radius: 0.5em;
                    background-color: #e9e9e9;
                } */
                .filterSub{
                    
                }
            `}</style>
        </>
    );
}