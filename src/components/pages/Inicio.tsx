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

axios.defaults.withCredentials = true;




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

const Inicio: React.FC<any> = ({}) =>{
  const dispatch = useDispatch();

  const traer = () => {
    console.log("Activado")
    dispatch(getSouvenirs());
    console.log("SOUVENIR OBJC", souvenirsObj);
  }
  
  const souvenirsObj = useSelector((store:IStateRedux) => store.productos.souvenirs);

  
  
  const nombreP = ["Uno", "dos", "tres", "Llavero", "abeja", "lala", "7", "8"];
  const urlImg = ["imagenes/0.jpg","imagenes/1.jpg","imagenes/2.jpg","imagenes/3.jpg","imagenes/4.jpg","imagenes/5.jpg","imagenes/6.jpg","imagenes/7.jpg"];
  
  const classes = useStyles();

  const maxProductos = 8;
  let productos = [];
  let suovenirsHTML:any = [];

  for (var i = 0; i <maxProductos; i++) {
    productos.push(<Grid item xs={12} sm={12} md={6} lg={3}><Producto nombreProducto ={nombreP[i]} imagen={urlImg[i]} id={i} /></Grid>);
  }
  

    return (
      <React.Fragment>
        <Button onClick={traer}>Traer</Button>
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
            {productos}
        </Grid>
      </React.Fragment>
    );
}
export default Inicio;