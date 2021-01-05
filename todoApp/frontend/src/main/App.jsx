import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Menu from '../template/Menu';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import '../template/custom.css';

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Menu />
                <Routes />
            </BrowserRouter>
        </div>
    );
}