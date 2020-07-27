import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const NavBar: React.FC<any> = ({}) =>{

    return (
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon/>
          </IconButton>
          <Typography variant="h6">
            INICIO
          </Typography>
        </Toolbar>
      </AppBar>
    );
  
}

export default NavBar;