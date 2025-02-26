import styled from "styled-components";

export const Wrapper = styled.div`
    z-index: 2;
    width: 100%;
    background-color: darkgreen;
`;

export const Content = styled.div`
    z-index: 2;
    height: 40px;    
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    width:100%;
    max-width: var(--maxWidth); 
    button{
        border: 0;
        background-color: blanchedalmond;
        padding: 5px;
        border-radius: 10px;
        transition: .5s;
    }

    button:hover{
        background-color: black;
        color: white;
    }
`;