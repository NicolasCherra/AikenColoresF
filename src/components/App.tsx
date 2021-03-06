import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as React from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import generateStore from './redux/Store';
import {Button, Hidden,makeStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Tema from './layout/Tema';
import useStyle from './Styles';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Menu from './layout/Menu';
import NavBar from './layout/NavBar';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Articulo from './pages/Articulo';


const App: React.FC = () => {
  const store = generateStore();
  const classes = useStyle();

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={Tema}>
          <Router>                                          
            <Route
              render={({ location }) => (
                <TransitionGroup className="container">
                  <CSSTransition
                    appear={true}
                    key={location.key}
                    timeout={{ enter: 2000, exit: 2000 }}
                    classNames="fade"
                  >
                    <div>
                      <Hidden mdUp>
                        <NavBar  />
                      </Hidden>
                      <Hidden smDown>
                        <Header  />
                        <Menu  />
                      </Hidden> 
                      <main className={classes.Main}>                          
                        <Switch>              
                          <Route  exact path="/articulo/:id"      component={Articulo}></Route>
                          <Route  exact path="/"                  component={Inicio}></Route>
                          <Route  exact path="/entrar"            component={Login}></Route>
                          <Route  exact path="/registrarse"       component={Registro}></Route>
                        </Switch>
                      </main>
                      <Footer />                      
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />           
          </Router>                                            
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}
export default App;