import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {login} from '../authfunctions';

export default class Login extends Component { 
   
   constructor(props) { 

    super(props); 

    this.state = { 
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

   const user = { 
     email: this.state.email, 
     password: this.state.password  
   } 
   
    login(user).then(res => { 
       console.log(res); 
    })
   }

    render() { 

        return (
            <div>
                {/*banner*/}
                <div className="banner-top">
                    <div className="container">
                        <h3>Customer Login</h3>
                        <h4><Link to="/">Home</Link><label>/</label>Login</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/*login*/}
                <div className="login">
                    <div className="main-agileits">
                        <div className="form-w3agile">
                            <h3>Login</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="key">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <input type="text" onChange={this.handleOnChange} placeholder="Email" name="email" 
                                    value={this.state.email}/>
                                    <div className="clearfix" />
                                </div>
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                    <input type="password" onChange={this.handleOnChange} placeholder="Password" defaultValue="Password" name="password" 
                                    value={this.state.password} />
                                    <div className="clearfix" />
                                </div>
                                <input type="submit" defaultValue="Login" />
                            </form>
                        </div>
                        <div className="forg">
                            <Link to="#" className="forg-left">Forgot Password</Link>
                            <Link to="/register" className="forg-right">Register</Link>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
