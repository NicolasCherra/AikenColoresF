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
import useStyle from '../Styles';

const Menu: React.FC<any> = ({ }) => {
  const home = () => {
    window.location.href ="/";
  }
  const catalogo = () => {
    window.location.href ="/catalogo";
  }
  const classes = useStyle();
  return (
    <div className={classes.root}>
        <List>
        <ListItem button onClick={home}  color="primary">
            <ListItemIcon>
              <HomeIcon color="primary"/>
              <ListItemText primary="Inicio" color="secundary" />
            </ListItemIcon>
          </ListItem>

          <Divider/>
          
          <ListItem button onClick={catalogo} >
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