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
        getInterest: (state,action)=>{
            //state.intersts = action.payload;
            console.log("action payload: ",action.payload.interest);
            var array=[];
            array=action.payload.interest;
            //console.log("new interest : ",array.reverse()[0]);
            var interest_name=array.reverse()[0];
            console.log("new interest : ",interest_name);
           // state.interests += newInterest;//update interests
            
           console.log("email : ",state.value.email);
            addUserInterest(state.value.email,interest_name);//action.payload = added interest
        } 
    },
});
export const {login,logout,getInterest,updateId,updateName} = user.actions
export const selectUser = (state) => state.user.value;//changed to value since that is what changes
export default user.reducer;