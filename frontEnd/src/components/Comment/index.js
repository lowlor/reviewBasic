import React, { useState } from "react";
import { Wrapper,Content } from "./Comment.styles";
import axios from "axios";

const Comment = ({reviewId,setUpdate}) =>{
    const [username,setUsername] = useState('');
    const [commentText,SetCommentText] = useState('');

    const sendCommentBtn = async() =>{
        console.log(reviewId, username, commentText);
        
        try {
            const {data} = await axios.post(`http://localhost:5000/api/comment`,
                {
                    
                    reviewId:reviewId,
                    username:username,
                    info:commentText
                }
            )
            if(data.status){
                console.log('upload comment ok');
                setUpdate(true)
                //update review page
            }else{
                console.log('error upload');
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <Wrapper>
            <Content>
                <div class='upper'>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text"/>
                </div>
                <div class="bottom">
                    <textarea value={commentText} onChange={(e)=>SetCommentText(e.target.value)} cols={40} rows={4}>
                    </textarea>
                    <button onClick={()=>sendCommentBtn()}>Send</button>
                </div>
            </Content>
        </Wrapper>        
    )
}

export default Comment;