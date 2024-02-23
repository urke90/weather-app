import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

// ? Add a request interceptor ----- left just in case if it's needed later
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// ? Add a response interceptor ----- left just in case if it's needed later
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { instance as axios };
