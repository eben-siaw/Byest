import axios from 'axios'; 

//const local = "http://localhost:5080";

const URL = "https://mekexpress-backend.herokuapp.com"

export const register = async (newCustomer) => { 
 
    try {
       return await axios.post(URL + "/customers/addcustomer", newCustomer);
      } catch (error) {
       console.log(error) 
   }
} 

export const login = async (customer) => { 
 try {
  const { data } = await axios.post(URL + "/customers/login", customer); 
  !data.error && localStorage.setItem("usertoken", data);  
  return data;
 } catch (error) {
    return {error : error.message}
 }
 
}