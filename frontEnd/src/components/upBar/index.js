import React from "react";
import { Content, Wrapper } from "./UpBar.styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../../utils/sessionAuth";

const UpBar = ({setIsLogin, isLogin}) =>{

    const logoutBtn = async()=>{
        const checkLogout = await logout();
        if(checkLogout.status){
            alert('logout complete')
            setIsLogin(false)

        }else{
            alert('logout error')
        }
    }

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <button>
                        Home
                    </button>
                </Link>
                <Link to="/auth">
                    <button>
                        Login
                    </button>
                </Link>
                {isLogin ? (
                    <button onClick={()=>logoutBtn()}>Logout</button>
                ) : <></>}
            </Content>
        </Wrapper>
    )
}

export default UpBar;