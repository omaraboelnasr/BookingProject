import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3090",
	headers: {
		"Content-Type": "application/json",
	},
});

const onResponseSuccess = (response) => {
	return response;
};

const onResponseFail = (error) => {
	// const status = error.status || error.response.status;
	// if (status === 403 || status === 401) {
	// 	localStorage.removeItem("token");
	// 	localStorage.removeItem("email");
	// 	localStorage.removeItem("userName");
	// 	localStorage.removeItem("userId");
	// 	localStorage.removeItem("owner");
	// 	window.location.href = "/login";
	// }
	// return Promise.reject(error);
};
axiosInstance.interceptors.response.use(onResponseSuccess, onResponseFail);

export default axiosInstance;
