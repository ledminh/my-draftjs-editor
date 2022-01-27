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
    justify-content: space-between;
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
        background-color: #696969;
    }

    :active {
        color: #c7c7c7;
        border: 1px solid #c7c7c7;
    }

    ${props => props.active && css`
        color: white;
        border: 1px solid white;
    `}
`

export const BUICWrapper = styled.div`
    display: flex;
    padding-right: 5px;
    border-right: 4px double #a6a6a6;

`

export const SubmitButton = styled.div`
    border: 1px solid white;
    padding: 5px;
    padding-top: 6px;
    border-radius: 15px;
    background-color: #d9d9d9;
    font-weight: bold;

    cursor: pointer;

    :hover {
        background-color: #a8a8a8;
        color: #545454;
        border: 1px solid #a8a8a8;

    }

    :active {
        background-color: #bababa;
        color: #424242;
        border: 1px solid #bababa;
    }
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