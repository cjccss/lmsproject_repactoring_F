

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
            </footer>
            <style jsx>{`
                    footer {
                        background-color:#F5F5F5;
                        margin-top:80px;
                        padding: 3em 1em 4em 1em;
                    }
                    div:nth-child(1){
                        float: left;
                        width: 50%;
                        padding:10px;
                    }
                    div:nth-child(2) {
                        font-size:1em;
                        font-weight:bold;
                        align: left;
                        padding:10px;
                        text-align: right;
                    }
                    span:nth-child(1) {
                        font-size: 2.2em; 
                        font-weight: bold;    
                    }
                    span:nth-child(2) {
                        color: #999999;
                    }
                    @media(max-width: 640px) {
                        footer {padding: 1em 1em 4.4em 1em;}
                        span:nth-child(1) {font-size: 2em;  }
                        div:nth-child(2) {font-size:0.9em;}
                    }
            `}</style>
        </>
    );
}