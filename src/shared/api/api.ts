import { USER_LS_KEY } from 'shared/const/localstorage';
import axios from 'axios';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: `Bearer ${localStorage.getItem(USER_LS_KEY)}`,
  },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem(USER_LS_KEY)}`;
  }
  return config;
});
