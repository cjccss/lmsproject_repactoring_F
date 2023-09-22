

export default function Footer() {
    return(
        <>
            <footer id="main_footer">
                <div>
                    <span>쌍용대학교Ssangyong</span>
                    <br/>
                    <span>UniversityCopyright 2021. Ssangyong University. All Rights Reserved.</span> 
                </div>	           
                <div>
                    서울특별시 마포구 월드컵북로 21 2층 풍성빌딩
                    <br/>
                    TEL 02-336-8546 /
                    <br/>
                    FAX 02-336-8546
                </div>
                <style jsx>{`
                    footer {
                        background-color:#F5F5F5;
                        margin-top:80px;
                        padding: 80px 10px 100px 50px;
                    }
                    div:nth-child(1){
                        float: left;
                        width: 50%;
                        padding:10px;
                    }
                    div:nth-child(2) {
                        font-size:12pt;
                        font-weight:bold;
                        align: left;
                        padding:10px;
                        text-align: right;
                    }
                    span:nth-child(1) {
                        font-size: 25pt; 
                        font-weight: bold;    
                    }
                    span:nth-child(2) {
                        color: #999999;
                    }
                `}</style>
            </footer>
        </>
    );
}