import axios from 'axios';
const formato = require("./formato.json");
import { ProductosRD,ProductoRD,SouvenirActionTypes,GET_SOUVENIRS_EXITO} from './types';

//date
const souvenirData: ProductosRD = {
    
    souvenirs: []
};

//reducer
export  function souvenirReducer(state=souvenirData, action:SouvenirActionTypes):ProductosRD{
        switch(action.type){
            case GET_SOUVENIRS_EXITO: return { souvenirs:[...state.souvenirs, action.payload]};
            default: return state; 
        }
}

//actions
export const getSouvenirs=()=> (dispatch:any,getState:any) => {
    //console.log("getState ", getState());
    try {
        //const res= await axios.get('')
        dispatch({
            type: GET_SOUVENIRS_EXITO,
            payload: formato 
        })
    }catch(error){
        console.log(error);
    }
}