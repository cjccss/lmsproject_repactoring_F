import SeoTitle from "@/components/common/seotitle";
import LectureMain from "@/components/lecture/main";
import { lectureNavName, lectureNavNo } from "@/recoil/lecture";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";



export default function LectureHome() {
    const { query } = useRouter();
    const clicknav = query.lecturenav;
    const [lecturenavno, setlecturenavno] = useRecoilState(lectureNavNo);
    const lecturenav = useRecoilValue(lectureNavName);
    const [lecutre, setlecture] = useState('');
    // 메인화면에서 강의제목 클릭 -> subno 넘어옴

    useEffect(() => {
        if(query.subno)setlecture(query.subno)
    })

    return(     
        <> 
            <SeoTitle title = "강의게시판" />
            <h1>강의제목{lecutre}&nbsp;{lecturenav}</h1>
            <LectureMain />
            <style jsx>{`
                h1{
                    text-align: center;
                }
            `}</style>
        </>
    );
}