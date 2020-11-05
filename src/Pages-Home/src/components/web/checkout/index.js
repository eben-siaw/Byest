import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Summarycart from './summarycart';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import jwtdecode from 'jwt-decode'; 
import { Button, TextField } from '@material-ui/core';
import {setCustomerAuth, setCurrentCustomer} from '../../../actions/userActions';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

 const URL = "https://mekexpress-backend.herokuapp.com";

 const http = "http://localhost:5080";

class Checkout extends Component { 
 
   constructor(props) { 
    super(props);  

    this.state = { 
     address: "", 
     locality: "",  
     phone: "", 
     pincode: "",
     city: "", 
     name: "", 
     state: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
   }
    
  
   handleCancel () { 
    window.location = "/";   
   }

   handleSubmit(event) { 
  
    const {adminId} = this.props.match.params;

    event.preventDefault(); 
   
   const data = {  
    admin: adminId,     
    address: this.state.address, 
    locality: this.state.locality, 
    city: this.state.city,  
    phone: this.state.phone,
    name: this.state.name, 
    state: this.state.state    
   }
   
   console.log(data);

    axios.post(URL + `/orders/requestOrder`, data)
    .then(response => { 
        if(response.data.message) {  
         toast("Order submitted successfully!"); 
         window.location = "/";
         return response.data; 
        }
    })
     .catch(err => { 
       console.log(err);  
    })
   }

    render() { 
      const {address, phone, name, pincode, locality, city, state} = this.state
        return (
            <div> 
                <Grid className="grid-wrapper" container>
                    <Grid item md={2} xl={2} lg={2}></Grid>
                    <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                               
                                {/* 1st step block address */}
                                <Paper > 
                                    <div className="paper-content">  
                                    <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj"></span><span className="_1_m52b">STEP 1</span></h3>
                                    <Grid container spacing={4} className="address_bk_checkout "> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined"   
                                              defaultValue={this.state.name}
                                              onChange={event => {
                                                const { value } = event.target; 
                                                console.log(value);
                                                this.setState({ name: value });  }}
                                              className="text-input" placeholder="Your Name" />
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined" defaultValue={this.state.phone}
                                              onChange={event => {
                                                const { value } = event.target; 
                                                console.log(value);
                                                this.setState({phone: value });  }} 
                                                className="text-input"  placeholder="Phone number" />
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined" defaultValue={this.state.pincode} 
                                             className="text-input"  placeholder="Pincode"  
                                             onChange={event => {
                                             const { value } = event.target;
                                             this.setState({ pincode: value });  }}/>
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined"  defaultValue={this.state.locality}  
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ locality: value });  }}
                                            className="text-input"  placeholder="Locality" />
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={12} lg={12}>
                                            <TextField variant="outlined"  defaultValue={this.state.address}  
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ address: value });  }}
                                             className="text-input" placeholder="Address(Area and Street)" />
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined" defaultValue={this.state.city} 
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ city: value });  }}
                                             className="text-input"  placeholder="City/District/Town" />
                                        </Grid> 

                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <TextField variant="outlined" defaultValue={this.state.city} 
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ state: value });  }}
                                               className="text-input"  placeholder="State" />
                                        </Grid> 

                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            
                                            <br/>
                                         <div>
                                            <Button onClick={event => this.handleSubmit(event)} size="large" className="button-inline" color="primary" variant="contained">SUBMIT ORDER</Button> 
                                            <Button onClick={this.handleCancel} color="secondary" variant="contained" className="button-inline" size="large">Cancel</Button> 
                                            <ToastContainer/>
                                        </div> 

                                        </Grid>
                                    </Grid> 
                                    </div>
                                </Paper>
                                {/* 2nd end block address */}
                                <Summarycart />

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                                <Paper>
                                    <span className="summary_price_cart_details">Price details</span>
                                    <div className="_2twTWD">
                                        <div className="hJYgKM">
                                            <div className="_10vVqD">Price ({this.props.cartProps.cart} item)</div>
                                            <span> GH₵{this.props.cartProps.cartPrice}</span>
                                        </div>
                                        <div className="hJYgKM">
                                            <div className="_10vVqD">Delivery Fee</div>
                                            <span><span className="_27kB8M _3Oa-sk">Free</span></span>
                                        </div>
                                        <div className="_3xFQAD">
                                            <div className="hJYgKM">
                                                <div className="_10vVqD">Total Amount</div>
                                                <span>
                                                    <div className="tnAu1u">
                                                        <span > GH₵{this.props.cartProps.cartPrice}</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_22vQVX">You will save GH₵210 on this order</div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} xl={2} lg={2}></Grid>
                </Grid> 
                <style jsx>{` 
                  .grid-wrapper { 
                    padding-top: 150px;
                   }   

                   .paper-content {
                    padding-left: 50px;    
                   }  

                   .text-input { 
                     width: 300px;  
                   }  

                   .order-btn { 
                     padding: 14px;
                   }  

                   .button-inline { 
                    display:inline-block;
                    margin-right:5px;    
                   }
                `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity, clearProduct, setCurrentCustomer, setCustomerAuth})(Checkout);