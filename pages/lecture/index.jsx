import SeoTitle from "@/components/common/seotitle";
import LectureNav from "@/components/layout/lecturenav";
import LectureBoard from "@/components/lecture/lectureboard";
import LectureMain from "@/components/lecture/main";
import Syllabus from "@/components/lecture/syllabus";
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
        // if(query.subno)setlecture(query.subno)
        if(query.subno)setlecture('컴퓨터공학개론')
    })
    // const currlecturenav = [<LectureMain />,<LectureBoard />,<syllabus />,<LectureBoard />,'',<LectureBoard />,'']
    const currlecturenav = (lecturenavno) => {
        console.log(lecturenavno);
        switch (lecturenavno) {
            case 0:
                return <LectureMain />;
            case "1":
            case "3":
            case "5":
                return <LectureBoard />;
            case "2":
                return <Syllabus />;
            case "4":
            case "6":
                console.log("스위치 사,육!");
                return; 
        }
    }
    return(     
        <> 
            <SeoTitle title = "강의게시판" />
            <h1>{lecutre}&nbsp; 카테고리번호{lecturenavno}&nbsp; 레벨번호{levelno}</h1>
            <section>
                {/* 0:강의실 홈 1:공지사항 2:강의계획서 3:강의자료 4:과제게시판 5:질문게시판 6:쪽지시험 */}
                <LectureNav />
                {currlecturenav(lecturenavno)}
                
            </section>
            <style jsx>{`
                h1{
                    text-align: center;
                }
                section {
                    display: flex;
                }
            `}</style>
        </>
    );
}