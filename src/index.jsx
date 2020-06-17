import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import 'normalize.css';

const app =(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
)
ReactDOM.render(app,document.getElementById('root'));
serviceWorker.unregister();






