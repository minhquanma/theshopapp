import { combineReducers, createStore } from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
