import * as React from 'react';
import {Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyle from '../Styles';

const Header: React.FC<any> = ({ }) => {
  const classes = useStyle();
  const estadoLogin = "Registrarse/Entrar";

  const login = () => {
    window.location.href ="/entrar";
  }  
  
  return (
    <header className={classes.Header}>
      <img
        className={classes.headerLogo}
        src={"/imagenes/logo.png"}
      />
      <input
        className={classes.headerBuscador}
        type="search"
      />
      
      <Button
        onClick={login}
        className={classes.headerCuenta}
        startIcon={<AccountCircleIcon />}
      >{estadoLogin}</Button>

      <Button
        className={classes.headerCarrito}
        startIcon={<ShoppingCartIcon />}
      >Carrito</Button>

    </header>
  );
}
export default Header;