import axios from "axios";
import { registerError } from "../../Redux/auth.slice";
import { registerSuccess } from "../../Redux/auth.slice";
import { registerStart } from "../../Redux/auth.slice";
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
export const registerUser = async (user,dispatch,navigate)=>{
    dispatch(registerStart())
    try{
        const res = await axios.post("http://localhost:8000/auth/register",user);
        console.log(res);
        dispatch(registerSuccess())
        navigate("/login")
    }catch(err){
        if(err.response){
            dispatch(registerError(err.response.data))
            console.log(err);
        }
    }
}