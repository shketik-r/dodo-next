import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    api_key: "f6c3f2b8b4b4b4b4b4b4b4b4b4b4b4b4",
  }
})