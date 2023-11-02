import { categoryNo } from "@/recoil/board";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function BoardBtn() {
    const router = useRouter();
    const categoryno = useRecoilValue(categoryNo);
    return(
        <>
            {categoryno != 0&&
            <>
                <div>
                    <input type="text" />
                    <button><Image width={18} height={18} src="/images/search.png" alt="검색" /></button>
                    {categoryno == 4?'':<button onClick={() => router.push('/board/boardWrite')}>게시글 등록</button>}
                </div>
                <div className="filterSub">자동완성</div>
                <div style={{textAlign:"center",border:"1px solid black", width:"300px", margin:"0 auto"}}>페이지 바</div>
            </>
            }
            <style jsx>{`
                div {
                    margin-left: 2rem;
                    margin-right: 2rem;
                }
                input {
                    padding: 0.5rem;
                    border: 1px solid #bcbcbc;
                    border-radius: 0.5rem;
                }
                input:focus {
                    outline: 1px solid;
                }
                button:nth-child(2) {
                    border: 0;
                    background-color: #e9e9e9;
                    position: relative;
                    top: 0.3rem;
                    left: -2.71rem;
                    border-radius: 0 0.5rem 0.5rem 0;
                    padding-top: 0.25rem;
                    width: 2.575rem;
                    height: 2.11rem;
                    cursor: pointer;
                }
                button:nth-child(3) {
                    float: right;
                    padding: 0.6rem;
                    padding-top: 0.45rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}