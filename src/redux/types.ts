export interface IStateRedux{
  productos: {
    souvenirs: ProductoRD[]
  }
}


export const GET_SOUVENIRS_EXITO = "GET_SOUVENIRS_EXITO";
export interface ProductoRD{
  id: number
  nombre: string
  categoria: string
  descripcion: string
  imagen: string
  precio: number
  stock: number
  fecha: string
}
export interface ProductosRD{
  
  souvenirs: ProductoRD[]
}
interface SouvenirGetAction {
  type: typeof GET_SOUVENIRS_EXITO
  payload: ProductoRD
}

export type  SouvenirActionTypes = SouvenirGetAction;

