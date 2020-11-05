import axios from 'axios'; 

const local = "http://localhost:5080";

export const register = async (newCustomer) => { 
 
    try {
       return await axios.post(local + "/customers/addcustomer", newCustomer)
       .then(res => {   
        console.log(res.data)
        return res.data;
      })
      } catch (error) {
       console.log(error) 
   }
    
} 


export const login = async (customer) => { 

 const {data} = await axios.post(local + "/customers/login", customer); 
 localStorage.setItem("customertoken", data); 
 window.location = "/cart"
}