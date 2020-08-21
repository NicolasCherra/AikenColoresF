import * as React from 'react';
import {Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyle from '../Styles';

const Header: React.FC<any> = ({ }) => {
  const classes = useStyle();
  const estadoLogin = "Registrarse/Entrar";
  var touch = new Audio('../../../sonidos/touch.mp3');
  var mouseEnter = new Audio('../../../sonidos/mouseEnterBoton.mp3');

  const login = () => {
    touch.play();
    setTimeout(() => window.location.href = "/entrar",500);
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
        onMouseEnter={()=> mouseEnter.play()}
        className={classes.headerCuenta}
        startIcon={<AccountCircleIcon />}
      >{estadoLogin}</Button>

      <Button
        onMouseEnter={()=> mouseEnter.play()}
        className={classes.headerCarrito}
        startIcon={<ShoppingCartIcon />}
      >Carrito</Button>

    </header>
  );
}
export default Header;