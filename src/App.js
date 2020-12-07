import React from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';


function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/produto">Produto</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/produtos">
          <Produtos />
        </Route>

        <Route path="/produto">
          <Produto />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
