import WriteForm from "@/components/board/writeform";
import SeoTitle from "@/components/common/seotitle";
import { categoryName } from "@/recoil/board";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Write() {
    const category = useRecoilState(categoryName);
     useEffect(() => {console.log(category)})
    
    return(
        <>
            <SeoTitle title = {category[0]} />
            <WriteForm />
            글쓰기!
        </>
    );
}