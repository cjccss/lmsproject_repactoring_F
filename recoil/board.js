import { atom, selector } from "recoil";

export const categoryNo = atom({
    key: 'categoryNo',
    default: 0,
});

export const categoryName = selector ({
    key: 'categoryName',
    get: ({ get }) => {
        const no = get(categoryNo);
        const category = ["인기게시물","자유게시판","중고거래","모집합니다","공지사항","Q&A"];
        return no == undefined?category[0]:category[no];
    },
});


