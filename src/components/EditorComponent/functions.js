import { RichUtils } from 'draft-js';
import * as Styles from './styles';
import * as Const from './constants';

 
// Add styles
/**
 * @param {Node} element 
 * @param {Object} styles 
 */
const css = (element, styles) => {
    for(const prop in styles) {
        element.style[prop] = styles[prop]
    }
}

export const addStyles = (editorWrapperStyles, editorStyles) => {
    const wrapper = document.querySelector('.DraftEditor-root');
    const editor = document.querySelector('.DraftEditor-editorContainer');

    css(wrapper, editorWrapperStyles);
    css(editor, editorStyles);
}


// Add inlineStyles and Button
export const useInlineStyles = (onChange, editorState) => {
    const inlineStyle = editorState.getCurrentInlineStyle();
    
    // B, U, I, <> buttons
    const BUICButtons = Const.BUICButtonsData.map(iBD => (
                                                        <Styles.Button key={iBD.command + "-" + iBD.text}
                                                                        specialDecoration={iBD.specialDecoration}
                                                                        active={inlineStyle.has(iBD.command)} 
                                                                        onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, iBD.command))}>
                                                                            {iBD.text}
                                                        </Styles.Button>
                                                    ));
    

    return {
        BUICButtons
    }

}


// onSubmit
export const onSubmit = (htmlText) => {
    console.log(htmlText);
}
