import {createSlice} from '@reduxjs/toolkit'
import { addUserInterest } from '../../API';

export const user = createSlice({
    name:'user',
    initialState: {user:null,intersts:[],friends:[]},
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
            console.log("action payload updateInterest: ",action.payload.interest);
            state.intersts=[...state.intersts, action.payload.interest];
        },
        loadFriends: (state,action)=>{
            try{
                console.log("action payload updateFriend: ",action.payload.friend);
                state.friends=[...state.friends, action.payload.friend];
            }catch(error){
                console.log("update friend error message: ",error.message);
            }
        },
        loadImage: (state,action)=>{
            console.log("action payload updateFriend: ",action.payload.image);
            state.value = action.payload;
        } 
    },
});
export const {login,logout,updateInterest,updateId,updateName,updateFriend,loadFriends,loadImage} = user.actions
export const selectUser = (state) => state.user.value;//changed to value since that is what changes
export default user.reducer;



            // let Array=[];
            // let fucker;
            // let friends=Object.values(action.payload.friend);
            // console.log("friends in user before looping: ",friends);
            // let length=Object.values(action.payload.friend).length;
            // console.log("number of friends: ",length);
            // for(let i=0;i<length;i++){
            //     fucker=friends[i];
            //     console.log("new friend in updateFriend: ",fucker);
            //     Array.push(fucker);
            // }
            // console.log("friends added to state: ",Array);