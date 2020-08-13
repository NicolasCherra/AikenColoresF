import * as React from 'react';
import {
  Grid, Box, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography,
  Button
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getSouvenirs } from '../redux/Ducks';
import { ProductosRD, ProductoRD, IStateRedux } from '../redux/types';
import useStyle from '../Styles';
import Producto from '../artifact/Producto';

const Inicio: React.FC<any> = ({ }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  let [products, setProducts] = React.useState<Array<ProductoRD>>([]);
  let [cargo, setCargo] = React.useState(0);
  let souvenirsObj = useSelector((store: any) => store.productos.souvenirs[0]);
  let cargando = <Typography className={classes.inicioEstadoCargandoBD} variant="h6" >Cargando...</Typography>;
  let productsHTML:any = [];
  
  React.useEffect(() => {
    traer(); // para mejor permormance hacer thunk
    pasar();
  }, [cargo]);
  
  const traer = () => {
    dispatch(getSouvenirs());
  }

  const pasar = () => {       
    if (souvenirsObj != undefined || souvenirsObj != null) {      
      let array:Array<ProductoRD> = Object.values(souvenirsObj);
      setProducts(array);
    } else {
      setTimeout(setCargo, 3000, cargo + 1);
    }
  }
  
  for (var i = 0; i < products.length; i++){
    console.log("altura",document.body.scrollHeight);
    productsHTML.push(
      <Grid item xs={12} sm={12} md={6} lg={3} key={i}>
        <Producto            
          nombreProducto={products[i].nombre}
          imagen={products[i].imagenProducto}
          _id={products[i]._id} />
      </Grid>
    );
  }

  return (
    <div className={classes.Div}>
        <Typography className={classes.Titulo}variant="h6" >
          Nuestro Trabajo
        </Typography>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.inicioContenedorProductos}
          spacing={3}
        >
          {productsHTML.length>0 ? productsHTML : cargando}
        </Grid>
      </div>
  );
}
export default Inicio;