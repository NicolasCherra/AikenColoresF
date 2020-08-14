import React from 'react';
import {
  Grid, Box,Card,CardHeader,CardMedia,CardContent,CardActions,CardActionArea, Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import useStyle from '../Styles';

interface Props {
  nombreProducto: string;
  imagen: string;
  _id: string;
}
const Producto: React.FC<Props> = ({nombreProducto,imagen,_id}) =>{
  const classes = useStyle();
  const art = "articulo/"+_id;
  return (
    <Card className={classes.producto}>

      <CardActionArea>

        <CardMedia
          className={classes.productoImagen}
          image={"data:image/jpeg;base64,"+imagen}                  
        />

      </CardActionArea>
      
      <CardContent>

        <Typography gutterBottom variant="h5" component="h2" align="center">
          {nombreProducto}
        </Typography>    
      
      </CardContent>

      <CardActions className={classes.productoContenedorBotones}>
        
        <Button
          size="small"
          variant="contained"
          color="secondary"
          className={classes.productosBotonSecundario}
        >
          Descripcion
        </Button>

        <Button
          size="small"
          variant="contained"
          color="primary"
          href={art}
          className={classes.productosBotonPrimario}
        >
          Hacer Pedido
        </Button>

      </CardActions>

    </Card>
  );
}
export default Producto;