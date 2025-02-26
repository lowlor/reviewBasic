import React, { useState } from "react";
import { Wrapper,Content } from "./CreateReview.styles";
import axios from "axios";



const buttonPush = () =>{
}

const CreateReview = () =>{
    const [imgInput,setImgTnput] = useState();
    const [nameText,setNameText] = useState('');
    const [infoInput,setInfoInput] = useState('Enter here');
    const [numberInput, setNumberInput] = useState(0);
    const buttonPush = () =>{
        console.log(imgInput);
        console.log(nameText);
        console.log(infoInput);
        console.log(numberInput);
        

        if(imgInput === ''||nameText === '' || infoInput === ''){
            return alert('Please enter all field');
        }
        //prepare img

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
                    //prepare img
                    const newFileName = `${data.info}.png`;
                    const img = new File([imgInput], newFileName,{type: imgInput.type})
                    
                    const formData = new FormData();
                    formData.append('file', img)

                    const dataImg = await axios.post(`http://localhost:5000/api/review/img/${data.info}`,
                                                        formData,{
                                                            headers: {
                                                                "Content-Type" : "multipart/form-data"
                                                            }
                                                        }
                                                    ) 
                    console.log(dataImg);

                    if(dataImg.data.status){
                        console.log('upload img ok');
                    }else{
                        console.error('have ploblem in upload img');
                        
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        sendFile();

        
    }

    return(
        <Wrapper>
            <Content>
                <p>Insert your picture you want to display</p>
                <div class='inputSec'>
                    <input type="file" onChange={(e)=>setImgTnput(e.target.files[0])}/>
                </div>
                <p>What is your product you want review</p>
                <div class='inputSec'>
                    <input type='text' value={nameText} onChange={(e)=>{setNameText(e.target.value)}}/>                    
                </div>
                <p>Give rating (0-5)</p>
                <div class='inputSec'>
                    <input type="number" value={numberInput} min='0' max='5' onChange={(e)=>setNumberInput(e.target.value)} />                
                </div>
                <p>What is your opinion</p>
                <div class='inputSec'>
                    <textarea cols='90' rows='30' value={infoInput} onChange={(e)=>{setInfoInput(e.target.value)}}>
                    </textarea>
                </div>
                <button onClick={()=>buttonPush()}>Send</button>
            </Content>
        </Wrapper>
    )
}

export default CreateReview;