import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default function Layout({children}) {

    return(
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <style jsx>{`
                main {
                    min-height: 100vh;
                    padding-top: 10px;
                }
            `}</style>
        </>
    )
}