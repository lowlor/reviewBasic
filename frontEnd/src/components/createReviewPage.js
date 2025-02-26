import React, { useEffect } from "react";
import CreateReview from "./CreateReview";
import UpBar from "./upBar";
import Header from "./header";
import { useNavigate } from "react-router-dom";
const NewReview = ({setIsLogin, isLogin}) =>{
    const navigate = useNavigate();
    console.log('go to createReview');
    
    useEffect(()=>{
        if(!isLogin){
            navigate('/')
        }
            
    },[isLogin])
    return(
        <>
            <UpBar setIsLogin={setIsLogin} isLogin={isLogin}/>
            <Header text={'Create Review'}/>
            <CreateReview/>
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        </>
    )
}

export default NewReview;