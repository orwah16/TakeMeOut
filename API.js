import apiClient from './client';
//import user from './redux/reducers/user';
//import user from './Index';
//const user = useSelector(selectUser);

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


export const addUserInterest = async (email,interest_name) => {
    try {
        console.log("newInterest in api: ",interest_name);
        console.log("email: ",email)
        const userID = await apiClient.get('/users/:email',[email]);
        console.log("userID: ",userID);
        const interestID = await apiClient.post('/interests/',[interest_name,user_id]);
        // console.log("successful result in api add user interest: ",res);
    } catch (error) {
        console.log('Error while adding users interest: ',error.message)
    }
}

