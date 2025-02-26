import React from "react";
import { Wrapper } from "./star.styles";

const Star = ({rating,name})=>{
    return (
        <Wrapper>
            { name === 'Add more' ?
            (
                <></>
            )
            : rating >= 5 ?
            (
                <div class="star-container">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                </div>
            )
            : rating >= 4 ?
            (
                <div class="star-container">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </div>
            )
            : rating >= 3 ?
            (
                <div class="star-container">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            )    
            : rating >= 2 ?
            (
                <div class="star-container">
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            )
            : rating >= 1 ?
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

        </Wrapper>
    )
}


export default Star;