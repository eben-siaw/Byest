import axios from 'axios'; 

const http = "http://localhost/5000";

export const register = (newUser) => { 
 
    try {
        return axios.post(http + "/register", newUser) 
        .then(results => { 
           return results.data;
        });
    } catch (error) {
        console.log(error);
    }
  

} 

export const login = (user) => { 
    try {
    const {data} = axios.post(http + "/login", user) 
     return data.status && localStorage.setItem("admintoken")  
    } catch (error) {
        console.log(error);
    }

}