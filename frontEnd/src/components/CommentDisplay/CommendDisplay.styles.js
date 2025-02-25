import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    padding: 10px 200px;

    
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    
    gap: 10px;
    .comment{
        border-radius: 20px 20px 20px 0;
        background-color: darkseagreen;
        padding: 10px 60px 10px 10px;
        border-bottom : 1px solid black;
    }
`;