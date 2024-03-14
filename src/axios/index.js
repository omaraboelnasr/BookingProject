import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3090/user",
  headers: {
    "Content-Type": "application/json",
  }
});
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (userId) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserData = async (userId, updatedData) => {
  try {
    const response = await axiosInstance.patch(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserData = async (userId) => {
  try {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default axiosInstance;
