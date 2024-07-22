import { createSlice } from "@reduxjs/toolkit";
import { dummyUser } from "../assets";
const initialState = {
    user: JSON.parse(window?.localStorage.getItem('user')) ?? dummyUser,
    edit: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action){
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout(state){
            state.user = null;
            localStorage.removeItem('user');
        },
       
    }
})

export default userSlice.reducer;

export function Login(user){
    return(dispatch, getState) => {
        dispatch(userSlice.actions.login(user));
    }
}
export function Logout(){
    return(dispatch, getState) => {
        dispatch(userSlice.actions.logout());
    }
}

