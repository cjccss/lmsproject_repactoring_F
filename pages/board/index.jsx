import BoardNav from "@/components/layout/boardnav";
import Board from "@/components/board/board";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
            <style jsx>{`
                h1 {
                    margin-left: 2em;
                }
            `}</style>
        </>
    );
}