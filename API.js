import apiClient from './client';
import './redux/reducers/user';
//const user = useSelector(selectUser);

const getUsers = async () => {
    try {
        const res = await apiClient.get('/users');
    } catch (error) {
        console.log('Error while getting users.',error.message)
        return[];
    }
}

const getUserByEmail = async () => {
    try {
        const res = await apiClient.get('/users/$1',[user.email]);
    } catch (error) {
        console.log('Error while getting user.',error.message)
        return[];
    }
}

export const addUser = async () => {
    try {
        const res = await apiClient.post('/users/',[user.fisrt_name,user.last_name,user.email]);
    } catch (error) {
        console.log('Error while adding users.',error.message)

    }
}
