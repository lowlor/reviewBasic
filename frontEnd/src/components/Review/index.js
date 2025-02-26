import React, { useEffect } from "react";
import { Wrapper,Content } from "./Review.styles";
import { useParams } from "react-router-dom";
import Star from "../star";

const Review = ({data}) =>{    
    console.log(data);
    
    return(
        <Wrapper>
            <Content>
                <img src={data.img} alt="review-img"/>
                <Star rating={data.rating}/>
                <p>{data.info}</p>
            </Content>
        </Wrapper>
    )
}

export default Review;