import React from 'react';
import { Link } from 'react-router-dom';
import "./navigationBar.css"

function NavigationBar() {
  return (
    <div className='navigation-bar'>
        <Link className='navigation-link-item' to='/' >1</Link>
        <Link className='navigation-link-item' to='/acc-info'>2</Link>
        <Link className='navigation-link-item' to='/friends'>3</Link>
        <Link className='navigation-link-item' to='settings'>4</Link>
    </div>
  )
}

export default NavigationBar