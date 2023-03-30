import React from 'react';
import { Navigate } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import Chats from '../../components/chats/Chats';
import Search from '../../components/search/Search';
import { useAuth } from '../../hooks/useAuth';


function Home() {
    const {isAuth, email, name} = useAuth();
    console.log(isAuth)
    console.log(email)
    console.log(name)
    
      return isAuth ? (
      
      <div className='home'>
        <div className="container">
        <Search />
        <Chats />
            <Chat />
        </div>
      </div>
      
      ) : (
          <Navigate to='/login' />
      )
}

export default Home