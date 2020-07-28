import * as React from 'react';
import { useParams } from "react-router";
import { makeStyles, Box, Typography } from '@material-ui/core';

import Producto from '../Producto';
import Tema from '../layout/Tema';

const useStyles = makeStyles({
  caja: {
    position: "relative",
    left: "40%",
    bottom: "15em",
    width: 300,
    [Tema.breakpoints.down('sm')]: {
      position: "relative",
      left: "10em",
    }
  }
});
interface Props{
  id: number;
}
const Articulo: React.FC<Props>=({})=>{
  
  let { id } = useParams();
  let img = "/imagenes/" + id + ".jpg";

  const classes = useStyles();

  return (
    <Box className={classes.caja}>
      <img src={img} /> 
      <Typography variant="h6" >
        Lnexpedita nisi qui odio molestias possimus incidunt? In, nulla!
      </Typography>
      <Typography variant="h6" color="primary">
        $700
      </Typography>
    </Box>
  );
}

export default Articulo;
