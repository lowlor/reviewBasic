import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    padding: 20px 150px;
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    
    gap: 20px;

    .inputSec{
        background-color: blanchedalmond;
        padding: 10px 40px;
        border-radius: 10px;
    }


    input{
        border-radius: 20px;
        border: 0;
        padding: 5px 10px;

        &:focus{
            outline: none;
        }
    }

    textarea{
        border: 0;
        border-radius: 10px;
        padding: 5px 10px;
    
        &:focus{
            outline: none;
        }

    }
`;