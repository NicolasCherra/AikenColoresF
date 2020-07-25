import * as React from 'react';

export default class Registro extends React.Component<any,any>{


  constructor(props:any) {
    super(props);
    this.state = {
      nombre: '',
      password: ''
    }
  }

  nuevoUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    /*
    await axios.post(urlMasPort+'/signin',
        {
            usuario: this.state.usuario,
            email: this.state.email,
            password: this.state.password
        }).then((res)=>
        {
            console.log(res);
            window.location.href='/';
        }).catch((err)=>
        {
            console.log(err);
            document.getElementById('error').innerHTML="ERROR";
            //TRATMIENTO DE ERRORES Y MOSTRARLO
        });*/
    console.log("sabing");
  }

  escribiendo(e: React.ChangeEvent<HTMLInputElement>){
    const {name,value } = e.target;
    console.log(value);
    this.setState({[name]: value});
  }

  render() {
    return (
      <React.Fragment>
        <h2>Registro</h2>
        <form onSubmit={e => this.nuevoUsuario(e)}>
          <input name="nombre" onChange={e => this.escribiendo(e)} type="text"></input>
          <input name="password" onChange={e => this.escribiendo(e)} type="text"></input>
          <button type="submit">Registrarse</button>
        </form>
      </React.Fragment>
    );
  }
}