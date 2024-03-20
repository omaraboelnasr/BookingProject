import axiosInstance from "../axios";

export const getAllHotels = async () => {
    try {
      const response = await axiosInstance.get(`/hotels`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getHotels = async (city) => {
    try {
      const response = await axiosInstance.get(`/hotels/${city}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };
  