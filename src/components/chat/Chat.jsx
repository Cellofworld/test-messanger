import React from 'react'
import { useSelector } from 'react-redux'
import Input from '../input/Input'
import Messages from '../messeges/Messages';
import { useDispatch } from 'react-redux';
import { changeActivateChat } from '../../store/slice/activateChatSlice';
import arrowLeft from '../../img/icons/arrow_left.svg';


function Chat() {

const dispatch = useDispatch();
const selectUser = useSelector(state => state.chatData);
const selectedChat = useSelector(state => state.activateChat.activeChat);

function getBack() {
  dispatch(changeActivateChat(false))
}

  return (
    <div className={selectedChat ? 'chat-active' : 'chat'}>
      <div className="chat-info">
        <button
          className='back-button'
          onClick={getBack}
        >
          <img className='arrow-left' src={arrowLeft} alt='arrow' />
        </button>
        <div className='select-user-photo'>
          <img className='user-photo' src={selectUser.user?.photoURL} alt='userPhoto' />
        </div>
        <div className="select-user-name">{selectUser.user?.displayName}</div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat