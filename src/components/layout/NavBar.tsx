import * as React from 'react';
import { AppBar, Toolbar, Typography, makeStyles,Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyle from '../Styles';
import Menu from './Menu';
  
const NavBar: React.FC<any> = ({}) =>{
  const classes = useStyle();
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const mostrarDrawer = () => {
    setdrawerOpen(!drawerOpen);
  }

  return (
    <div >

      <AppBar position="fixed" color="secondary" >

        <Toolbar >

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={mostrarDrawer}
            className={classes.menu}
          >

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

        <Menu />
        
      </Drawer>

    </div>

    );
}
export default NavBar;