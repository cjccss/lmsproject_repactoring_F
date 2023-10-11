import { useForm } from "react-hook-form";


export default function AddToCalendar({isClose}){   
    const exceptInput = ['e','E','-','.'];
    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm({mode: 'onBlur'});

    return(
        <div>
            <span onClick={() => isClose(false)}></span>
            <p>일정 추가</p>
            <form onSubmit={handleSubmit}>
                색상
                <select>
                    <option value="#9775FA"></option>
                    <option value="#F06595"></option>
                    <option value="#919191"></option>
                    <option value="#46E086"></option>
                    <option value="#3788D8"></option>
                </select>
                제목<input type="text" />
                기간(시작기간 선택한 날짜로)
                <input type="date" />&nbsp;~&nbsp;<input type="date" />
                메모(100글자제한)
                <input type="text" maxLength="100" />
                <button>추가</button>
            </form>

            <style jsx>{`
                div {
                    width: 30em;
                    height: 24em;
                    z-index: 999;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(0,0,0,0.8);
                    border: 1px solid black;
                    border-radius: 1em;
                    color:white;
                }
                p{
                    text-align: center;
                    border-bottom: 1px solid white;
                    padding-bottom: 1em;
                }
                span {
                    position: absolute;
                    right: 2em;
                    top: 1em;
                    cursor: pointer;
                }
                span:before, span:after {
                    position: absolute;
                    content: ' ';
                    height: 2em;
                    width: 0.1em;
                    background-color: white;
                }
                span:before {
                    transform: rotate(45deg);
                }
                span:after {
                    transform: rotate(-45deg);
                }
                form{
                    margin: 1em;
                    display: grid;
                }
                select {
                    width: 3em;
                }
                select option:nth-child(1) {
                    background-color: #9775FA;
                }
                select option:nth-child(2) {
                    background-color: #F06595;
                }
                select option:nth-child(3) {
                    background-color: #919191;
                }
                select option:nth-child(4) {
                    background-color: #46E086;
                }
                select option:nth-child(5) {
                    background-color: #3788D8;
                }
                input {
                    width: 20em;
                    margin-bottom: 0.5em;
                } 
                button {

                }
            `}</style>
        </div>
    );
}