import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // import reportWebVitals

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// เรียกใช้งาน reportWebVitals และส่งข้อมูลไปที่ console.log
reportWebVitals(console.log);

