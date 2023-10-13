import BoardNav from "@/components/layout/boardnav";
import Board from "@/components/board/board";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

export default function BoardHome() {
    const { query } = useRouter();
    const categoryno = query.categoryno;
    const category = ["인기게시물","자유게시판","중고거래","모집합니다","공지사항","Q&A"];
    // useEffect(() => {
    //     console.log(categoryno);
    // })
    return(
        <>
            <BoardNav />
            <h1>
                {categoryno == undefined?"인기게시물":category[categoryno]}
            </h1>
            <Board />
            <div>
                <input type="text" />
                <button><Image width={18} height={18} src="/images/search.png"/></button>
                <button>게시글 등록</button>
            </div>
            <div className="filterSub">자동완성</div>
            <div style={{textAlign:"center",border:"1px solid black", width:"300px", margin:"0 auto"}}>페이지 바</div>
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
                }
                button:nth-child(3) {
                    float: right;
                    padding: 0.6em;
                    padding-top: 0.45em;
                    border: none;
                    border-radius: 0.5em;
                    background-color: #e9e9e9;
                }
                .filterSub{
                    
                }
            `}</style>
        </>
    );
}