import axios from 'axios';
import { axiosInstance } from '.';

// Add a project
export const AddProject = async (project) => {
    try {
        const response = await axiosInstance.post('/api/project/add-project', project);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Get all projects
export const GetProjects = async () => {
    try {
        const response = await axios.get(`/api/projects/get-projects`);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Get a project
export const GetProject = async (projectId) => {
    try {
        const response = await axiosInstance.get(`/api/project/get-project/${projectId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Update a project
export const UpdateProject = async (project) => {
    try {
        const response = await axiosInstance.put('/api/project/update-project', project);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Delete a project
export const DeleteProject = async (projectId) => {
    try {
        const response = await axiosInstance.delete(`/api/project/delete-project/${projectId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Add a skill to the project
export const AddSkill = async (skill) => {
    try {
        const response = await axiosInstance.post('/api/project/add-skill', skill);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Update a skill within the project
export const UpdateSkill = async (skill) => {
    try {
        const response = await axiosInstance.put('/api/project/update-skill', skill);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Attach a file to the project
export const AttachFile = async (file) => {
    try {
        const response = await axiosInstance.post('/api/project/attach-file', file);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Add Tech Stack
export const AddTechStack = async (techStack) => {
    try {
        const response = await axiosInstance.post('/api/project/add-tech-stack', techStack);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Get the tech stacks of a project
export const GetTechStacks = async (projectId) => {
    try {
        const response = await axios.get(`/api/project/get-tech-stacks/${projectId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Update the tech stacks of a project
export const UpdateTechStack = async (techStack) => {
    try {
        const response = await axiosInstance.put('/api/project/update-tech-stack', techStack);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

// Delete a tech stack from a project
export const DeleteTechStack = async (techStack) => {
    try {
        const response = await axiosInstance.delete('/api/project/delete-tech-stack', { data: techStack });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}