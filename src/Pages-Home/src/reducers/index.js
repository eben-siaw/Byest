import { combineReducers } from 'redux';
import  productReducer  from './ProductsReducers';

export default combineReducers({
    cartState: productReducer
}); 