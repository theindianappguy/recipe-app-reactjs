import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessageAuth from '../../ErrorMessage/ErrorMessageAuth'
import { loginUser } from './../../../Api/auth.api';
export default function FormLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {currentUserError} = useSelector(state=>state.auth.login)
  const {register,handleSubmit,formState:{errors}} = useForm()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage]= useState('')
  useEffect(()=>{
    setErrorMessage(currentUserError)
  },[currentUserError,setErrorMessage])
  const handleClass = (name,baseClass = "form-control")=>`${baseClass} ${errors[name]?'is-invalid':''}`
  const onSubmit = (data)=>{
    loginUser(data,dispatch,navigate)
  }
  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <h3>Welcome to Soma Team</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            {...register("email",{required:{value:true,message:"You must enter email"},maxLength:{value:99,message:'email must shorter than 99'},minLength:{value:10,message:'email must longer than 10'},validate:{
              email: v=> /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'email is not valid'
            }})}
            type="email"
            onChange={e=>{
              setEmail(e.target.value)
            }}
            name="email"
            value={email}
            className={handleClass('email')}
            placeholder="Enter email"
          />
         <ErrorMessageAuth name="email" errors={errors}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
          {...register("password",{required:{value:true,message:"You must enter password"},minLength:{value:6,message:'Password must longer 6 character'},maxLength:{value:99,message:'Password must shorter 99 character'}})}
            type="password"
            name='password'
            value={password}
            onChange={e =>{
              setPassword(e.target.value)
            }}
            className={handleClass('password')}
            placeholder="Enter password"
          />
          <ErrorMessageAuth name="password" errors={errors}/>
        </div>
        {errorMessage && <div className='text-danger'>{errorMessage}</div> }
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#007074',}}>
            Login
          </button>
        </div>
        <p className="form-login-signup text-right">
          Don't have account <Link to="/register">Sign up?</Link>
        </p>
      </form>
  )
}
