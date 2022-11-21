import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; 

import { Provider } from 'react-redux';
import store from './redux/store';

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={store}>

      <ToastContainer 
        theme='dark'
        position='top-left'
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      >

      </ToastContainer>
      <App />
    </Provider>
      
    </BrowserRouter>
  </React.StrictMode>


);
