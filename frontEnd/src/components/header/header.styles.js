import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: #81f3cd;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: var(--maxWidth);
    height: 200px;

    h1{
        font-size: 4rem;
    }
`;