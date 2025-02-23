import React from "react";
import { Wrapper, Content } from "./header.styles";

const Header = ({text}) =>(
    <Wrapper>
        <Content>
            <h1>{text}</h1>
        </Content>
    </Wrapper>
);

export default Header;