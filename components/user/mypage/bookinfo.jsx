import { useState } from "react";


export default function BookInfo() {
    //열람실 예약여부 가져오기 0:예약없음 1: 예약있음
    // 로그인할 때 user의 모든 정보를 recoil에 저장해서 쓰는 것도 괜찮을 것 같음.
    const [bookseat, setbookseat] = useState(0);
    
    // 입실여부 가져오기 0:입실 전 1: 입실완료
    const [seatcheckin, setseatcheckin] = useState(0);
    return(
        <p>
            <div>
                <h2>열람실 예약내역</h2>
                <button>열람실 예약하기</button>
            </div>
            <div>
                {bookseat == 0 ? 
                    <p>예약중인 좌석이 없습니다.</p> 
                : 
                    <>
                        <ul>
                            <li>날짜</li>
                            <li>시간</li>
                            <li>좌석</li>
                            <li>예약 확정</li>
                        </ul>
                        <ul>
                            <li>2023-11-06</li>
                            <li>12:00 ~ 14:00</li>
                            <li>중앙정보도서관 b관 1층 B32</li>
                            <li>{seatcheckin == 0 ? <span>입실하기</span> : "입실완료"}</li>
                        </ul>
                    </>
                }
            </div>
            <style jsx>{`
                p{
                    width: 100%;
                    margin-left: 2rem;
                    height: 8.8rem;
                }
                h2 {
                    border-left: 5px solid black;
                    padding-left: 1rem;
                }
                div {
                    display: flex;
                    justify-content: space-evenly;
                }
                div:nth-child(1) {
                    justify-content: space-between;
                    margin-right :2rem;
                }
                div:nth-child(2) {
                    border-top: 2px solid #bcbcbc;
                    border-bottom: 2px solid #bcbcbc;
                    padding: 1rem 0 1rem 0;
                }
                ul{
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 0;
                    text-align: center;
                    height: 9.75rem;
                }
                li{
                    margin-bottom: 1rem;
                }
                button {
                    border: 1px solid #3498DB;
                    border-radius: 0.5rem;
                    background-color: #3498DB;
                    cursor: pointer;
                    height: 2.3rem;
                    margin-top: 1rem;
                    color: white;
                }
                span {
                    border-radius: 0.5rem;
                    background-color: #e9e9e9;
                    padding: 0.3rem;
                    cursor: pointer;
                }
            `}</style>
        </p>
    );
}