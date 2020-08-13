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
    borderWidth: "2px",
    borderColor: "black",
    borderStyle:"double",
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
    borderWidth: "2px",
    borderColor: "black",
    borderStyle: "double",
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
    "&:hover, &:focus": {
      backgroundColor: "#ff0",
      borderRadius: 50,
      fontSize:25
    }
  },
  headerCuenta: {
    position: "absolute",
    left: "70%"
  },
  headerCarrito: {
    position: "absolute",
    left: "90%"
  },
  Menu: {
    display: 'flex',
    position: "absolute",
    borderWidth: "2px",
    borderColor: "black",
    borderStyle:"double",
    top:"23%"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menu: {
    color: "#fff"
  },
  producto: {
    maxWidth: 350,
    borderWidth: 2,
    borderStyle:"double",
    [Tema.breakpoints.down('sm')]: {      
      maxWidth: 300
    }
  },
  productoImagen: {
    height: 250,
  },
  productoContenedorBotones: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  productosBotonPrimario: {
   marginTop: 10
  },
  productosBotonSecundario: {
    marginTop: 10
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
    margin:"2em"
  },
  articuloImagen: {
    borderRadius: "10px",
    borderWidth: "10px",
    borderColor: "cornflowerblue",
    borderStyle: "ridge",
    width:"600px"
  },
  Footer: {
    position: "absolute",
    width: "100%",
    height:"10em",
    backgroundColor: "black",
    bottom: "-70%",
    [Tema.breakpoints.down('sm')]: {      
      bottom: "calc(-1em*18*9)"
    }
  }
  
});
export default useStyle;  