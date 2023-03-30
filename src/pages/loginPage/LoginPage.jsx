import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../../components/login/Login';


function LoginPage() {
  return (
    <div className='login-page'>
      <div className="log-reg-form">
        <div className='log-reg-page-title'>GrosChat</div>
        <Login />
        <div className='log-reg-page-link'>
          или 
          <Link
            className='link-register'
            to='/register'>
              Зарегестрироваться
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage