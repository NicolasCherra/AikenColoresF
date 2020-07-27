import * as React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { makeStyles } from '@material-ui/core';

const estilos = makeStyles(theme => ({
    root: {
      display: 'flex'
    }
}));

const Menu: React.FC<any> = ({ }) => {

  const classes = estilos();
  return (
    <div className={classes.root}>
        <List>
          <ListItem button   color="primary">
            <ListItemIcon>
              <HomeIcon color="primary"/>
              <ListItemText primary="Inicio" color="secundary" />
            </ListItemIcon>
          </ListItem>

          <Divider/>
          
          <ListItem button>
            <ListItemIcon>
              <InsertPhotoIcon />
              <ListItemText primary="Catalogo" />
            </ListItemIcon>
          </ListItem>   
          
          <Divider/> 
          
          <ListItem button>
              <ListItemText primary="Souvenir" />
          </ListItem>
                    
          <Divider/> 
          
          <ListItem button>
              <ListItemText primary="Personalizaciones" />
          </ListItem>
                    
          <Divider/> 
          
          <ListItem button>
              <ListItemText primary="Contacto" />
          </ListItem>
          
        </List>
      </div>
    );
}

export default Menu;