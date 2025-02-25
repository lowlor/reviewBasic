import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./grid.styles";
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
                                                <img src={curr.img} alt='review-img'/>
                                            ) : <></>}
                                        </div>
                                        <div>
                                            <h2>{curr.name}</h2>
                                            <p>{curr.rating}</p>
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