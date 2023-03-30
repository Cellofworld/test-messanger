import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function Message({message}) {

  const currentUser = useSelector(state => state.userData)
  const data = useSelector(state => state.chatData);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.id ? "my-message" : "owner-message"}`}
    >
      <div className="messageInfo">
        <img
        className='user-photo'
          src={
            message.senderId === currentUser.id
              ? currentUser.photoUrl
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        {/* <div className='down-message-container'>
        </div> */}
          {message.img && <img className='down-user-photo' src={message.img} alt="" />}
        <div className='message-text'>{message.text}</div>
      </div>
    </div>
  )
}

export default Message