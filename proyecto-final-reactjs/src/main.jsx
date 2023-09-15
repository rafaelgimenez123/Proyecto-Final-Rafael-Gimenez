import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC37RsL8X5snH8-1BH5MgOpqZq-PgMf2Sk",
  authDomain: "coder-react-b922b.firebaseapp.com",
  projectId: "coder-react-b922b",
  storageBucket: "coder-react-b922b.appspot.com",
  messagingSenderId: "1041206921607",
  appId: "1:1041206921607:web:69e8f328afc84eebdfab22",
  measurementId: "G-N63F7TBMB0"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();