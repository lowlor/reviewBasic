import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: bisque;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    padding: 10px 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap   : 20px ;
    flex-direction: column;
    
    .upper{
        width: 100%;
        display: flex;
        align-items: start;
        flex-direction: row;
    }

    .bottom{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 30px;
    }

`;