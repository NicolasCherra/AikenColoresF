import * as React from 'react';
import {Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyle from '../Styles';

const Header: React.FC<any> = ({ }) => {
  const login = () => {
    window.location.href ="/entrar";
  }  
  const classes = useStyle();
  return (
    <React.Fragment>
      <img   className={classes.logo} src={"/imagenes/logo.png"} />
      <input className={classes.buscador} type="search"></input>
      <Button onClick={login} className={classes.cuenta} startIcon={<AccountCircleIcon />} >Cuenta</Button>
      <Button className={classes.carrito} startIcon={<ShoppingCartIcon/>} >Carrito</Button>
    </React.Fragment>
    );
}
export default Header;