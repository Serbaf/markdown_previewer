import { useSelector } from "react-redux";
import { marked } from 'marked'

function textToHtml(text) {
    text = text.replace("&lt;", "<");
    text = text.replace("&gt;", ">");
    return text;
}

function HtmlDisplay() {
    const text = useSelector((state) => state.text.value);

    let htmlText = textToHtml(marked.parse("# Yeah yeah"));
    return (
        <div>
            {htmlText}
        </div>
    )

}

export default HtmlDisplay;