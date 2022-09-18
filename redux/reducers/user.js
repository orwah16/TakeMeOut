import {createSlice} from '@reduxjs/toolkit'

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
        updateOneInterest: (state,action)=>{
            console.log("action payload updateInterest: ",action.payload.interest);
            state.intersts[0]=[...state.intersts[0], action.payload.interest];
        },
        reloadInterests: (state,action)=>{
            console.log("action payload updateInterest: ",action.payload.interest);
            state.intersts=[action.payload.interest];
        },
        loadFriends: (state,action)=>{
            try{
                console.log("action payload updateFriend: ",action.payload.friend);
                state.friends=[...state.friends, action.payload.friend];
            }catch(error){
                console.log("update friend error message: ",error.message);
            }
        },
        reloadFriends: (state,action)=>{
            try{
                console.log("action payload updateFriend: ",action.payload.friend);
                state.friends=[action.payload.friend];
            }catch(error){
                console.log("update friend error message: ",error.message);
            }
        },
        loadImage: (state,action)=>{
            console.log("action payload updateImage: ",action.payload.image);
            state.value = action.payload;
        },
        loadFeedValue: (state,action)=>{
            console.log("action payload updateFeed: ",action.payload.feed);
            state.feed = action.payload;
        },
        numberOfTaggedPosts: (state,action)=>{
            console.log("action payload number of tagged posts: ",action.payload.numberOfTaggedPosts);
            state.numberOfTaggedPosts = action.payload;
        },
        updateRefreshing: (state,action)=>{
            console.log("action payload updateFeed: ",action.payload.refresh);
            state.refresh = action.payload;
        },  
    },
});
export const {updateRefreshing,reloadFriends,login,logout,reloadInterests,updateInterest,updateId,updateName,updateOneInterest,updateFriend,loadFriends,loadImage,loadFeedValue,numberOfTaggedPosts} = user.actions
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