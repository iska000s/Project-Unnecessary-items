import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/main.scss";
import App from './App';
import Login from "./components/Login";
// import Home from './components/Home';
// import Registartion from "./components/Registration";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const login = ReactDOM.createRoot(document.querySelector("#login"));

login.render(
  <Login></Login>
);
