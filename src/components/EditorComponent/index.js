import * as Styles from './styles';

import * as Const from './constants';
import * as Funcs from './functions';


import {Editor, EditorState, RichUtils} from 'draft-js';

import 'draft-js/dist/Draft.css';
import { useEffect, useState } from 'react';


const EditorComponent = ({editorWrapperStyles, editorStyles}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        let ewS = editorWrapperStyles? editorWrapperStyles : Const.Styles.editorWrapperStyles,
            eS = editorStyles? editorStyles : Const.Styles.editorStyles;

        Funcs.addStyles(ewS, eS);
    }, []);

    const onChange = (eS) => {
        setEditorState(eS)
    }

    const handleKeyCommand = (command) => {
        
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if(newState) {
            onChange(newState);

            return 'handled';
        }

        

        return 'not-handled';
    }
    
    const {InlineButtons} = Funcs.useInlineStyles(onChange, editorState);
    



    return (
        <Styles.Wrapper>
            <Editor editorState={editorState} 
                    onChange={onChange} 
                    handleKeyCommand={handleKeyCommand}
            />
            <Styles.ToolBar>
                {InlineButtons}
            </Styles.ToolBar>
        </Styles.Wrapper>
        
    )
}

export default EditorComponent;


