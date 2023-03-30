import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/slice/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../form/Form';

function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    
    const handleLogin = (name, email, password) => {
        console.log(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    name: user.displayName,
                    photoUrl: user.photoURL
                    ,
                }))

                 navigate('/home')
            })
            .catch(console.error)
    }

  return (
    <div className='login-page-form'>

        <Form
            title='login'
            hendleClick= {handleLogin}
        />
        
    </div>
  )
}

export default Login