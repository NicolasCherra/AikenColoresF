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
  const classes = useStyle();
  var touch = new Audio('../../../sonidos/touch.mp3');
  var mouseEnter = new Audio('../../../sonidos/mouseEnterBoton.mp3');
  
  const home = () => {
    touch.play();
    setTimeout(() => window.location.href = "/", 500);
  }

  const catalogo = () => {
    touch.play();
    setTimeout(() => window.location.href = "/catalogo", 500);
  }

  
  return (
    <div className={classes.Menu}>
        <List>
        <ListItem button onClick={home} onMouseEnter={()=> mouseEnter.play()} className={classes.MenuBotones}  color="primary">
            <ListItemIcon>
              <HomeIcon color="primary"/>
              <ListItemText primary="Inicio" color="secundary" />
            </ListItemIcon>
          </ListItem>

          <Divider/>
          
          <ListItem button onClick={catalogo} onMouseEnter={()=> mouseEnter.play()} className={classes.MenuBotones}>
            <ListItemIcon>
              <InsertPhotoIcon />
              <ListItemText primary="Catalogo" />
            </ListItemIcon>
          </ListItem>   
          
          <Divider/> 
          
          <ListItem button className={classes.MenuBotones} onMouseEnter={()=> mouseEnter.play()}>
              <ListItemText primary="Souvenir" />
          </ListItem>
                    
          <Divider/> 
          
          <ListItem button className={classes.MenuBotones} onMouseEnter={()=> mouseEnter.play()}>
              <ListItemText primary="Personalizaciones" />
          </ListItem>
                    
          <Divider/> 
          
          <ListItem button className={classes.MenuBotones} onMouseEnter={()=> mouseEnter.play()}>
              <ListItemText primary="Contacto" />
          </ListItem>
          
        </List>
      </div>
  );
}
export default Menu;