import apiClient from './client';

const getUsers = async () => {
    try {
        const res = await apiClient.get('/users')
    } catch (error) {
        return[];
        console.log('Error while getting users.',error.message)
    }
}