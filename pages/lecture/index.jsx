import SeoTitle from "@/components/common/seotitle";
import LectureNav from "@/components/layout/lecturenav";
import LectureBoard from "@/components/lecture/lectureboard";
import LectureMain from "@/components/lecture/main";
import { lectureNavName, lectureNavNo } from "@/recoil/lecture";
import { level } from "@/recoil/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";



export default function LectureHome() {
    const { query } = useRouter();
    const lecturenavno= useRecoilValue(lectureNavNo);
    const lecturenavname = useRecoilValue(lectureNavName);
    const levelno = useRecoilValue(level);
    const [lecutre, setlecture] = useState('');
    // 메인화면에서 강의제목 클릭 -> subno 넘어옴

    useEffect(() => {
        if(query.subno)setlecture(query.subno)
    })

    return(     
        <> 
            <SeoTitle title = "강의게시판" />
            <h1>강의제목{lecutre}</h1>
            <section>
                <LectureNav />
                {lecturenavno == 0?<LectureMain />:<LectureBoard />}
            </section>
            {/* 교수일 경우 강의계획서 제외 게시글 등록 가능  학생일 경우 질문게시판만 게시글 등록 가능 */}
            {/* 0:admin 1:professor 2:student */}
            {levelno == 2&&
                lecturenavno == 4?'':<button onClick={()=>setwrite(true)}>게시글 등록</button>}
            <style jsx>{`
                h1{
                    text-align: center;
                }
                section {
                    display: flex;
                }
                button {
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