import axios from 'axios';
import { axiosInstance } from '.';

// Add an experience
export const AddExperience = async (experience) => {
    try {
        const response = await axiosInstance.post('/api/experience/add-experience', experience);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Get all experiences
export const GetExperiences = async () => {
    try {
        const response = await axios.get(`/api/experiences/get-experiences`);
        console.log(response.data.data);
        return response;
    } catch (error) {
        return error.response.data;
    }
}

// Get an experience
export const GetExperience = async (experienceId) => {
    try {
        const response = await axiosInstance.get(`/api/experience/get-experience/${experienceId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Update an experience
export const UpdateExperience = async (experience) => {
    try {
        const response = await axiosInstance.put('/api/experience/update-experience', experience);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Delete an experience
export const DeleteExperience = async (experienceId) => {
    try {
        const response = await axiosInstance.delete(`/api/experience/delete-experience/${experienceId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}