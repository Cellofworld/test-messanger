import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../components/signUp/SignUp';

function RegisterPage() {
  return (
    <div className='login-page'>
    <div className="log-reg-form">
      <div className='log-reg-page-title'>GrosChat</div>
      <SignUp />
      <div className='log-reg-page-link'>
        или 
        <Link
          className='link-register'
          to='/login'>
            Войти
        </Link>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage