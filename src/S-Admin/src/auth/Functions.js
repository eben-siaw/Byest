import axios from 'axios'; 

const URL = "https://mekexpress-backend.herokuapp.com";

const http = "http://localhost:5080";

export const register = (newUser) => { 
    try {
        return axios.post(URL + "/admins/register", newUser); 
    } catch (error) {
        console.log(error);
    }
  
} 

export const login = async (user) => { 
    try {
    const {data} = await axios.post(URL + "/admins/login", user)   
    !data.error && localStorage.setItem("admintoken", data);
     return data;  
    } catch (error) {
      return {error: error.message};
    }

}