import React, { useState } from "react";
import { Wrapper,Content } from "./login.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setUpdate}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loginBtn = async () =>{
        try {
            const {data} = await axios.post('http://localhost:5000/api/login',
                {
                    username: username,
                    password: password
                }
            );

            if(data.status){
                alert('complte login account')
                setUpdate(true);
                navigate('/');
            }else{
                return alert('erorr in login account')
            }
        } catch (error) {
            console.error(error);
            alert('error in create account')
        }
    }
    

    return (
        <Wrapper>
            <Content>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <button onClick={()=>loginBtn()}>Login</button>
            </Content>
        </Wrapper>
    )
}

export default Login;