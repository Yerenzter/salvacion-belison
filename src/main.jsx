/* IMPORT REACT LIBRARIES */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* IMPORT APP ROUTER */
import { App } from './routers'

/* IMPORT THIRD PARTY LIBRARIES */
import './lib'
import './index.css';
import './css/responsive.css';
import './css/Instant.css';
import Clearance from '../api/docs/clearance';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
