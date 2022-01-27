import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
    box-shadow: 0 0 4px black;

`

export const ToolBar = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 5px;
    background-color: #3c3c47;



`
export const Button = styled.div`
    border: 1px solid #a6a6a6;
    width: 35px;
    height: 35px;
    font-size: 20px;
    padding-top: 4px;
    text-align: center;
    color: #a6a6a6;
    cursor: pointer;

    margin-right: 3px;

    ${props => props.specialDecoration}

    :hover {
        color: white;
        border: 1px solid white;
    }

    ${props => props.active && css`
        color: white;
        border: 1px solid white;
    `}
`


// export const Wrapper = styled.div`
//     width: 45%;
//     border: 1px solid black;
//     border-radius: 15px;
//     margin-bottom: 15px;
//     overflow: hidden;
//     @media (max-width: 950px) {
//         width: 80%;
//     }
    
//     ${props => props.hover && css`
//         box-shadow: 0 0 5px black;
//         border: 1px solid #EE6C4D;
//     `}
// `    