import SeoTitle from "@/components/common/seotitle";
import LectureMain from "@/components/lecture/main";
import LectureMaterial from "@/components/lecture/material";
import LectureNotice from "@/components/lecture/notice";
import LectureQnA from "@/components/lecture/qna";
import LectureQuiz from "@/components/lecture/quiz";
import Syllabus from "@/components/lecture/syllabus";
import LectureTask from "@/components/lecture/task";
import { lectureNavNo } from "@/recoil/lecture";
import { useRecoilValue } from "recoil";

export default function LectureHome() {
    const lecturenavno= useRecoilValue(lectureNavNo);
    const currlecturenav = [<LectureMain />,<LectureNotice />,<Syllabus />,
                            <LectureMaterial />,<LectureTask />,<LectureQnA />,
                            <LectureQuiz />];

    return(     
        <> 
            <SeoTitle title = "강의게시판" />
            <section>
                {/* 0:강의실 홈 1:공지사항 2:강의계획서 3:강의자료 4:과제게시판 5:질문게시판 6:쪽지시험 */}
                {currlecturenav[lecturenavno]}
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