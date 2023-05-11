import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const BACKEND_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER_NAME = 'x-token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  return api;
};
