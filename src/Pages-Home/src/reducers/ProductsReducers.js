import { ADD_TO_CART, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';


// initial states of products fetched and a payload to be returned 

 // amount cart product [] .. {_id name price}

const initialState = {
    cart: 0,
    cartPrice: 0, 
    products: []
} 

// action.payload is the returned data from the server 

// state of product is an initial array which returns a payload of the details of the products 

// to be added to the cart page

export default (state = initialState, action) => { 

    let productSelected = ""; 

    switch (action.type) { 

        case ADD_TO_CART: 

            productSelected = { ...state.products}
            productSelected.numbers += 1;
            productSelected.inCart = true;

            return {
                ...state,
                cart: state.cart + 1,
                cartPrice: state.cartPrice + action.payload.productPrice,
                products: {
                    ...state.products, products: action.payload
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            productSelected.numbers += 1;
            return {
                ...state,
                cart: state.cart +1 ,
                cartPrice: state.cartPrice + state.products[action.payload.productPrice],
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload] }
            let newCartPrice = 0;
            let newCartNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0
                newCartPrice = state.cartPrice
                newCartNumbers = state.cart
            }
            else {
                productSelected.numbers -= 1;
                newCartPrice = state.cartPrice - state.products[action.payload.productPrice]
                newCartNumbers = state.cart - 1
            }
            return {
                ...state,
                cart: newCartNumbers ,
                cartPrice: newCartPrice,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload] };
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0 ;
            productSelected.inCart = false
            return {
                ...state,
                cartPrice: state.cartPrice - (numbersBackup * productSelected.productPrice),
                cart: state.cart - numbersBackup,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        default:
            return state;
    }
}