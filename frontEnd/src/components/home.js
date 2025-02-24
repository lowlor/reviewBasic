import React,{useState,useEffect} from "react";
import Header from "./header";
import Grid from "./grid";
import axios from "axios";
import { reAuth } from "../utils/sessionAuth";
import UpBar from "./upBar";

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
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        
        //const controller = new AbortController();
        //const signal = controller.signal;
    

        const auth = async()=>{
            return await reAuth();
        }
        const fetch = async() =>{
            try {
                const {data} = await axios.get('http://localhost:5000/api/review');        
                console.log(data);

                const checkAuth = await auth();
                console.log(checkAuth);
                if(checkAuth.status){
                    setIsLogin(true)
                    const dataToPut = {
                        status:1,
                        info:[...data.info, {name:'Add more'}]
                    };                                              
                    setDataState(dataToPut);
                }else{
                    const dataToPut = {
                        status:1,
                        info:[...data.info]
                        
                    };                                               
                    setDataState(dataToPut);
                }
            } catch (error) {
                console.error(error);
                
            }
        };
        
        fetch();
        
    },[isLogin])
    
    return (
    <>
        <UpBar setIsLogin={setIsLogin} isLogin={isLogin}/>
        <Header text={'Review Everything'}/>
        <Grid data={dataState}/>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </>
    )
}

export default Home;