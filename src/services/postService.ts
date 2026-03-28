// import api from "./ApiService";
import axios from 'axios';

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
})


export const getPosts = async () => {
    try {
    // Uses the baseURL from apiService.js, only need the endpoint path
    const response = await api.get('/posts');
    console.log('Fetched posts: ', response.data);
    
    return response.data; // Axios wraps the response data in a 'data' object
    // return Promise.reject('Error')
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw to handle in the component
  }
}