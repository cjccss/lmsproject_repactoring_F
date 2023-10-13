import {usePathname} from 'next/navigation';

export default function Board() {
    const path = usePathname();
    return(
    <>
        <div id="mainBoard">       
            <table id = "MainBoard">
                <colgroup>
                    <col width="*" />
                    {path == "/"&&<col width="*" />}
                    <col width="50%" />
                    <col width="*" />
                    <col width="*" />
                </colgroup>
                <thead>
                    <tr id="menu">
                        <th>No.</th>
                        {path == "/"&&<th>분류</th>}
                        <th>제목</th>
                        <th>추천수</th>
                        <th>작성자</th>
                        {path !== "/"&&<th>작성일자</th>}
                        {path !== "/"&&<th>조회수</th>}
                    </tr>
                </thead>
                <tbody id="boardDisplay" >
                    <tr>
                        <td>1</td>
                        {path == "/"&&<td>자유게시판</td>}
                        <td>안녕하세요</td>
                        <td>1</td>
                        <td>일길동</td>
                        {path !== "/"&&<td>2023-10-13</td>}
                        {path !== "/"&&<td>3</td>}
                    </tr>
                    <tr>
                        <td>1</td>
                        {path == "/"&&<td>중고거래</td>}
                        <td>배고파요</td>
                        <td>0</td>
                        <td>이길동</td>
                        {path !== "/"&&<td>2023-10-13</td>}
                        {path !== "/"&&<td>0</td>}
                    </tr>
                    <tr>
                        <td>1</td>
                        {path == "/"&&<td>모집합니다</td>}
                        <td>잘가요</td>
                        <td>3</td>
                        <td>삼길동</td>
                        {path !== "/"&&<td>2023-10-13</td>}
                        {path !== "/"&&<td>3</td>}
                    </tr>
                </tbody>
            </table>
        </div>
        <style jsx>{`
            div {
                margin: 2em;
            }
            table {
                width: 100%;
                border-collapse: collapse
            }
            thead{
                text-align:center;
                border-bottom: 1px solid #bcbcbc;
                font-size: 12pt;
                background-color: #e9e9e9;
            }          
            th{
                text-align:center;
                padding: 0.3em;
            }
            thead tr:first-child {
                border-bottom: 1px solid #bcbcbc;
            }
            tbody tr:last-child {
                border-bottom: 1px solid #bcbcbc;
            }
            tr {
                border-bottom:  solid 1px #F5F5F5;
            }
            td {
                padding: 0.5em;
                text-align: center;
            }
        `}</style>
    </>
    );
}