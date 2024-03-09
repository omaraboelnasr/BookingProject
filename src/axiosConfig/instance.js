import axios from 'axios'


const axiosInstance=axios.create({
    baseURL:'http://localhost:3090'
})

export default axiosInstance