import * as Redux from 'redux';
import numeroReducer from './reducers/numeros';

const reducers = Redux.combineReducers({
    numeros: numeroReducer,
});

function storeConfig() {
    return Redux.createStore(reducers);
}

export default storeConfig;