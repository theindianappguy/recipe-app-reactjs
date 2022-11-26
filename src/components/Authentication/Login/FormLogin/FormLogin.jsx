import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import ErrorMessageAuth from '../../ErrorMessage/ErrorMessageAuth'
export default function FormLogin() {
  const {register,handleSubmit,formState:{errors}} = useForm()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleClass = (name,baseClass = "form-control")=>`${baseClass} ${errors[name]?'is-invalid':''}`
  const onSubmit = (data)=>{
    console.log(data);
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

          

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" style={{backgroundColor:'#007074',}}>
            Login
          </button>
        </div>
        <p className="form-login-signup text-right">
          Don't have account <a href="#">Sign up?</a>
        </p>
      </form>
  )
}
