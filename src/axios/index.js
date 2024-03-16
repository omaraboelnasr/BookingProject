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

export const getUserData = async () => {
  const token = localStorage.getItem('token')
  try {
    const response = await axiosInstance.get(`/profile/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserData = async (userId, updatedData) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axiosInstance.patch(`/${userId}`, updatedData , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserData = async (userId) => {
  try {
    const response = await axiosInstance.delete(`/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default axiosInstance;
