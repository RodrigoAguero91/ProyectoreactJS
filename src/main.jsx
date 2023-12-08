import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';





const firebaseConfig = {
  apiKey: "AIzaSyCrH6q1SNhyPpHgsVWFCG6db2sVZGU9wTE",
  authDomain: "proyectodereact-92fe5.firebaseapp.com",
  projectId: "proyectodereact-92fe5",
  storageBucket: "proyectodereact-92fe5.appspot.com",
  messagingSenderId: "57405715302",
  appId: "1:57405715302:web:7748d6e68339bc6c4ccea7"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
