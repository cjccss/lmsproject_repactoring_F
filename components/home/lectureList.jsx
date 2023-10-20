

export default function LectureList() {

    return(
        <div>
            <h2>강의목록</h2>
            <ul>
                <li className="subject">컴퓨터공학개론</li>
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
            div {
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
            }
            .subInfo{
                color: gray;
                text-align: end;
            }
        `}</style>
        </div>
    );
}