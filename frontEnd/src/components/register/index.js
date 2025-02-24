import axios from "axios";
import React, { useState } from "react";
import { Wrapper,Content } from "./register.styles";

const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassord] = useState('');

    const registerBtn = async () =>{
        if(password !== repassword){
            return alert('please use same password at both');
        }
        try {
            const {data} = await axios.post('http://localhost:5000/api/register',
                {
                    username: username,
                    password: password
                }
            );

            if(data.status){
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
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
                <input value={repassword} onChange={(e)=>setRepassord(e.target.value)} type="password"/>
                <button onClick={()=>registerBtn()}>Register</button>
            </Content>
        </Wrapper>
    )
}

export default Register;