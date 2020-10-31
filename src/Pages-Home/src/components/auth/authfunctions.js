import axios from 'axios'; 

const local = "http://localhost:5000";

export const register = async (newCustomer) => { 
 
    try {
       return await axios.post(local + "/customer/addcustomer", newCustomer)
       .then(res => { 
       return res.data;
      })
    } catch (error) {
       console.log(error) 
    }
    
} 


export const login = async (customer) => { 

 const {data} = await axios.post(local + "/customer/login", customer)
 data.status && localStorage.setItem("customertoken"); 
 return data;

}