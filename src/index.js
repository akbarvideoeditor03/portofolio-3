import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/global.css';
import './styles/responsive.css';
import App from './pages/App';
import reportWebVitals from './helper/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const myUrl = '/ahmadakbar03.github.io'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={`${myUrl}`}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();