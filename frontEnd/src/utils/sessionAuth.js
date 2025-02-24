import axios from "axios";

axios.defaults.withCredentials = true;

export const reAuth = async ()=>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/auth');
        console.log(data);
        
        if(data.status){
            return{
                status: 1,
                info: data.info
            }
        }else{
            return{
                status: 0,
                info: 'no auth'
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export const logout = async()=>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/logout');

        if(data.status){
            return {
                status:1,
                info:'logout ok'
            }
        }else{
            return{
                status:0,
                info:'logout error'
            }
        }
    } catch (error) {
        console.error(error);
    }
}