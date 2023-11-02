
export default function BoardQnA() {
    return(
        <>
            <h1>QnA</h1>
            <div>       
                <table>
                    <colgroup>
                        <col width="*" />
                        <col width="50%" />
                        <col width="*" />
                        <col width="*" />
                        <col width="*" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>안녕하세요</td>
                            <td>일길동</td>
                            <td>2023-10-13</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>배고파요</td>
                            <td>이길동</td>
                            <td>2023-10-13</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>잘가요</td>
                            <td>삼길동</td>
                            <td>2023-10-13</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                h1 {
                    margin-left: 2rem;
                }
                div {
                    margin: 2rem 2rem 1rem 2rem;
                }
                table {
                    width: 100%;
                    border-collapse: collapse
                }
                thead{
                    text-align:center;
                    border-bottom: 1px solid #bcbcbc;
                    background-color: #e9e9e9;
                }          
                th{
                    text-align:center;
                    padding: 0.3rem;
                    font-weight: normal;
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
                    padding: 0.5rem;
                    text-align: center;
                }
            `}</style>
        </>
    );
}