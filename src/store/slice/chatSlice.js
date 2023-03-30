import { createSlice } from "@reduxjs/toolkit";



const chatSlice = createSlice({
    name: 'chatData',
    initialState: {
        chatId: 'null',
        user: {},
    },
    reducers: {
        changeUser(state, action) {
            state.user = action.payload.user;
            state.chatId =  action.payload.chatId;

        }
    }
})

export const { changeUser} = chatSlice.actions;
export default chatSlice.reducer;