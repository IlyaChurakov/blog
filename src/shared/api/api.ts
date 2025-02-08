import axios from 'axios';
import { USER_LS_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: `Bearer ${localStorage.getItem(USER_LS_KEY)}`,
  },
});
