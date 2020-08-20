import * as React from 'react';
import useStyle from '../Styles';

const Login: React.FC<any> = ({ }) => {
  const classes = useStyle();

  const escribiendo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
  };
  
    return (
      <React.Fragment>
        <h2>Entrar</h2>
        <form className={classes.loginFormulario}>
          <input name="nombre" onChange={escribiendo} type="text"></input>
          <input name="password" onChange={escribiendo} type="text"></input>
          <button type="submit">Registrarse</button>
        </form>
      </React.Fragment>
    );
}
export default Login;