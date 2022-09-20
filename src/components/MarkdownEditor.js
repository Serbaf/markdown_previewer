import { useSelector, useDispatch } from 'react-redux'
import { setText } from '../features/markdownSlice'

function MarkdownEditor() {
    const dispatch = useDispatch();
    const initialText = useSelector((state) => state.text.value);

    return (
        <div className="d-flex flex-column justify-content-center">
            <h1>Markdown editor</h1>
            <textarea id="editor" className="w-100 align-self-center p-4" rows="30" placeholder="Your Markdown code here"
                onChange={(event) => {
                    dispatch(setText(event.target.value));
                }}>
                {initialText.text}
            </textarea>
        </div>
    )
}

export default MarkdownEditor;