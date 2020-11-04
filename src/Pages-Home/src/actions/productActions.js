import axios from 'axios';
import { ADD_TO_CART , GET_NUMBERS_BASKET } from './types';

 const http = "http://localhost:5080";

export const addToCart = (cartproduct) => { 
     
    return(dispatch)=> {
      console.log(cartproduct);
     dispatch({
     type: ADD_TO_CART,
      payload: cartproduct 
    
    });      
 }

}

export const getCartNumbers = ()=> {
    return(dispatch)=> {
        // console.log("getting total cart in basket")
        dispatch({
            type: GET_NUMBERS_BASKET,
            // payload: item
        });
    }
}