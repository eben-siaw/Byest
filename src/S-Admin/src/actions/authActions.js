import {AUTH_ADMIN, IS_LOGGEDIN} from './types'


export const SetCurrentAdmin = (decoded) => { 

 return { 
   type: AUTH_ADMIN, 
   payload: decoded  
 }

} 

export const isAuth = (boolean) => { 

  return { 
    type: IS_LOGGEDIN, 
    payload: boolean
  }

}