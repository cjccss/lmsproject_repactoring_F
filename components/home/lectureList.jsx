import { useState } from "react";
import Link from 'next/link';


export default function LectureList() {
    const [subno, setsubno] = useState(1);

    return(
        <article>
            <h2>강의목록</h2>
            <ul>
                <Link href={`/lecture?subno=${subno}`}><li className="subject">컴퓨터공학개론</li></Link>
                <li className="subInfo">월 15:00 ~ 17:00 홍길동 교수님</li>
            </ul>
            <ul>
                <li className="subject">정보통신공학개론</li>
                <li className="subInfo">화 09:00 ~ 11:00 홍길동 교수님</li>
            </ul>
            <ul>
                <li className="subject">데이터구조</li>
                <li className="subInfo">수 13:00 ~ 15:00 홍길동 교수님</li>
            </ul>
            <ul>
                <li className="subject">리눅스 시스템</li>
                <li className="subInfo">목 15:00 ~ 17:00 홍길동 교수님</li>
            </ul>
            <ul>
                <li className="subject">리눅스 시스템</li>
                <li className="subInfo">금 15:00 ~ 17:00 홍길동 교수님</li>
            </ul>
        <style jsx>{`
            article {
                width: 100%;
                height: 90%;
                margin: 2rem;
                display: grid;
                justify-content: space-around;
            }
            ul {
                list-style: none;
                margin-left: 2rem;
                width: 100%;
            }
            .subject{
                font-size: 1.4rem;
                font-weight: bold;
                position: relative;
            }
            .subject::after{
                content: '';
                display: block;
                width: 0;
                height: 0.9rem;
                position: absolute;
                bottom: 0px;
                background: rgba(255, 219, 40, 0.295);
            }
            .subject:hover::after{
                width: 100%;
                transition: width .5s;
            }
            .subInfo{
                color: gray;
                text-align: end;
            }
        `}</style>
        </article>
    );
}