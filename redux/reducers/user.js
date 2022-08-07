import {createSlice} from '@reduxjs/toolkit'
import { addUserInterest } from '../../API';

export const user = createSlice({
    name:'user',
    initialState: {user:null,intersts:[]},
    reducers: {
        login: (state,action) => {//add getting the info from DB
            state.value = action.payload;
        },
        logout: (state) => {
            console.log("user logged out");
            state.value = null;
        },
        updateId: (state,action) => {
            console.log("adding user id to store");
            state.value.user_id = action.payload;
        },
        updateName: (state,action) => {
            console.log("adding user name to store");
            state.value = action.payload;
        },
        updateInterest: (state,action)=>{
            console.log("action payload: ",action.payload.interest);
            state.intersts=[...state.intersts, action.payload.interest];
        } 
    },
});
export const {login,logout,updateInterest,updateId,updateName} = user.actions
export const selectUser = (state) => state.user.value;//changed to value since that is what changes
export default user.reducer;