import { combineReducers, createStore } from 'redux';
import productReducer from './products';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

export default store;
