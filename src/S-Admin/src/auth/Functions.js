import { toast } from 'react-toastify';
import axios from 'axios'; 

const URL = "https://mekexpress-backend.herokuapp.com";

const http = "http://localhost:5080";

export const register = (newUser) => { 
    try {
        return axios.post(http + "/admins/register", newUser) 
        .then(results => {  
            console.log(results.data);
           return results.data;
        });
    } catch (error) {
        console.log(error);
    }
  

} 

export const login = async (user) => { 
    try {
    return await axios.post(http + "/admins/login", user)   
    .then(response => {  
        if(response.data) {  
         toast("Welcome back!")   
         window.location = "/admin/page"
         localStorage.setItem("admintoken", response.data);
        }  
    })
    
    } catch (error) {
        console.log(error);
    }

}