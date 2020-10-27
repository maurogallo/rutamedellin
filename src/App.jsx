import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import Home from './components/Home.jsx'
import Categorias from './components/Categorias.jsx'
import Categoria from './components/Categoria.jsx'
import Secretarias from './components/Secretarias.jsx'
import Secretaria from './components/Secretaria.jsx'
import 'animate.css'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/rutamedellin' component={Home} />
          <Route  path="/rutamedellin/categorias" component={Categorias} />
          <Route  path="/rutamedellin/categoria/:id" component={Categoria} />
          <Route  path="/rutamedellin/secretarias" component={Secretarias} />
          <Route  path="/rutamedellin/secretaria/:id" component={Secretaria} />
        </Switch>
      </Router>
    );
  }
}

export default App;
