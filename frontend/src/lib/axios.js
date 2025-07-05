import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://barto-chat-app.onrender.com/api" : "/api",
  withCredentials: true,
});
