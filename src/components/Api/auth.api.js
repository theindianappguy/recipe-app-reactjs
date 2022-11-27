import axios from "axios";
import { registerError } from "../../Redux/auth.slice";
import { registerSuccess } from "../../Redux/auth.slice";
import { registerStart } from "../../Redux/auth.slice";
import { loginError, loginStart, loginSuccess } from "../../Redux/auth.slice";
export const loginUser = async (user,dispatch,navigate)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:3000/login",user);
        dispatch(loginSuccess(res.data))
        navigate("/")
    }
    catch(err){
        if(err.response){
            dispatch(loginError("Tai khoan hoac mat khau khong dung"))
        }
        
    }
}
export const registerUser = async (user,dispatch,navigate)=>{
    dispatch(registerStart())
    try{
        const res = await axios.post("http://localhost:3000/user",user);
        console.log(res);
        dispatch(registerSuccess())
        navigate("/login")
    }catch(err){
        if(err.response){
            dispatch(registerError("Tai khoan khong hop le"))
        }
    }
}