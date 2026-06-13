import axios from "axios";

const API = axios.create({
  baseURL:
    "https://personal-task-manager-chyi.onrender.com/api",
});

export default API;