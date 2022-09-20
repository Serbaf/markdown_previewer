import { useSelector } from "react-redux";
import { marked } from 'marked'
import { useEffect } from "react";

function HtmlDisplay() {
    const text = useSelector((state) => state.text.value);
    let htmlText = marked.parse(text.text, { breaks: true });

    useEffect(() => {
        document.getElementById("preview").innerHTML = htmlText;
    });

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="align-self-center">HTML Preview</h1>
            <div id="preview" className="h-100 w-100 border border-1 border-dark align-self-center text-start p-4"
                style={{ backgroundColor: "#DDDDDD" }}>
            </div >
        </div>
    )

}

export default HtmlDisplay;