import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: azure;
    width: 100%;
    padding: 10px 10px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .boxs{
        padding: 0 10px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
        grid-gap: 1rem;
    }

    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        background-color: aqua;
        border-radius: 15px;
        padding: 10px 0;
        text-decoration: none;
    }

    

    .reviewImg{
        width: 100px;
    }
`;