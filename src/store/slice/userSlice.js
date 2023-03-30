import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userData',
    initialState: {
        email:null,
        name: null,
        id:null,
        photoUrl:null,
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.photoUrl = action.payload.photoUrl;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.name = null;
            state.photoUrl = null;
        },
       
    },

}
)

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;