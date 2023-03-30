import React, { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { dbf } from "../../firebase";

import { useSelector } from "react-redux";
import searchIcon from '../../img/icons/search.svg'


const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useSelector(state => state.userData);
  const activeChat = useSelector(state => state.activateChat.activeChat)

  const handleSearch = async () => {
    const q = query(
      collection(dbf, "users"),
      where("name", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.id > user.id
        ? currentUser.id + user.id
        : user.id + currentUser.id;
    try {
      const res = await getDoc(doc(dbf, "chats", combinedId));

console.log(res.exists())
console.log(user)
if(res.exists() === false) {
        //create a chat in chats collection
        await setDoc(doc(dbf, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(dbf, "userChats", currentUser.id), {
          [combinedId + ".userInfo"]: {
            uid: user.id,
            displayName: user.name,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(dbf, "userChats", user.id), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.id,
            displayName: currentUser.name,
            photoURL: currentUser.photoUrl,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });}
    } catch (error) {
        console.log(error)
    }
    setUser(null);
    setUsername("")
   
  };
  return (
    <div className={activeChat ? 'search' : 'search-active'}>
      <div className="searchForm">
        <img className="searchIcon" src={searchIcon} alt='searchIcon' />
        <input
        className="find-user-input"
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img className="user-photo" src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.name}</span>
          </div>
        </div>
      )}
    </div>
  );
}


export default Search