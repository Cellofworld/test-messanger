import React from 'react';
import ReactDOM from 'react-dom/client';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';
import { Provider } from 'react-redux';
import store from './store/store';
import "./firebase";
import '../src/mainStyle/main.css';
import './mainStyle/main.css';
import './mainStyle/login-register.css';
import './mainStyle/sideBar.css';
import './mainStyle/chats.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

        <BrowserRouter>
        <RouterApp />
        </BrowserRouter>

    </Provider>

  </React.StrictMode>
);

