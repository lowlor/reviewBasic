import React from "react";
import { Content, Wrapper } from "./CommendDisplay.styles";

const CommentDisplay = ({commentData}) => {

    console.log(commentData);
    
    return (
        <Wrapper>
            <Content>
                {commentData ? commentData.map(curr=>(
                    <React.Fragment key={curr.id} >
                        <h2>{curr.username}</h2>
                        <p>{curr.info}</p> 
                    </React.Fragment>
                )): <></>}
            </Content>
        </Wrapper>
    )
}

export default CommentDisplay;