import React, { useState } from "react";
import { Wrapper,Content } from "./Comment.styles";
import axios from "axios";

const Comment = ({reviewId,setUpdate}) =>{
    const [username,setUsername] = useState('');
    const [commentText,setCommentText] = useState('');

    const sendCommentBtn = async() =>{
        console.log(reviewId, username, commentText);
        
        if(username === '' || commentText === ''){
            return alert('Fill all Text');
        }
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
                setUsername('');
                setCommentText('')
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
                    <input class="nameInput" placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)} type="text"/>
                </div>
                <div class="bottom">
                    <textarea placeholder="Enter your opinion" value={commentText} onChange={(e)=>setCommentText(e.target.value)} cols={70} rows={4}>
                    </textarea>
                    <button onClick={()=>sendCommentBtn()}>Send</button>
                </div>
            </Content>
        </Wrapper>        
    )
}

export default Comment;