import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import * as React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

//Componentes
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Registro from './Registro';
////////////////////
export class App extends React.Component{

  render() {
    return (
      <React.Fragment>
      <Header/>
        <Router>
          <Switch>
            <Route  exact path="/"      component={Home}></Route>
            <Route  exact path="/entrar" component={Login}></Route>
            <Route  exact path="/registrarse" component={Registro}></Route>
          </Switch>
        </Router>
      <Footer/>
      </React.Fragment>
    );
  }
}