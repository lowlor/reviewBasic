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
    
    .nameInput{
        border-radius: 10px;
        border: 0;
        padding: 6px 10px;
    }

    .nameInput:focus{
        outline: none;
    }

    textarea{
        border: 0;
        border-radius: 20px;
        padding: 10px;

        &:focus{
            outline: none;
        }
    }

    .upper{
        width: 100%;
        display: flex;
        align-items: start;
        flex-direction: row;
    }

    .bottom{
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: space-between;
        flex-direction: row;

        button{
            padding: 7px 30px;
            border: 0;
            border-radius: 10px;
            background-color: beige;

        
            transition: .5s;

            &:hover{
                background-color: #000;
                color: #fff;
            }
        
        }
    }

`;