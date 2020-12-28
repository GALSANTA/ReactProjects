import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/layout/Menu/Menu';
import Content from '../components/layout/Content/Content';
import { DataContext, data } from '../data/DataContext';
import Store from '../data/Store';

import './App.css';

function App() {

  const [state, setState] = React.useState(data);

  return (
    <Store>
      <DataContext.Provider value={{ state: state, setState: setState }}>
        <div className="App">
          <BrowserRouter>
            <Menu />
            <Content />
          </BrowserRouter>
        </div>
      </DataContext.Provider>
    </Store>
  );
}

export default App;
