import * as React from 'react';
import { useParams } from "react-router";
import { makeStyles, Box, Typography,Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSouvenir } from '../redux/Ducks';
import { ProductosRD, ProductoRD, IStateRedux } from '../redux/types';
import useStyle from '../Styles';

interface Props{
  _id: string;
}

const Articulo: React.FC<Props>=({})=>{  
  let { id } = useParams();
  const classes = useStyle();
  const dispatch = useDispatch();
  let [product, setProduct] = React.useState<ProductoRD>();
  let souvenirObj = useSelector((store: any) => store.productos.souvenir);
  console.log("PRODUC",souvenirObj);

  React.useEffect(() => {
    traer(); // para mejor permormance hacer thunk
  }, []);

  const traer = () => {
    console.log("Activado");
    dispatch(getOneSouvenir(id));
  }

  return (
    <React.Fragment>
      <Box className={classes.articulo}>        

        <img src={"data:image/jpeg;base64,"+souvenirObj.imagenProducto}  className={classes.articuloImagen} /> 
        
        <Typography variant="h6">
          {souvenirObj.nombre}
        </Typography>        

        <Typography variant="h6">
          Descripcion<br></br>
          {souvenirObj.descripcion}
        </Typography>

        <Typography variant="h6">
          Disponibles:{souvenirObj.stock}
        </Typography>

        <Typography variant="h6" color="primary">
          Precio:{"$"+souvenirObj.precio}
        </Typography>

        <Button size="large" variant="contained" color="primary" >Comprar</Button>

      </Box>
    </React.Fragment>
  );
}
export default Articulo;