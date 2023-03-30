

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import LoginPage from '../pages/loginPage/LoginPage'
import RegisterPage from '../pages/registerPage/RegisterPage'


function RouterApp() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element= {<Home />} />
        <Route path='home' element= {<Home />} />
        <Route path='login' element= {<LoginPage />} />
        <Route path='register' element= {<RegisterPage />} />
      </Route>
     </Routes>
    </>
  )
}

export default RouterApp