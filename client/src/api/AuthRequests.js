import axios from 'axios'


const API = axios.create({ baseURL: 'https://mern-socialmedia-master-backend.onrender.com' });

API.interceptors.request.use((req) => {
    const profile = localStorage.getItem('profile');
    if (profile && req.url !== '/auth/register') {
        req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
    }
    return req;
});

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
