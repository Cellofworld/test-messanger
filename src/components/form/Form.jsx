import React, { useState } from 'react';
import addImgAvatar from '../../img/icons/icons_img.svg';

function Form({title, hendleClick}) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState('');

    const titleText = title === 'login' ? 'Войти' : 'Зарегестрироваться'

  return (
    <div className={`${title}-form`}>
        <div className='form-title'>{titleText}</div>
        <input
            className='input-form input-name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder= 'User name'
            style = {title === 'login' ? {display: 'none'} : {display: 'block'}}
        />
        <input
            className='input-form input-email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
        />
        <input
            className='input-form input-password'
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Password'
        />
            <input 
                required style={{ display: "none" }} 
                type='file' 
                id='file' 
                onChange={(e) => setFile(e.target.files)} />
            <label
                style = {title === 'login' ? {display: 'none'} : {display: 'flex'}}
                className='label-add-avatar' htmlFor="file" >
                <img 
                    className='add-img-avatar'
                    src={addImgAvatar} 
                    alt="add-avatar-img" />
                <span className='add-img-description'>Загрузить аватар</span>
          </label>
        <button
            className='button-form'
            onClick={() => hendleClick( name, email, pass, file[0] )}
        >
            {title}
        </button>
    </div>
  )
}

export default Form