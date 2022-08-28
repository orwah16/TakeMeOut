import apiClient from './client';
import { useDispatch,useSelector } from 'react-redux';



export const getUsers = async () => {
    try {
        const res = await apiClient.get('/users');
    } catch (error) {
        console.log('Error while getting users.',error.message)
        return[];
    }
}

export const getUserByEmail = async (email) => {
    try {
        console.log('email sent to backend: ',email);
        const res = await apiClient.get('/users/'+email);
        console.log('user_id returned from backend: ',res);
        return res;
    } catch (error) {
        console.log('Error while getting user.',error.message)
    }
}

export const addUser = async (first_name,last_name,email) => {
    try {
        console.log("add user = first name: ",first_name,last_name,email);
        const res = await apiClient.post('/users/',[first_name,last_name,email]);
        console.log(" add user query res: ",res);
    } catch (error) {
        console.log('Error while adding users.',error.message)
    }
}


export const addUserInterest = async (user_id,interest_name) => {
    try {
        console.log("newInterest in api: ",interest_name);
        console.log("user id in api: ",user_id)
        //const userID = await apiClient.get('/users/:email',[email]);
        const interestID = await apiClient.post('/interests/',[interest_name,user_id]);
        // console.log("successful result in api add user interest: ",res);
    } catch (error) {
        console.log('Error while adding users interest: ',error.message)
    }
}


export const getUserInterests = async (user_id) => {
    try {
        console.log("user id in api getUserInterests: ",user_id)
        const interests = await apiClient.get('/interests/'+user_id);
        console.log("successful result in api get user interests: ",interests.data);
        return interests.data;
    } catch (error) {
        console.log('Error while adding users interest: ',error.message)
    }
}

export const getFriends = async (user_id) => {
    try{
        console.log("user id in api getFriends: ",user_id)
        const friends = await apiClient.get('/users/friends/'+user_id);
        console.log("successful result in api get user friends: ",friends.data);
        return friends.data;
    }catch(error){
        console.log('Error while getting friends ',error.message);
    }
}

export const addPost = async (props) => {
    try {
        console.log("new post in api: ",props.props);
        const user_id=props.props.user_id;
        const interest=props.props.interest;
        const location=props.props.location;
        const title=props.props.title;
        const desc=props.props.desc;

        console.log("poster user id: ",user_id);
        const postID = await apiClient.post('/users/post/',[user_id,interest,location,title,desc]);
        console.log("successful result in api add post: ",postID.data);
        return postID.data;
    } catch (error) {
        console.log('Error while adding post: ',error.message)
    }
}
export const addPostImage = async (post_id,imageURL) => {
    try {
        console.log("new post image in api: ",imageURL);
        //const userID = await apiClient.get('/users/:email',[email]);
        const interestID = await apiClient.put('/users/post/update/',[imageURL,post_id]);
        // console.log("successful result in api add user interest: ",res);
    } catch (error) {
        console.log('Error while adding image to post: ',error.message)
    }
}

export const getFriendsPosts = async (user_id) => {
    try{
        console.log("user id in api getFriendsPosts: ",user_id)
        const friendsPosts = await apiClient.get('/users/friends/posts/'+user_id);
        console.log("successful result in api get user friends: ",friendsPosts.data);
        return friendsPosts.data;
    }catch(error){
        console.log('Error while getting friends ',error.message);
    }
}