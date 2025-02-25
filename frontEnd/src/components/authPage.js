import React from "react";
import Login from "./login";

const AuthPage = ({setUpdate}) =>{
    
    return (
        <>
            <Login setUpdate = {setUpdate}/>
        </>
    )
}

export default AuthPage;