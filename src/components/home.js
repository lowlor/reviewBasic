import React,{useState,useEffect} from "react";
import Header from "./header";
import Grid from "./grid";
import axios from "axios";

const initial = {
    status:1,
    info:[{
        name:'newReview',
        rating:2,
        info:'not great bro. Dont buy it'
    }]
}
const Home = () =>{
    const [dataState, setDataState] = useState(initial)
    useEffect(()=>{
        
        //const controller = new AbortController();
        //const signal = controller.signal;
        const fetch = async() =>{
            try {
                const {data} = await axios.get('http://localhost:5000/api/review');        
                console.log(data);
                const dataToPut = {
                    status:1,
                    info:[...data.info, {name:'Add more'}]
                };                                          
                setDataState(dataToPut);
            } catch (error) {
                console.error(error);
                
            }
        };
        fetch();
            
        
    },[])
    
    return (
    <>
        <Header text={'Review Everything'}/>
        <Grid data={dataState}/>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </>
    )
}

export default Home;