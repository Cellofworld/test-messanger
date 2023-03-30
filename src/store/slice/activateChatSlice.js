import { createSlice } from "@reduxjs/toolkit";

const activateChatSlice = createSlice({
    name: 'activateChatSlice',
    initialState: {
        activeChat: false
    },
    reducers: {
        changeActivateChat(state, action) {
            state.activeChat = action.payload

        }
    }
})

export const { changeActivateChat} = activateChatSlice.actions;
export default activateChatSlice.reducer;