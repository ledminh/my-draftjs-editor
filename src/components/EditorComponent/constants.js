export const Styles = Object.freeze({
    editorWrapperStyles: {
        backgroundColor: "#3c3c47",
        padding: "10px",
        
    },

    editorStyles: {
        padding: "10px",
        color: "black",
        backgroundColor: "white",
    
        maxHeight: (window.innerHeight - 100) + "px",
        minHeight: "400px",
        overflowY: "scroll"
    }
});

export const BUICButtonsData = [
    {
        command: "BOLD",
        text: "B",
        specialDecoration: "font-weight:bold;"
    },

    {
        command: "ITALIC",
        text: "I",
        specialDecoration: "font-style: italic;"
    },

    {
        command: "UNDERLINE",
        text: "U",
        specialDecoration: "text-decoration: underline;"
    },

    {
        command: "CODE",
        text: "<>",
        specialDecoration: "font-style:italic"
    }
]