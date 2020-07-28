import React from 'react';
import axios from 'axios';
import {
  Grid, Box,Card,CardHeader,CardMedia,CardContent,CardActions,CardActionArea, Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 350
  },
  media: {
    height: 250,
  },
  dp: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  bP: {
   marginTop: 10
  },
  bS: {
    marginTop: 10
   }

});
interface Props {
  nombreProducto: string;
  imagen: string;
  id: number;
}


const Producto: React.FC<Props> = ({nombreProducto,imagen,id}) =>{
  const classes = useStyles();
  const art = "articulo/"+id;

  return (
    <React.Fragment>
      <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={imagen}
                  
                />

              </CardActionArea>
              <CardActions className={classes.dp}  >
                <Button size="small" variant="contained" color="secondary"  className={classes.bS} >
                  Descripcion
                </Button>
                <Button size="small" variant="contained" color="primary" href={art} className={classes.bP}>
                    Hacer Pedido
                </Button>
              </CardActions>
            </Card>
    </React.Fragment>
  );
};

export default Producto;