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
axios.defaults.headers.common['I_can_put_anything_in_here'] = 'ANYTHING AT ALL ???';
axios.defaults.xsrfCookieName = 'Whats_this_cookie';


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
