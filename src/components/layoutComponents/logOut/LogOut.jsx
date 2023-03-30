import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../store/slice/userSlice';
import signOut from '../../../img/icons/signout.svg'

function LogOut() {

    const dispatch = useDispatch();

  return (
        <button
        className='sign-out-button'
            onClick={() => dispatch(removeUser())}
        >
          <img className='sign-out-img-button' src={signOut} alt='signout' />
        </button>
  )
}

export default LogOut