import * as React from 'react';
import useStyle from '../Styles';

const Footer: React.FC<any> = ({}) =>{
  const classes = useStyle();

    return (
      <footer className={classes.Footer} >
        footer
      </footer>
    );
}
export default Footer;