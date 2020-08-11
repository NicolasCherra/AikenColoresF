import {makeStyles} from '@material-ui/core';
import Tema from './layout/Tema';

const drawerWidth = 240;
const useStyle = makeStyles({
  m: {
    [Tema.breakpoints.down('sm')]: {
      marginTop:"30em"
    }
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
  grid: {
    marginTop: "12em",
    position: "absolute",
    top: "2em",
    width: 1000,
    left: "20%",
    [Tema.breakpoints.down('sm')]: {
      left: "10%",
      width: 400
    }
  },
  pos: {
    position: "relative",
    marginTop: "-15em",
    left: "20%"
  },
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
  },
  root: {
    display: 'flex'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menu: {
    color: "#fff"
  }
  
});
export default useStyle;  