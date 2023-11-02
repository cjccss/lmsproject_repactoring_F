
export default function AttachFile() {
    return(
        <div>
            <input type="file" />
            <style jsx>{`
                div {
                    margin-bottom: 1rem;
                    margin-left: 1rem;
                }
                input[type=file]::file-selector-button {
                    width: 5.5rem;
                    background: #e9e9e9;
                    border: 0px solid #bcbcbc;
                    border-radius: 0.5rem;
                    padding: 0.4rem 0 0.4rem 0;
                    margin-right: 1rem;
                    cursor: pointer;
                    outline: none;
                }
            `}</style>
        </div>
    );
}