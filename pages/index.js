import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import Link from "next/link";
import BoardwithChart from "../components/home/boardwithchart";

export default function Home() {

  return (
    <>
      <section className="contents">
        <article>
          <FullCalendar
            height={'65vh'}
            expandRows={true}
            aspectRatio={'1.1'}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
          />
        </article>
        <article>
          <Link href={'/'}>로그인을 해주세요</Link>
          {/* 로그인했으면 해당일의 강의목록 표시(학생, 교수 둘다) */}
        </article>
        <article>
        <BoardwithChart />
        </article>
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template-areas:
            "a b"
            "c c";
          margin-top: 5vh;
        }
        article:nth-child(1) {
          grid-area: a;
          padding-right:2vw;
          margin: 2vw;
          width: 80%;
          border-right: 1px solid black; 
        }
        article:nth-child(2) {
          grid-area: b;
          display: grid;
          align-content: center;
          margin: 2vw;
        }
        article:nth-child(3) {
          grid-area: c;
          margin: 2vw;
        }

      `}</style>
    </>
  )
}
