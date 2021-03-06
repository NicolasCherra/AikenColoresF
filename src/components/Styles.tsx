import {makeStyles} from '@material-ui/core';
import Tema from './layout/Tema';

const drawerWidth = 240;

const useStyle = makeStyles({
  Main: {
    display: "block",
    width: "70em",
    marginTop:"1em",
    position: "absolute",
    left: "17%",
    top: "21%",
    [Tema.breakpoints.down('sm')]: {
      left: "2%",
      width:"22em"
    }
  },
  Div: {
    margin:"1em"
  },
  Titulo: {
    textAlign:"center",
    margin:"2em"
  },  
  caja: {
    position: "relative",
    left: "40%",
    bottom: "15em",
    width: 300,
    [Tema.breakpoints.down('sm')]: {
      left: "2em",
    }
  },
  inicio: {
    
  },  
  inicioEstadoCargandoBD: {
    
  },
  inicioContenedorProductos: {
    position: "relative",
    [Tema.breakpoints.down('sm')]: {
      left:"1%"
    }
  },
  Header: {
    position: "absolute",
    height:"11em",
    top: "0%",
    width: "100%",
    backgroundColor: "#f0f7"
  },
  headerLogo: { 
    width: 150,
    height: 150,
    background: "#eee",
    borderRadius: 100,
    marginBottom: -50
  },
  headerBuscador: {
    height: 55,
    width: 500,
    position: "relative",
    left: "27%",
    fontSize: 25,
    borderRadius: "25px",
    borderWidth: "10px",
    borderColor: "cornflowerblue",
    borderStyle: "ridge",
    transition:"1s",
    "&:hover, &:focus": {
      backgroundColor: "#ff0",
      borderRadius: 50,
      fontSize: 25,
      trasnform:"scale(1.9)"
    }
  },
  headerCuenta: {
    position: "absolute",
    left: "70%",
    transition: "1s",
    "&:hover": {      
      trasnform:"scale(1.2)"
    }
  },
  headerCarrito: {
    position: "absolute",
    left: "90%",
    transition: "1s",
    "&:hover": {      
      trasnform:"scale(1.2)"
    }
  },
  Menu: {
    display: 'flex',
    position: "absolute",
    top:"23%",
    [Tema.breakpoints.down('sm')]: {      
      top:"5%"
    }
  },
  MenuBotones: {
    transition: "1s",
    "&:hover": {
      transform: "scale(1.2)",
      color: "black",
      cursor:"url('../../imagenes/cursorPointer.png'),pointer"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  menu: {
    color: "#fff"
  },
  producto: {
    maxWidth: 350,
    [Tema.breakpoints.down('sm')]: {      
      maxWidth: 300
    }
  },
  productoImagen: {
    borderRadius: 20,
    height: 250,
  },
  productoContenedorBotones: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  productosBotonPrimario: {
    marginTop: 10,
    transition: "1s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor:"url('../../imagenes/cursorPointer.png'),pointer"
    }
  },
  productosBotonSecundario: {
    marginTop: 10,
    transition: "1s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor:"url('../../imagenes/cursorPointer.png'),pointer"
    }
  },
  login: {
    
  },
  loginFormulario: {
    display: "flex",
    flexDirection:"column"
  },
  articulo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2em"    
  },
  articuloImagen: {
    borderRadius: "10px",
    borderWidth: "10px",
    borderColor: "cornflowerblue",
    borderStyle: "ridge",
    width: "600px",
    transition:"1s",
    [Tema.breakpoints.down('sm')]: {      
      width: 350
    },
    "&:hover":{
      transform: "scale(1.7)"
    },
  },
  pagination: {
    position: "absolute",
    left: "42%",
    marginTop: "4em",
    [Tema.breakpoints.down('sm')]: {      
      left: "26%"
    }
  },
  TransicionPage: {
    
  },
  Footer: {
    position: "absolute",
    width: "100%",
    height:"10em",
    backgroundColor: "black",
    bottom: "-110%",
    [Tema.breakpoints.down('sm')]: {      
      bottom: "-216em"
    }
  }
  
});
export default useStyle;  