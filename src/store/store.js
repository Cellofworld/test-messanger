import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import chatReducer from './slice/chatSlice';
import activateChatReducer from './slice/activateChatSlice'

export default configureStore({
    reducer: {
        userData: userReducer,
        chatData: chatReducer,
        activateChat: activateChatReducer,
    }
})