import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as React from 'react';
import axios from 'axios';


import {Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Tema from './layout/Tema';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import NavBar from './layout/NavBar';

import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Articulo from './pages/Articulo';

axios.defaults.withCredentials = true;

const App:React.FC = () => {

    return (
      <React.Fragment>
        <ThemeProvider theme={Tema}>
          <Header/>
          <Menu />

            <Router>
            <Switch>
                <Route  exact path="/articulo/:id"      component={Articulo}></Route>
                <Route  exact path="/"      component={Inicio}></Route>
                <Route  exact path="/entrar" component={Login}></Route>
                <Route  exact path="/registrarse" component={Registro}></Route>
              </Switch>
            </Router>
          
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    );
}
export default App;