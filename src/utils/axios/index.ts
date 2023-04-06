import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
});

instance.interceptors.request.use(
  (config: any) => {
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => Promise.reject(error)
);

const successHandler = (response: any) => {
  return response;
};

const errorHandler = (error: any) => Promise.reject(error);

instance.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);

export default instance;
