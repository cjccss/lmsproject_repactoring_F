import { boardaction } from "@/recoil/board";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useRecoilState } from "recoil";

export default function WriteForm() {
    const [write, setwrite] = useRecoilState(boardaction);
    return(
        <div>
            <div></div>
            <ReactQuill />
            <button onClick={() => setwrite(false)}>등록하기</button>
            <style jsx>{`
                div {
                    margin: 1em;
                }
            `}</style>
        </div>
    );
}