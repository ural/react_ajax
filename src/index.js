import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEn FROM ME';
axios.defaults.headers.common['WHAAAATTTT'] = 'SAY WHAAAAT!!!!';
axios.defaults.headers.common['User-Agent'] = 'dAH FOX';
/*
axios.defaults.headers.common['I can put anything in here'] = 'ANYTHING AT ALL ???';
*/

console.log(axios.defaults.headers);

let requerstInterceptor = axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
axios.interceptors.request.eject(requerstInterceptor);

let responseInterceptor = axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
