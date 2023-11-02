import ToggleSwitch from "./toggleSwitch";
import { useState } from "react";
import Community from "../board/community";

export default function BoardwithChart() {
    const [switchOn, setSwitchOn] = useState(false);
    const onCheck = (bool) => {
        setSwitchOn(bool);
    };
    return(
    <>
    {/* index.jsp의 go_boardDisplay() 참고 */}
        <ToggleSwitch onCheck={onCheck} />
        <div id= "mainhead">       
            <h2>커뮤니티</h2>
            <h3>실시간 인기글</h3>
        </div>
        <Community />
        <style jsx>{`
            div {
                text-align: center;
                width: 100%; 
            }
        `}</style>
    </>
    );
}