import React from 'react'
import FormRegister from './FormRegister/FormRegister'
import "./register.scss"
export default function Register() {
  return (
    <div className='register'>
        <div className="register-image">
              <img src="https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2021/12/banh-trang-cuon-thit-heo.jpg" alt="photo" />
            </div>
        <div className="register-wrapper">
            <FormRegister/>
        </div>
    </div>
  )
}
