import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { souvenirReducer }  from './Ducks'

const rootReducer = combineReducers({
    productos: souvenirReducer
})
export const composeEnhancers =(window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store;
}