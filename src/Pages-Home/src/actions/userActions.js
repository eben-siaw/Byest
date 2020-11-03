import {USER_AUTH, USER_LOGGEDIN} from './types'

export const setCurrentCustomer = (decoded) => { 
 
    return(dispatch) => { 
        dispatch({ 
            type: USER_AUTH, 
            payload: decoded
        })
        
    }


} 


export const setCustomerAuth = (boolean) => { 
 
    return(dispatch) => { 
        dispatch({ 
            type: USER_LOGGEDIN, 
            payload: boolean
        })
    }

}