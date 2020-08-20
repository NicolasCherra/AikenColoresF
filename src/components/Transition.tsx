import * as React from 'react';
import useStyle from './Styles';

const Transition: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.TransicionPage}>
      <h2>Cargando</h2>
    </div>
  )
}
export default Transition;