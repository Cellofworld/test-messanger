import React from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Form from '../form/Form';
import { setUser } from '../../store/slice/userSlice';
import {getStorage} from 'firebase/storage';
import { dbf } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";


const auth = getAuth();

function SignUp() {
    
const storage = getStorage();
const dispatch = useDispatch();
const navigate = useNavigate();
const handleRegister = async (name, email, password, file) => {

const date = new Date().getTime();
const storageRef = ref(storage, `${name + date}`);

await createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                name: name,
                email: user.email,
                id: user.uid,
            }))
        })
        .catch(console.error)

await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                //updteProfile
                await updateProfile(auth.currentUser, {                
                  displayName: name,
                  photoURL: downloadURL,
                  
                });
                //add user in db
                await setDoc(doc(dbf, "users", auth.currentUser.uid), {
                  id: auth.currentUser.uid,
                  name,
                  email,
                  photoURL: downloadURL,
                });
    
                //create empty user chats on firestore
                await setDoc(doc(dbf, "userChats", auth.currentUser.uid), {});
               
                navigate('/login')

              } catch (err) {
                console.log(err);
              }
            });
          });
    
    
}

  return (
    <div className='login-page-form'>
        <Form
            title='register'
            hendleClick={handleRegister}
        />
    </div>
  )
}

export default SignUp