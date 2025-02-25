import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    background-color: #81f3cd;
`;

export const Content = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 0 0 15px 0;
    width: 100%;
    max-width: var(--maxWidth);
    height: 200px;
    
    h1{
        color: aliceblue;
        font-size: 4rem;
    }
`;

export const BackgroundImg = styled.div`
    background: url(${({image})=> image});
    background-size: cover;
    filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;