import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3090/user",
  headers: {
    "Content-Type": "application/json",
  }
});

export default axiosInstance;
