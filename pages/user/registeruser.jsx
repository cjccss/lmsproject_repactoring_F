import SeoTitle from "@/components/common/seotitle";
import RegisterUser from "@/components/user/registeruser";

export default function Login() {
    return(
        <>
            <SeoTitle title = "회원등록" />
            <RegisterUser />
            {/* 이메일인증
            등록완료 컴포넌트 나눠서 가능..?*/}
        </>
    );
}