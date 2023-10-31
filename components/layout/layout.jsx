import Header from "./header.jsx";
import Footer from "./footer.jsx";
import LectureNav from "./lecturenav.jsx";
import { usePathname } from "next/navigation.js";

export default function Layout({children}) {
    const path = usePathname();

    const maindisplay = () => {
        if(path == '/lecture'){
            return 'flex';
        }else{
            return 'block';
        }
    }

    return(
        <>
            <Header />
            <main>
                {path == '/lecture'&&<LectureNav />}
                {children}
            </main>
            <Footer />
            <style jsx>{`
                main {
                    min-height: 40rem;
                    padding-top: 2rem;
                    display :${maindisplay()};
            `}</style>
        </>
    )
}