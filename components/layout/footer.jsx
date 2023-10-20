

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
                        background-color:#e9e9e9;
                        margin-top:80px;
                        padding: 3rem 1rem 4rem 1rem;
                    }
                    div:nth-child(1){
                        float: left;
                        width: 50%;
                        padding:10px;
                    }
                    div:nth-child(2) {
                        font-size:1rem;
                        font-weight:bold;
                        align: left;
                        padding:10px;
                        text-align: right;
                    }
                    span:nth-child(1) {
                        font-size: 2.2rem; 
                        font-weight: bold;    
                    }
                    span:nth-child(2) {
                        color: #999999;
                    }
                    @media(max-width: 640px) {
                        footer {padding: 1rem 1rem 4.4rem 1rem;}
                        span:nth-child(1) {font-size: 2rem;  }
                        div:nth-child(2) {font-size:0.9rem;}
                    }
            `}</style>
        </>
    );
}