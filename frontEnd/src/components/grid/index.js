import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./grid.styles";
import noImage from "../../img/no-image.png";
import plusImg from "../../img/plus.png";

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
                                            { curr.name === 'Add more' ?
                                            (
                                                <></>
                                            )
                                            : curr.rating >= 5 ?
                                            (
                                                <div class="star-container">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                </div>
                                            )
                                            : curr.rating >= 4 ?
                                            (
                                                <div class="star-container">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            )
                                            : curr.rating >= 3 ?
                                            (
                                                <div class="star-container">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            )    
                                            : curr.rating >= 2 ?
                                            (
                                                <div class="star-container">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            )
                                            : curr.rating >= 1 ?
                                            (
                                                <div class="star-container">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            )
                                            : (
                                                <div class="star-container">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            )}
                                        </div>
                                   </div>  
                               </Link>
                           </>)
               }))
               : <></>}
            </div>
        </Content>
    </Wrapper>

            )
}

export default Grid;