import axios from "axios";
import { isOpen, modalState } from "../state";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  modalState.value = 'error'
  isOpen.value = true;

  return Promise.reject(error)
})