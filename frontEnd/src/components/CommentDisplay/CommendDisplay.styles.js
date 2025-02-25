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
    
    .comment{
        padding: 10px;
        border-bottom : 1px solid black;
    }
`;