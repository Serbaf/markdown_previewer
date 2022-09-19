import { useSelector, useDispatch } from 'react-redux'
import { setText } from '../features/markdownSlice'

function MarkdownEditor() {
    const text = useSelector((state) => state.text.value)
    const dispatch = useDispatch();

    // console.log(setText);
    return (
        <div>
            <textarea id="editor" onChange={(event) => {
                dispatch(setText(event.target.value));
            }}></textarea>
        </div>
    )
}

export default MarkdownEditor;