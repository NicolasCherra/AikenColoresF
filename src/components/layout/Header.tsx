import * as React from 'react';
import { makeStyles,Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const estilos = makeStyles(theme => ({
  logo: { 
    width: 150,
    height: 150,
    background: "#eee",
    borderRadius: 100,
    marginBottom: -50
  },
  buscador: {
    borderRadius: 50,
    marginLeft: 200,
    marginBottom: 100,
    height: 30,
    width: 500
  },
  cuenta: {
    position: "absolute",
    left: "70%"
  },
  carrito: {
    position: "absolute",
    left: "80%"
  }
}));

const Header: React.FC<any> = ({}) =>{

  const login = () => {
    window.location.href ="/entrar";
  }
  
  const classes = estilos();
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