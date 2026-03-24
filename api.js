import axios from "axios";

// Create Axios instance
const API = axios.create({
baseURL: "https://jsonplaceholder.typicode.com",
});

// API function
export const getUsers = () => API.get("/users");
export const getPosts = () => API.get("/posts");
export const getComments = () => API.get("/comments");