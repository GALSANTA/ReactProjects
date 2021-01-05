import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">
                        <i className="bi bi-calendar-check"></i>
                        TodoApp
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/todos">Tarefas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}