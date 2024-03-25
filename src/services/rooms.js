import axiosInstance from "../axios";

export const listRooms = async (hotelId) => {
    try {
      const response = await axiosInstance.get(`/rooms/${hotelId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };
  