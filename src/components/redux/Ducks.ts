import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProductosRD,ProductoRD,SouvenirActionTypes,GET_SOUVENIRS_EXITO,START_FETCH,GET_ONE_SOUVENIR_EXITO} from './types';
import { URL_BACKEND_GO } from '../Url';

axios.defaults.withCredentials = false;
//date
const souvenirData: ProductosRD = {
    souvenirs: [],
    souvenir: {
        _id: "",
        nombre: "",
        categoria: "",
        descripcion: "",
        imagenProducto: "",
        precio: "",
        stock: "",
        fecha: ""
    }
};
//reducer
export function souvenirReducer(state = souvenirData, action: SouvenirActionTypes): ProductosRD {
    switch (action.type) {
        case GET_SOUVENIRS_EXITO: return {...state, souvenirs:[...state.souvenirs,action.payload]};
        case GET_ONE_SOUVENIR_EXITO: return { ...state, souvenir:action.payload };        
        default: return state;
    }
}
export const getSouvenirs=()=>async(dispatch: any, getState: any) =>{
    const { Souvenir} = getState().productos;
    await axios.get(URL_BACKEND_GO + "/souvenir").then(res => {
        dispatch({
            type: GET_SOUVENIRS_EXITO,
            payload: res.data 
        })           
    }).catch(e => console.log("Error AXIOS", e));
}
export const getOneSouvenir = (id:string) => async (dispatch: any, getState: any) => {
    const { Souvenirs} = getState().productos;
    await axios.get(URL_BACKEND_GO+`/souvenir/${id}`).then(res => {
        dispatch({
            type: GET_ONE_SOUVENIR_EXITO,
            payload: res.data
        })           
    }).catch(e => console.log("Error AXIOS", e)); 
}