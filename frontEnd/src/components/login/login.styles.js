import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    
    width: 100%;
    height: 100%;
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .mainSec{
        background-color: bisque;
        padding: 40px;
        border-radius: 30px;
    }
    .loginSec,.regisSec{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    input{
        border: 0;
        border-radius: 10px;
        padding: 5px 10px;
        transition: 0.5s;

        &:focus{
            outline: none;
        }
    }

    .line{
        height: 2px;
        width: 100%;
        background-color: #fff;
        margin: 10px 0;
    }
    button{
        border: 0;
        border-radius: 20px;
        padding: 5px 15px;
        transition: .5s;
        background-color: darkkhaki;
        &:hover{
            background-color: #000;
            color: #fff;
        }
    }
`;