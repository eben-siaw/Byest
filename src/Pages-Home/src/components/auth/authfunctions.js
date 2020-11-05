import axios from 'axios'; 

const local = "http://localhost:5080";

const URL = "https://mekexpress-backend.herokuapp.com"

export const register = async (newCustomer) => { 
 
    try {
       return await axios.post(URL + "/customers/addcustomer", newCustomer)
       .then(res => {   
        console.log(res.data)
        return res.data;
      })
      } catch (error) {
       console.log(error) 
   }
    
} 


export const login = async (customer) => { 

 const {data} = await axios.post(URL + "/customers/login", customer); 
 localStorage.setItem("customertoken", data); 
 window.location = "/cart"
}