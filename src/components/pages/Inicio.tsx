import * as React from 'react';
import {
  Grid, Box, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography,
  Button
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getSouvenirs } from '../redux/Ducks';
import { ProductosRD, ProductoRD, IStateRedux } from '../redux/types';
import useStyle from '../Styles';
import Producto from '../artifact/Producto';

const Inicio: React.FC<any> = ({}) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  let souvenirsObj = useSelector((store: any) => store.productos.souvenirs[0]);
  let cargando = <Typography className={classes.inicioEstadoCargandoBD} variant="h6" >Cargando...</Typography>;
  let productsHTML:any = [];
  let cantidadDeElementosPorPaginacion = 8;
  let [products, setProducts] = React.useState<Array<ProductoRD>>([]);
  const [page, setPage]       = React.useState(0);
  let [cargo, setCargo] = React.useState(0);
  let cantidadDePaginas:number =Math.ceil(products.length/cantidadDeElementosPorPaginacion);

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

  const handleChangePage = (event: object, page: number) => {
    console.log("PAGINA",page)
    setPage(page);
    ponerProductos();
  };

  const ponerProductos = () => {
    productsHTML.length=0
    let ultimoItem = cantidadDeElementosPorPaginacion;
    let i = 0;
    //Parchiando las paginas
    if (page > 1) {
      page > 2 ? i=cantidadDeElementosPorPaginacion*(page-1) : i=cantidadDeElementosPorPaginacion;      
      if (page == cantidadDePaginas) {
        ultimoItem = products.length;
      } else {
        ultimoItem=(cantidadDeElementosPorPaginacion * page)
      }        
    }else if (products.length < cantidadDeElementosPorPaginacion) {
      ultimoItem = products.length;
    }
    //
    for (i; i < ultimoItem; i++) {            
      productsHTML.push(
        <Grid item xs={12} sm={12} md={6} lg={3} key={i}>

          <Producto
            nombreProducto={products[i].nombre}
            imagen={products[i].imagenProducto}
            _id={products[i]._id}
          />

        </Grid>
      );
    } 
  }
  
  if (products.length > 0 && souvenirsObj != undefined) {
    ponerProductos();
  }

  return (
    <div className={classes.Div}>

      <Typography className={classes.Titulo}variant="h6" >
        Nuestro Trabajo
      </Typography>
      
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.inicioContenedorProductos}
        spacing={3}
        id="gridProductos"
      >

        {productsHTML.length > 0 ? productsHTML : cargando}
        

        

      </Grid>

      <Pagination
        count={cantidadDePaginas}
        onChange={handleChangePage}
        color="secondary"
        className={classes.pagination}
      />
    </div>
  );
}
export default Inicio;