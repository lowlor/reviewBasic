import React from "react";
import Register from "./register";
import Login from "./login";

const AuthPage = ({setUpdate}) =>{
    
    return (
        <>
            <Login setUpdate = {setUpdate}/>
            <Register/>
        </>
    )
}

export default AuthPage;