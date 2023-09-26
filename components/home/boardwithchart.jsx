import ToggleSwitch from "./toggleSwitch";

export default function BoardwithChart() {
    return(
    <>
    {/* index.jsp의 go_boardDisplay() 참고 */}
        <ToggleSwitch />
        <div id="mainBoard">       
            <div id= "mainhead">       
                <h2>커뮤니티2</h2>
                <h3>실시간 인기글</h3><br/><br/>
            </div>
            <table id = "MainBoard">
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
            }
            table {
                text-align: center;
            }
        `}</style>
    </>
    );
}