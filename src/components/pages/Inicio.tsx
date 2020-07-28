import * as React from 'react';
import axios from 'axios';
import {
  Grid, Box,Card,CardHeader,CardMedia,CardContent,CardActions,CardActionArea, Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Producto from '../Producto';

axios.defaults.withCredentials = true;

const useStyles = makeStyles({
  grid: {
    marginTop: "10em",
    position: "relative",
    bottom: "10em",
    width: 1000,
    left: "20%"
  },
  pos: {
    position: "relative",
    marginTop: "-15em",
    left: "30%"
  }
});

const Inicio: React.FC<any> = ({}) =>{

  const nombreP = ["Uno","dos","tres","Llavero","abeja","lala","7","8"];
  const urlImg = ["imagenes/0.jpg","imagenes/1.jpg","imagenes/2.jpg","imagenes/3.jpg","imagenes/4.jpg","imagenes/5.jpg","imagenes/6.jpg","imagenes/7.jpg"];
  const classes = useStyles();
  const maxProductos = 8;
  let productos = [];
  for (var i = 0; i <maxProductos; i++) {
    productos.push(<Grid item xs={12} sm={12} md={6} lg={3}><Producto nombreProducto ={nombreP[i]} imagen={urlImg[i]} id={i} /></Grid>);
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
            {productos}
        </Grid>
      </React.Fragment>
    );
}

export default Inicio;