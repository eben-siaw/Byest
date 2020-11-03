import { combineReducers } from 'redux';
import  productReducer  from './ProductsReducers'; 
import  {auth} from '../../../S-Admin/src/reducers/authreducer';
import {customer} from './CustomerReducers'

export default combineReducers({
    cartState: productReducer, 
    auth, 
    customer
}); 