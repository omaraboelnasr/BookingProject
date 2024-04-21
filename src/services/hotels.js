import axiosInstance from "../axios";

export const getAllHotels = async (city,hotelRating,hotelTypes) => {
    try {
      const response = await axiosInstance.get(`/hotels`,{params:{city,hotelRating,hotelTypes}});
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getHotel = async (hotelId) => {
    try {
      const response = await axiosInstance.get(`/hotels/${hotelId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };