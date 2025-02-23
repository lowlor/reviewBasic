import React from "react";
import CreateReview from "./CreateReview";

const NewReview = () =>{
    console.log('go to createReview');
    
    return(
        <>
            <CreateReview/>
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        </>
    )
}

export default NewReview;