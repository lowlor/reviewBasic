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
                               <Link to={curr.name === 'Add more' ? `/CreateReview`:`/${curr.name}`}>
                                   <div class="box">
                                       <div>
                                           <h2>{curr.name}</h2>
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