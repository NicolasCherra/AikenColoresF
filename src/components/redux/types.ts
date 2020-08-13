export interface IStateRedux{
  productos: ProductosRD
}

export const GET_SOUVENIRS_EXITO = "GET_SOUVENIRS_EXITO";
export const START_FETCH = "START_FETCH";
export const GET_ONE_SOUVENIR_EXITO = "GET_ONE_SOUVENIR_EXITO";

export interface ProductoRD{
  _id: string
  nombre: string
  categoria: string
  descripcion: string
  imagenProducto: string
  precio: string
  stock: string
  fecha: string
}
export interface ProductosRD{
  souvenirs: ProductoRD[],
  souvenir:ProductoRD
}
interface SouvenirGetAction {
  type: typeof GET_SOUVENIRS_EXITO
  payload: ProductoRD
}

interface SouvenirGetOneAction {
  type: typeof GET_ONE_SOUVENIR_EXITO
  payload: ProductoRD
}

interface SouvenirStartGetAction {
  type: typeof START_FETCH
  payload: ProductoRD
}

export type  SouvenirActionTypes = SouvenirGetAction | SouvenirStartGetAction | SouvenirGetOneAction;

