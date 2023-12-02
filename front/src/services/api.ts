import axios from "axios";

export const BASE_URL = "https://taskmanager-i62q.onrender.com/api/"
export const DEV_URL = ""

export const api = axios.create({
    baseURL: BASE_URL
})