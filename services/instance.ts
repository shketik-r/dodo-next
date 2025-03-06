import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: '/api',
  params: {
    api_key: "f6c3f2b8b4b4b4b4b4b4b4b4b4b4b4b4",
  }
})