import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { dbf } from '../../firebase';
import { changeUser } from '../../store/slice/chatSlice';
import { useDispatch } from 'react-redux';
import { changeActivateChat } from '../../store/slice/activateChatSlice';

function Chats() {

  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.userData);
  const selectedChat = useSelector(state => state.activateChat.activeChat)
  console.log(selectedChat)


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(dbf, "userChats", currentUser.id), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.id && getChats();
  }, [currentUser.id]);

  console.log(chats)

  const handleSelect = (u) => {
   dispatch(changeUser(
             { 
              chatId: currentUser.id > u.uid ? currentUser.id + u.uid : u.uid + currentUser.id,
              user: u
            }
   ))
   dispatch(changeActivateChat(true))
  };

  return (
    <div className={selectedChat ? 'chats' : 'chats-active'}>
          {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img className='user-photo' src={chat[1].userInfo.photoURL} alt="userPhoto" />
          <div className="userChatInfo">
            <div className='user-chat-name'>{chat[1].userInfo.displayName}</div>
            <div className='user-chat-text'>{chat[1].lastMessage?.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats