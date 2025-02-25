import React from "react";
import { Wrapper, Content, BackgroundImg } from "./header.styles";

const Header = ({text,image}) =>(
    
    <Wrapper>
        <BackgroundImg image={image}></BackgroundImg>
        <Content>
            <h1>{text}</h1>
        </Content>
    </Wrapper>
);

export default Header;