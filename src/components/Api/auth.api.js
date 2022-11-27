import axios from "axios";
import { loginError, loginStart, loginSuccess } from "../../Redux/auth.slice";
export const loginUser = async (user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:8000/auth/login",user);
        dispatch(loginSuccess(res.data))
        navigate("/")
    }
    catch(err){
        if(err.response){
            dispatch(loginError(err.response.data))
        }
        
    }
}