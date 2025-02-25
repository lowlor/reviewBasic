import React, { useEffect, useState } from "react";
import ReviewHeader from "./ReviewHeader";
import Review from "./Review";
import Header from "./header";
import UpBar from "./upBar";
import Comment from "./Comment";
import CommentDisplay from "./CommentDisplay";
import { data, useParams } from "react-router-dom";
import axios from "axios";

const initial = {
    name: 'not found',
    rating : 0,
    info: 'not found'
}

const ReviewPage = ({setIsLogin, isLogin}) =>{
    const [dataToPut,setData] = useState(initial);
    const [update,setUpdate] = useState(false);  

    const {reviewName} = useParams();  
    console.log(reviewName);
    
    useEffect(()=>{
        console.log(reviewName);
        
        const fetchData = async() =>{
            console.log(reviewName);
            
            try {
                const {data} = await axios.get(`http://localhost:5000/api/review/${reviewName}`);
                if(data.status){
                    console.log('load ok');
                    setData(data.info);
                    console.log(data);
                    
                }
            } catch (error) {
                
            }
        }        

        fetchData();
        setUpdate(false);
    },[reviewName,update]);

    return(
    <>
        <UpBar setIsLogin={setIsLogin} isLogin={isLogin}/>
        <Header text={'Review'}/>
        <Review data={dataToPut}/>
        <Comment reviewId={dataToPut.id} setUpdate={setUpdate}/>
        <CommentDisplay commentData={dataToPut.comment}/>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </>
    )
}

export default ReviewPage;