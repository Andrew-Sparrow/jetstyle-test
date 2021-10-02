import axios from 'axios';

const BACKEND_URL = 'https://jetstyle-api.herokuapp.com';
const REQUEST_TIMEOUT = 5000;

export const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

  const onSuccess = (response) => response;

  const onFail = () => {};

  axiosInstance.interceptors.response.use(onSuccess, onFail);

  return axiosInstance;
};
