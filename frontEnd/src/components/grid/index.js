import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./grid.styles";
import noImage from "../../img/no-image.png";
import plusImg from "../../img/plus.png";
import Star from "../star";

const Grid = ({data}) =>{
    console.log(data);
    
    return (
    <Wrapper>
        <Content>
            <div class="boxs">
               {data.status ? (data.info.map(curr=>{
                       return(
                           <>
                               <Link to={curr.name === 'Add more' ? `/CreateReview`:`/${curr.id}`}>
                                   <div class="box">
                                        <div>
                                            {curr.img ? (
                                                <img class='reviewImg' src={curr.img} alt='review-img'/>
                                            ) : curr.name === 'Add more'? <img class="reviewImg" src={plusImg} alt="review-img"/> : <img class='reviewImg' src={noImage} alt='review-img'/>}
                                        </div>
                                        <div>
                                            <h2>{curr.name}</h2>
                                            <Star rating={curr.rating} name={curr.name}/>
                                        </div>
                                   </div>  
                               </Link>
                           </>
                        )
               }))
               : <></>}
            </div>
        </Content>
    </Wrapper>

            )
}

export default Grid;