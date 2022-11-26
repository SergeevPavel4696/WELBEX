import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './scripts/App.js';
import reportWebVitals from './reportWebVitals.js';

const page = ReactDOM.createRoot(document.getElementById('page'));
page.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
