import {createSlice} from '@reduxjs/toolkit'

export const user = createSlice({
    name:'user',
    initialState: {user:null,},
    reducers: {
        login: (state,action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            console.log("user logged out");
            state.value = null;
        }
    },
});
export const {login,logout} = user.actions
export const selectUser = (state) => state.user.value;//changed to value since that is what changes
export default user.reducer;


// const initialState = {
//     currentUser : null
// }
// export const user = (state = initialState,action) => {
//     return {
//         ...state,
//         currentUser: action.currentUser
//     }
// }