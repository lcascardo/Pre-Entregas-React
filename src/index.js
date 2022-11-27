import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyBicNEpaN7nPEZaf7gtADuuYeGNA1fe5w0",
  authDomain: "proyecto-final-react-ecommerce.firebaseapp.com",
  projectId: "proyecto-final-react-ecommerce",
  storageBucket: "proyecto-final-react-ecommerce.appspot.com",
  messagingSenderId: "236835956872",
  appId: "1:236835956872:web:5f787b15b11a2568d3973d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

