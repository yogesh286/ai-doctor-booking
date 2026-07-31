import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-doctor-booking.onrender.com/api",
});

export default api;
