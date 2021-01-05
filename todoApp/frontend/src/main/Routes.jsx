import React from 'react';
import { Route } from 'react-router-dom';
import About from '../about/About';
import Todo from '../todo/Todo';

export default function Routes() {
    return (
        <React.Fragment>
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
        </React.Fragment>
    );
}