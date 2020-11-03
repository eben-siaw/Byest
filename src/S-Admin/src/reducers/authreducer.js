import {IS_LOGGEDIN, AUTH_ADMIN, } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},  
};

export function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
      case AUTH_ADMIN:
      return { ...state,  
     user: action.payload };

      case IS_LOGGEDIN:
         return {
            ...state,
            isLoggedIn: action.payload,
         };
    
    default:
      return state;
  }
}