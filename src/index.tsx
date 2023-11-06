import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylings/index.css';
import App from './App';
import {ApiProvider} from "./context/ApiContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApiProvider>
        <App/>
    </ApiProvider>
);
