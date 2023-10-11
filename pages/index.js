import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from "next/link";
import BoardwithChart from "../components/home/boardwithchart";
import styled from "styled-components";
import SeoTitle from "../components/common/seotitle";
import AddToCalendar from "../components/home/addtocalendar";
import { useState } from "react";



const FullCalendarContainer = styled.div`
  .fc .fc-button {
    padding: 0.2em 0.2em;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 1.2em;
  }
`;

export default function Home() {
  const [isOpen, setisOpen] = useState(false);
  const isClose = (bool) => {
    setisOpen(bool);
  };

  const addToCalendar = () => {
    setisOpen((prev) => !prev)
  }
  return (
    <>
      <SeoTitle title = "홈" />
      {isOpen&&<AddToCalendar isClose={isClose}/>}
      <section className="contents">
        <article>
          <div>
            <FullCalendarContainer>
              <FullCalendar
                height={'65vh'}
                expandRows={true}
                aspectRatio={'1'}
                plugins={[ dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={addToCalendar}  
              />
            </FullCalendarContainer>
          </div>
          <div><Link href={'/user/login'}>로그인을 해주세요</Link></div>
          {/* 로그인했으면 해당일의 강의목록 표시(학생, 교수 둘다) */}
        </article>
        <article>
          <BoardwithChart />
        </article>
      </section>
      <style jsx>{`
        div {
          width: 50%;
        }
        div:nth-child(2) {
          border-left: 1px solid black;   
          margin-left: 2vw;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        article:nth-child(1) {
          display: flex;
          margin: 2vw;
        }
        article:nth-child(2) {
          display: grid;
          align-content: center;
          margin: 2vh 4vw 2vh 4vw;
        }
      `}</style>
    </>
  )
}
