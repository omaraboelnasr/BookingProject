import axiosInstance from "../axios";

export const userRegister = async (email, password) => {
    try {
        const response = await axiosInstance.post('/user/', { email, password })
        return response.data
    } catch (error) {
        throw error;
    }
}

export const userSignin = async (email, password) => {
    try {
        const response = await axiosInstance.post('/user/login', { email, password })
        return response.data
    } catch (error) {
        throw error;
    }
}

export const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await axiosInstance.get(`/user/profile/`, {
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
        const response = await axiosInstance.patch(`/user/${userId}`, updatedData, {
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
        const response = await axiosInstance.delete(`/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
