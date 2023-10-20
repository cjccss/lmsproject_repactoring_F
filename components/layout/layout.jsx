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
                    min-height: 40rem;
                    padding-top: 2rem;
                }
            `}</style>
        </>
    )
}