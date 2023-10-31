import SeoTitle from "@/components/common/seotitle";
import LectureNav from "@/components/layout/lecturenav";
import LectureBoard from "@/components/lecture/lectureboard";
import LectureMain from "@/components/lecture/main";
import LectureMaterial from "@/components/lecture/material";
import LectureNotice from "@/components/lecture/notice";
import LectureQnA from "@/components/lecture/qna";
import LectureQuiz from "@/components/lecture/quiz";
import Syllabus from "@/components/lecture/syllabus";
import LectureTask from "@/components/lecture/task";
import LectureWrite from "@/components/lecture/writeform";
import { lectureNavName, lectureNavNo, lectureaction } from "@/recoil/lecture";
import { level } from "@/recoil/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";



export default function LectureHome() {
    const { query } = useRouter();
    
    const [write, setwrite] = useRecoilState(lectureaction);
    const lecturenavno= useRecoilValue(lectureNavNo);
    const lecturenavname = useRecoilValue(lectureNavName);
    const levelno = useRecoilValue(level);

    const [lecutre, setlecture] = useState('');
    const currlecturenav = [<LectureMain />,<LectureNotice />,<Syllabus />,<LectureMaterial />,<LectureTask />,<LectureQnA />,<LectureQuiz />];
    // 메인화면에서 강의제목 클릭 -> subno 넘어옴

    useEffect(() => {
        // if(query.subno)setlecture(query.subno)
        if(query.subno)setlecture('컴퓨터공학개론')
    })  

    return(     
        <> 
            <SeoTitle title = "강의게시판" />

            <section>
                <h1>{lecutre}</h1>
                {/* 0:강의실 홈 1:공지사항 2:강의계획서 3:강의자료 4:과제게시판 5:질문게시판 6:쪽지시험 */}
                {/* <LectureNav /> */}
                {!write?currlecturenav[lecturenavno]:<LectureWrite />}
            </section>
            <style jsx>{`
                h1{
                    text-align: center;
                    margin-bottom: 4rem;
                }
                section {
                    display: block;
                    width: 100%;
                    margin: 0 2rem auto;
                }
            `}</style>
        </>
    );
}