import * as React from 'react';

const Registro: React.FC<any> = ({}) =>{


  const escribiendo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
  };

 
    return (
      <React.Fragment>
        <h2>Registro</h2>
        <form>
          <input name="nombre" onChange={escribiendo} type="text"></input>
          <input name="password" onChange={escribiendo} type="text"></input>
          <button type="submit">Registrarse</button>
        </form>
      </React.Fragment>
    );
  
}

export default Registro;