import axios from 'axios';

const apiURL = 'https://serverfilms.herokuapp.com';

const instance = axios.create({
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
});

const fileInstance = axios.create({
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

instance.interceptors.request.use(config => {
    config.params = {...config.params};
    return config;
    }, error => {
      return Promise.reject(error);
});

fileInstance.interceptors.request.use(config => {
    config.params = {...config.params};
    return config;
    }, error => {
      return Promise.reject(error);
});

export default {
    get: ({ params, path }) => instance.get(`${apiURL}/${path}`, { params }),
    post: ({ params, path }) => instance.post(`${apiURL}/${path}`, params),
    postFile: ({ params, path }) => fileInstance.post(`${apiURL}/${path}`, params)
};