import ToggleSwitch from "./toggleSwitch";
import { useState } from "react";

export default function BoardwithChart() {
    const [switchOn, setSwitchOn] = useState(false);
    const onCheck = (bool) => {
        setSwitchOn(bool);
    };
    return(
    <>
    {/* index.jsp의 go_boardDisplay() 참고 */}
        <ToggleSwitch onCheck={onCheck} />
        <div id="mainBoard">       
            <div id= "mainhead">       
                <h2>커뮤니티2</h2>
                <h3>실시간 인기글</h3><br/><br/>
            </div>
            <table id = "MainBoard">
                <colgroup>
                    <col width="*" />
                    <col width="*" />
                    <col width="50%" />
                    <col width="*" />
                    <col width="*" />
                </colgroup>
                <thead>
                    <tr id="menu">
                        <th>No.</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>추천수</th>
                    </tr>
                </thead>
                <tbody id="boardDisplay" >
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
            <div id="pageBar"></div>           
            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
        </div>
        <style jsx>{`
            div {
                text-align: center;
                width: 100%; 
            }
            table {
                width: 100%;
                border-bottom: 1px solid #F5F5F5;
                border-collapse: collapse
            }
            thead{
                text-align:center;
                border-bottom: 1px solid #bcbcbc;
                font-size: 12pt;
            }          
            th{
                text-align:center;
            }
            td {
                padding: 5px 0px 5px 0px;
                text-align: center;
                border-bottom:  solid 1px #F5F5F5;
            }
            td:nth-child(3) {
                text-align: left;
            }
        `}</style>
    </>
    );
}