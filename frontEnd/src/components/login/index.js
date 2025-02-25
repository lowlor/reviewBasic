import React, { useState } from "react";
import { Wrapper,Content } from "./login.styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({setUpdate}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [regisUsername, setRegisUsername] = useState('');
    const [regisPassword, setRegisPassword] = useState('');
    const [regisRepassword, setRegisRepassord] = useState('');

    const reset = () =>{
        setUsername('');
        setPassword('');
        setRegisUsername('');
        setRegisPassword('');
        setRegisRepassord('');
    }

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
                reset();
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
    
    const registerBtn = async () =>{
        if(regisPassword !== regisRepassword){
            return alert('please use same password at both');
        }
        try {
            const {data} = await axios.post('http://localhost:5000/api/register',
                {
                    username: regisUsername,
                    password: regisPassword
                }
            );

            if(data.status){
                reset();
                return alert('complte register account')
            }else{
                return alert('erorr in crete account')
            }
        } catch (error) {
            console.error(error);
            alert('error in create account')
        }
    }
    

    return (
        <Wrapper>
            <Content>
                <div class="mainSec">
                    <div class="loginSec">
                        <h1>Login</h1>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                        <button onClick={()=>loginBtn()}>Login</button>
                    </div>
                    <div class="line"></div>
                    <div class="regisSec">
                        <h1>Register</h1>
                        <input value={regisUsername} onChange={(e)=>setRegisUsername(e.target.value)} type="text" />
                        <input value={regisPassword} onChange={(e)=>setRegisPassword(e.target.value)} type="password"/>
                        <input value={regisRepassword} onChange={(e)=>setRegisRepassord(e.target.value)} type="password"/>
                        <button onClick={()=>registerBtn()}>Register</button>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Login;