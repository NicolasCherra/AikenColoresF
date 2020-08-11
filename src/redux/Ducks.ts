import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProductosRD,ProductoRD,SouvenirActionTypes,GET_SOUVENIRS_EXITO,START_FETCH} from './types';
import { URL_BACKEND_GO } from '../Url';

axios.defaults.withCredentials = false;
//date
const souvenirData: ProductosRD = {
    souvenirs: []
};
//reducer
export function souvenirReducer(state = souvenirData, action: SouvenirActionTypes): ProductosRD {
    switch (action.type) {
        case START_FETCH: return { souvenirs: [...state.souvenirs, action.payload] };
        case GET_SOUVENIRS_EXITO: return { souvenirs: [...state.souvenirs, action.payload] };
        default: return state;
    }
}
export const getSouvenirs=()=>async(dispatch: any, getState: any) =>{
    let recibido = false;
    await axios.get(URL_BACKEND_GO + "/souvenir").then(res => {
        dispatch({
            type: GET_SOUVENIRS_EXITO,
            payload: res.data
        })           
    }).catch(e => console.log("Error AXIOS", e)); 
    return recibido;
}