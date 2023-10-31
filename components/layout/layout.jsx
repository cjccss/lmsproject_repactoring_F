import Header from "./header.jsx";
import Footer from "./footer.jsx";
import LectureNav from "./lecturenav.jsx";
import { usePathname } from "next/navigation.js";

export default function Layout({children}) {
    const path = usePathname();
    const lootpath = path.split('/')[1];
    const maindisplay = () => {
        if(lootpath == 'lecture'){
            return 'flex';
        }else{
            return 'block';
        }
    }

    return(
        <>
            <Header />
            <main>
                {lootpath == 'lecture'&&<LectureNav />}
                {children}
            </main>
            <Footer />
            <style jsx>{`
                main {
                    min-height: 40rem;
                    padding-top: 1rem;
                    display :${maindisplay()};
            `}</style>
        </>
    )
}