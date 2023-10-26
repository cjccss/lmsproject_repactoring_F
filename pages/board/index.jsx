import Board from "@/components/board/board";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardaction, categoryName, categoryNo } from "@/recoil/board";
import SeoTitle from "@/components/common/seotitle";
import WriteForm from "@/components/board/writeform";

export default function BoardHome() {
    const categoryno = useRecoilValue(categoryNo);
    const category = useRecoilValue(categoryName);
    const [write, setwrite] = useRecoilState(boardaction);

    return(
        <>
            <SeoTitle title = {category == '인기게시물'?'커뮤니티':category} />
            <h1>
                {category}
            </h1>
            {!write?<Board />:<WriteForm />}
            {categoryno == 0||write?'':
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
                    margin-left: 2rem;
                }
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
                /* span {
                    float: right;
                    padding: 0.6rem;
                    padding-top: 0.45rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                } */
                .filterSub{
                    
                }
            `}</style>
        </>
    );
}