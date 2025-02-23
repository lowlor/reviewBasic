import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: azure;
    width: 100%;
    padding: 100px 120px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;

    .boxs{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
        grid-gap: 2rem;
    }

    .box{
        background-color: aqua;
    }
`;