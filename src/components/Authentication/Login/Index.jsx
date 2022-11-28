import React from 'react'
import FormLogin from './FormLogin/FormLogin'
import "./login.scss"
export default function Login() {
  return (
    <div className='login'>
      <div className="login-image">
          <img src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2021/12/banh-trang-cuon-thit-heo.jpg" alt="" />
      </div>
      <div className="login-wrapper">
          <FormLogin/>
      </div>
    </div>
  )
}
