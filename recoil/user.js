import { atom } from "recoil";

export const loginInfo = atom({
    key: "loginInfo",
    default: [],
})

export const registerUser = atom({
    key: "registerUser",
    default: [],
})

export const isLogin = atom({
    key: "isLogin",
    default: true,
    // sql연동 후 default: false로 바꾸기
})

export const level = atom({
    key: "level",
    default: 2,
    //0:admin 1:professor 2:student
})