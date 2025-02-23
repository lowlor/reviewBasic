import styled from "styled-components";

export const GlobalStyles = styled.div`
    :root{
        --maxWidth: 1280px;
    }

    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;        
        h1,h2,h3,p{
            color: #000;
        }
        h1{
            font-size: 1.5rem;
            font-weight: 600;
        }

        h2{
            font-size: 1.2rem;
            font-weight: 600;
        }

        h3{
            font-size: 1rem;
            font-weight: 600;
        }

        p{
            font-size: 2rem;
        }
    }

    h1,h2,h3,h4,p{
        margin: 0;
        padding: 0;
    }


`;
