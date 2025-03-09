import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Dynamically load Tailwind CSS CDN
const tailwindCDN = document.createElement('script');
tailwindCDN.src = "https://cdn.tailwindcss.com";
tailwindCDN.async = true;
document.head.appendChild(tailwindCDN);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
