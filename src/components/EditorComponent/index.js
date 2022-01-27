// import * as Styles from './styles';
// import * as Const from './constants';

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';


const EditorComponent = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());


    return (
        <Editor editorState={editorState} onChange={setEditorState} />
    )
}

export default EditorComponent;