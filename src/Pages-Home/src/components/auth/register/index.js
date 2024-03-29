import React, { Component } from 'react'
import {register} from '../authfunctions'
import {Link} from 'react-router-dom'; 
import{toast, ToastContainer} from 'react-toastify'

export default class Register extends Component {
    
    constructor(props) { 

        super(props); 
    
        this.state = {  
          full_name: "",  
          phone: "",  
          email: "", 
          password: ""
        } 
    
        this.handleOnChange = this.handleOnChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
       }
      

    handleOnChange(event) { 
     this.setState({[event.target.name]: event.target.value})
    } 
    
    handleSubmit(event) { 
   
     event.preventDefault();

    const newUser = {  
      fullName: this.state.full_name, 
      email: this.state.email, 
      password: this.state.password  
    }
     register(newUser).then(({data}) => {    
         if(!data.error) { 
            console.log(data); 
            toast("Success! Login to watch ads"); 
            window.location = "/login";
        }     
     })
    }
     
    render() { 

        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h3>Register</h3>
                        <h4><a href="/">Home</a><label>/</label>Register</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/*login*/}
                <div className="login">
                    <div className="main-agileits">
                        <div className="form-w3agile form1">
                            <h3>Sign Up</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="key">
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <input type="text" value={this.state.full_name} onChange={this.handleOnChange} placeholder="Full Name"  name="full_name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required />
                                    <div className="clearfix" />
                                </div>
                                <div className="key">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <input type="text" value={this.state.email} onChange={this.handleOnChange} placeholder="Email address"  name="email" required />
                                    <div className="clearfix" />
                                </div>
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                    <input value={this.state.password} type="password" onChange={this.handleOnChange} placeholder="Password"  name="password" required />
                                    <div className="clearfix" />
                                </div> 
                                <input type="submit" defaultValue="Sign Up" /> 
                                <ToastContainer/>
                            </form>
                        </div> 
                        <div className="forg">
                            <Link to="/login" className="forg-right">Login</Link>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
