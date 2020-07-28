import * as React from 'react';

import { AppBar, Toolbar, Typography, makeStyles,Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as theme from './Tema';

import Menu from './Menu';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  menu: {
    color: "#fff"
  }
}));
  


const NavBar: React.FC<any> = ({}) =>{
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const mostrarDrawer = () => {
    setdrawerOpen(!drawerOpen);
  }

  return (
      <div >
      <AppBar position="fixed" color="primary" >
        <Toolbar >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={mostrarDrawer}
            className={classes.menu}>
            <MenuIcon />
          </IconButton> 
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={mostrarDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Menu/>
      </Drawer>
      </div>
    );
  
}

export default NavBar;