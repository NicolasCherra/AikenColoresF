import * as React from 'react';
import axios from 'axios';
import {
  Grid, Box,Card,CardHeader,CardMedia,CardContent,CardActions,CardActionArea,Typography,Button,makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector, DefaultRootState } from 'react-redux';
import { getSouvenirs } from '../../redux/Ducks';
import { ProductosRD, ProductoRD, IStateRedux } from '../../redux/types';
import Producto from '../Producto';
import Tema from '../layout/Tema';

const useStyles = makeStyles({
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
  }
});

const Inicio: React.FC<any> = ({ }) => {
  let [products, setProducts] = React.useState<Array<ProductoRD>>([]);
  let [cargo, setCargo] = React.useState(0);
  
  const classes = useStyles();
  const dispatch = useDispatch();

  const traer = () => {
    console.log("Activado");
    dispatch(getSouvenirs());
  }

  let souvenirsObj = useSelector((store: any) => store.productos.souvenirs[0]);

  let cargando = <Typography className={classes.pos}variant="h6" >Cargando</Typography>;

  const pasar = () => {
    console.log("pasar")        
    if (souvenirsObj != undefined || souvenirsObj != null) {      
      let array:Array<ProductoRD> = Object.values(souvenirsObj);
      setProducts(array);
      console.log("Porducts",products);
    } else {
      console.log("vino mal")
      setTimeout(setCargo, 3000, cargo + 1);
    }
  }

  React.useEffect(() => {
    traer(); // para mejor permormance hacer thunk
    pasar();
  }, [cargo]);

  let productsHTML = [];
  console.log("hoal carlos")
  for (var i = 0; i < products.length; i++){
    productsHTML.push(<Grid item xs={12} sm={12} md={6} lg={3}><Producto nombreProducto ={products[i].nombre} imagen={products[i].imagenProducto} id={i} /></Grid>)
  }
  
  return (
    <React.Fragment>
      <Typography className={classes.pos}variant="h6" >
        Nuestro Trabajo
      </Typography>
      <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        className={classes.grid}
        spacing={3}
      >
        {
          productsHTML.length>0
            ?
            productsHTML
            :
            cargando
        }
      </Grid>
    </React.Fragment>
  );
}
export default Inicio;