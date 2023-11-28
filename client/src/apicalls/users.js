
import axios from 'axios';

// Register user
export const RegisterUser = async (user) => {
    try {
        const response = await axios.post('/api/users/register', user,{
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Login user
export const LoginUser = async (user) => {
    try {
        const response = await axios.post('/api/users/login', user,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Get current user
export const GetCurrentUser = async () => {
    try {
        const response = await axios.get('/api/users/get-current-user',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Get all users
export const GetAllUsers = async () => {
    try {
        const response = await axios.get('/api/users/get-all-users',{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Update user
export const UpdateUser = async (user) => {
    try {
        const response = await axios.put('/api/users/update-user', user,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Update profile picture
export const UpdateProfilePicture = async (formData) => {
    try {
        const response = await axios.put('/api/users/profile-picture', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Delete a user from the database
export const DeleteUser = async (userId) => {
    try {
        const response = await axios.delete(`/api/users/delete-user/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};