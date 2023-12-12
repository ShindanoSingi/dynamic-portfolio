import axios from 'axios';
import { axiosInstance } from '.';

// Add a new about to the user
export const AddAbout = async (about) => {
    try {
        const response = await axiosInstance.post('/api/about/add-about', about);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Get an about
export const GetAbout = async () => {
    try {
        const response = await axiosInstance.get(`/api/about/get-about`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Update an about
export const UpdateAbout = async (about) => {
    try {
        const response = await axiosInstance.put('/api/about/update-about', about);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Delete an about
export const DeleteAbout = async (userId) => {
    try {
        const response = await axiosInstance.delete(`/api/about/delete-about/${userId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}