import * as React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default class Home extends React.Component{

  
  componentDidMount() {
    this.traerCosas();
  }

 async traerCosas() {
   /*
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20").then((res) => {
      console.log(res.data);
    });*/
  }
  render() {
    return (
      <React.Fragment>
        <h2>Home</h2>

      </React.Fragment>
    );
  }
}