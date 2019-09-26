import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization =  localStorage.getItem('Token') || '';

    return config;
});
export default axiosInstance;
