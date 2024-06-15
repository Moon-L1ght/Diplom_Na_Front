import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    // headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
    // }
});

export default instance;