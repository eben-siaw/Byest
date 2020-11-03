import axios from 'axios';
import { ADD_TO_CART , GET_NUMBERS_BASKET } from './types';

 const http = "http://localhost:5080";

export const addToCart = (cartproduct) => { 
     
    return(dispatch)=> {
      console.log(cartproduct);
     dispatch({
     type: ADD_TO_CART,
      payload: {  
      productName: cartproduct.productName, 
      productDescription: cartproduct.productDescription, 
      productPrice: cartproduct.productPrice, 
      productQuantity: cartproduct.productQuantity        
      }
    })      
        
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