import { ADD_TO_CART, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';


// initial states of products fetched and a payload to be returned 

 // amount cart product [] .. {_id name price}

const initialState = {
    cart: 0,
    cartPrice: 0, 
    products: []
} 


// state of product is an initial array which returns a payload of the details of the products 

// to be added to the cart page

export default (state = initialState, action) => { 
  
    // we increase cart number and check if cart already exist 

    let productSelected = ""; 

    switch (action.type) { 

        case ADD_TO_CART: 
            
            productSelected = { ...state.products[action.payload]}
            productSelected.productQuantity += 1;
            productSelected.inCart = true; 
   
            const items = action.payload;  

            // check if cart selected already exists in the redux store
            const cartItems = state.products.find(item => item._id === items._id)
           
           if(cartItems) { 
            return {...state, products: state.products.map(item => item._id === cartItems._id ? items : item) }
           }
          
           // inserting a new cart
            return {
                ...state,
                cart: state.cart + 1,
                cartPrice: state.cartPrice + action.payload.productPrice,
                products: [ 
                    ...state.products, items
                ]
            }
            case GET_NUMBERS_BASKET:
            return {
                ...state
            } 

          case CLEAR_PRODUCT:   
            const selected = state.products.find(item => item._id === action.payload._id)
            return {
            ...state, 
            cartPrice:  state.cartPrice + action.payload.productPrice,
            cart: state.cart - 1,
            products: state.products.filter(item => item._id !== action.payload)  
                
         }    

           // Not going to be used  //
      /*  case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            productSelected.productQuantity += 1;
            return {
                ...state,
                cart: state.cart + 1 ,
                cartPrice: state.cartPrice + action.payload.productPrice,
                products: [ 
                    ...state.products, action.payload
                ]
        }

        case DECREASE_QUANTITY:
            productSelected = action.payload;
            let newCartPrice = 0;
            let newCartNumbers = 0;
            if (productSelected.productQuantity === 0) {
                productSelected.productPrice = 0
                newCartPrice = state.cartPrice
                newCartNumbers = state.cart
            }
            else {
                productSelected.productQuantity -= 1;
                newCartPrice = state.cartPrice - action.payload.productPrice;
                newCartNumbers = state.cart - 1
            }
            return {
                ...state,
                cart: newCartNumbers ,
                cartPrice: newCartPrice,
                products: [ 
                    ...state.products, action.payload
                ]
            } */

        default:
            return state;
    }
}