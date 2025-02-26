import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: 100%;
    min-height: 1000px;
    max-width: var(--maxWidth);
    padding: 20px 100px;

    text-align: center;

    img{
        width: 150px;
    }

    @media screen and (max-width: 768px){
        padding: 20px 5px;
    }    
`;