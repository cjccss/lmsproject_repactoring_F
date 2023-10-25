import { atom, selector } from "recoil";


export const subNo = atom({
    key: 'subNo',
    default: 0,
});

export const lectureNavNo = atom({
    key: 'lectureNavNo',
    default: 0,
});

export const lectureNavName = selector ({
    key: 'lectureNavName',
    get: ({ get }) => {
        const no = get(lectureNavNo);
        const lectureNav = ["공지사항","강의계획서","강의자료","과제게시판","질문게시판","쪽지시험"];
        return lectureNav[no-1];
    },
});