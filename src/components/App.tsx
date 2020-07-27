import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

//Material
import {Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Tema from './layout/Tema';
//Componentes
import Header from './layout/Header';
import Footer from './layout/Footer';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import NavBar from './layout/NavBar';
import Menu from './layout/Menu';
import { useState } from 'react';

//////////////////// 
//           
const App:React.FC = () => {

    return (
      <React.Fragment>
        <ThemeProvider theme={Tema}>
          <Header/>
          <Menu />

            <Router>
              <Switch>
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