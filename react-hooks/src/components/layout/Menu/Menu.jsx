import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/useState">UseState()</Link>
                    </li>
                    <li>
                        <Link to="/useEffect">UseEffect()</Link>
                    </li>
                    <li>
                        <Link to="/useRef">UseRef()</Link>
                    </li>
                    <li>
                        <Link to="/useMemo">UseMemo()</Link>
                    </li>
                    <li>
                        <Link to="/useCallback">UseCallback()</Link>
                    </li>
                    <li>
                        <Link to="/useContext">UseContext()</Link>
                    </li>
                    <li>
                        <Link to="/useReducer">UseReducer()</Link>
                    </li>
                    <li>
                        <Link to="/useMyHook">UseMyHook()</Link>
                    </li>
                    <li>
                        <Link to="/param/1">Param 1</Link>
                    </li>
                    <li>
                        <Link to="/param/2">Param 2</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;