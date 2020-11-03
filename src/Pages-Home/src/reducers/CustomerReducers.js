import {USER_AUTH, USER_LOGGEDIN } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},  
};

export function customer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case USER_AUTH:
      return { ...state,  
     user: action.payload };

      case USER_LOGGEDIN:
         return {
            ...state,
            isLoggedIn: action.payload,
         };
    
    default:
      return state;
  }
}