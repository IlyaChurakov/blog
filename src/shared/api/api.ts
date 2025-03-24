import { USER_LS_KEY } from '@/shared/const/localstorage';
import axios from 'axios';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: `Bearer ${localStorage.getItem(USER_LS_KEY)}`,
  },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    const token = localStorage.getItem(USER_LS_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
