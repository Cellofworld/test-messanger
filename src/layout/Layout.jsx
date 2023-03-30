import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

function Layout() {

  const selectChat = useSelector(state => state.activateChat.activeChat)


  return (
    <div className='main-pages'>
      <div className={selectChat ? 'navigation-menu-active' : 'navigation-menu'}>
      <Sidebar />
      </div>
      <Outlet />
    </div>
  )
}

export default Layout