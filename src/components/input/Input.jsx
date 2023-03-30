import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { dbf } from '../../firebase';
import { getStorage } from 'firebase/storage';
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import paperclip from '../../img/icons/paperclip.svg';
import messageIcon from '../../img/icons/message.svg';

function Input() {

  const storage = getStorage();
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const currentUser = useSelector(state => state.userData);
  const data = useSelector(state => state.chatData);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(dbf, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.id,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(dbf, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.id,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(dbf, "userChats", currentUser.id), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
      await updateDoc(doc(dbf, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
    }
    
    setText("");
    setImg(null);
  }


  return (
    <div className="input">
    <input
      className='message-input'
      type="text"
      placeholder="Type something..."
      onChange={(e) => setText(e.target.value)}
      value={text}
    />
    <div className="send">
      <input
        type="file"
        style={{ display: "none" }}
        id="file"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <label htmlFor="file">
      <img className='paperclipIcon' src={paperclip} alt="" />
      </label>
      <button 
        className='send-button'
        onClick={handleSend}
        >
        <img className='message-icon' src={messageIcon} alt='icon'/>
      </button>
    </div>
  </div>
  )
}

export default Input