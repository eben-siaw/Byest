import axios from 'axios'; 

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
         window.location = "/admin/page"
         localStorage.setItem("admintoken", response.data);
        }  
    })
    
    } catch (error) {
        console.log(error);
    }

}