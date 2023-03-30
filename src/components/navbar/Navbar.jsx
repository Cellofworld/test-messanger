import React from 'react';
import LogOut from '../layoutComponents/logOut/LogOut';
import { useSelector } from 'react-redux';

function Navbar() {

    const userData = useSelector(state => state.userData);


  return (
    <div className={userData.id === null ? 'navbar-d' : 'navbar'}>
        <div className="user-navbar">
            <img className='user-photo' src={userData.photoUrl} alt='userphoto' />
            <div className='user-name'>{userData.name}</div>
            <LogOut />
        </div>
    </div>
  )
}

export default Navbar