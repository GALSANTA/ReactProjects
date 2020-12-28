import './Content.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../../views/examples/About';
import Home from '../../../views/examples/Home';
import NotFound from '../../../views/examples/NotFound';
import Param from '../../../views/examples/Param';
import UseState from '../../../views/pages/UseState';
import UseEffect from '../../../views/pages/UseEffect';
import UseRef from '../../../views/pages/UseRef';
import UseMemo from '../../../views/pages/UseMemo';
import UseCallback from '../../../views/pages/UseCallback';
import UseContext from '../../../views/pages/UseContext';
import UseReducer from '../../../views/pages/UseReducer';
import UseMyHook from '../../../views/pages/UseMyHook';


function Content() {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/useState">
                    <UseState />
                </Route>
                <Route path="/useEffect">
                    <UseEffect />
                </Route>
                <Route path="/useRef">
                    <UseRef />
                </Route>
                <Route path="/useMemo">
                    <UseMemo />
                </Route>
                <Route path="/useCallback">
                    <UseCallback />
                </Route>
                <Route path="/useContext">
                    <UseContext />
                </Route>
                <Route path="/useReducer">
                    <UseReducer />
                </Route>
                <Route path="/useMyHook">
                    <UseMyHook />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/param/:id">
                    <Param />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </main>
    );
}

export default Content;