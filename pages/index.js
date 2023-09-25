import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <>
      <section className="contents">
        <article>
          달력
        </article>
        <article>
          <Link href={'/'}>로그인을 해주세요</Link>
        </article>
        <article>인기글</article>
      </section>
      <style jsx>{`
        section {
          display: grid;
          grid-template-areas:
            "a b"
            "c c";
        }
        article:nth-child(1) {
          background-color: bisque;
          grid-area: a;
          /*float: left; 
          width: 42%;
          height:600px; */
          padding:10px;
          margin-left: 4vw;
        }
        article:nth-child(2) {
          background-color: rgb(220, 255, 196);
          grid-area: b;
          border-left: 1px solid black; 
          /* float: left; 
          height:600px;
          width: 42%;  */
          padding: 10px;
          text-align: center;
        }
        article:nth-child(3) {
          background-color: rgb(207, 196, 255);
          grid-area: c;
        }
      `}</style>
    </>
  )
}
