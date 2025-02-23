import React, { useState } from "react";
import { Wrapper,Content } from "./CreateReview.styles";
import axios from "axios";



const buttonPush = () =>{
}

const CreateReview = () =>{
    const [imgInput,setImgTnput] = useState(null);
    const [nameText,setNameText] = useState('');
    const [infoInput,setInfoInput] = useState('Enter here');
    const [numberInput, setNumberInput] = useState(0);
    const buttonPush = () =>{
        console.log(imgInput);
        console.log(nameText);
        console.log(infoInput);
        console.log(numberInput);
        

        const sendFile = async () =>{
            try {
                const {data} = await axios.post('http://localhost:5000/api/review',
                    {
                        name: nameText,
                        rating: numberInput,
                        info:  infoInput
                    }
                )

                console.log(data);
                
                if(data.status){
                    const {dataImg} = await axios.post(`http://localhost:5000/api/review/img/${data.info}`,{
                        
                    }) 
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return(
        <Wrapper>
            <Content>
                <input type="file" onChange={(e)=>setImgTnput(e.target.files[0])}/>
                <input type='text' value={nameText} onChange={(e)=>{setNameText(e.target.value)}}/>
                <input type="number" value={numberInput} onChange={(e)=>setNumberInput(e.target.value)} />
                <textarea cols='40' rows='5' value={infoInput} onChange={(e)=>{setInfoInput(e.target.value)}}>
                </textarea>
                <button onClick={()=>buttonPush()}>Send</button>
            </Content>
        </Wrapper>
    )
}

export default CreateReview;