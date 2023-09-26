

export default function ToggleSwitch() {

    return (
    <>
        <label>
            <input type="checkbox"/>
            <span></span>
        </label>
        <style jsx>{`
            label {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 20px;
                margin-left: 1100px;
            }
            label input {display:none;}
            span {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 34px;
            }    
            span:before {
                position: absolute;
                content: "";
                height: 17px;
                width: 16px;
                left: 4px;
                bottom: 2px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 50%;
            }
            input:checked + span {
                background-color: #29CC97;
            }
            input:focus + span {
                box-shadow: 0 0 1px #29CC97;
            } 
            input:checked + span:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            } 
        `}</style>
    </>
    );
}