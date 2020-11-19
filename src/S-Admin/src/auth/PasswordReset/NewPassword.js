import React, { Component } from "react";   
import {Link} from 'react-router-dom';
import {NewPassword} from '../Functions';
import "../Page.css";
import { IconButton } from "@material-ui/core";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const isformValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
}
class ChangePassword extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      password2: "",
      errorMessage: "",
      formErrors: {
        password: "",
        password2: ""
      }
    };
  }

    
  componentWillMount() {
   if (localStorage.getItem("admintoken")) window.location = "/admin/page";
  }

  homeClick = () => { 
    window.location = "/";
  }
 
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "password":
        formErrors.password = value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "password2":
        formErrors.password2 = value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      default:
        break;
    }
    
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
   
  handleSubmit = async (event) => { 

    event.preventDefault(); 
    
    const {token} = this.props.match.params;

    const details = { 
      password: this.state.password,
      password2: this.state.password2,  
      token: token
    } 
    
     const password = this.state.password; 
     const password2 = this.state.password2; 
     
     if(password !== password2) { 
      this.setState({ errorMessage: "Passwords do not match" });
      setTimeout(() => this.setState({ errorMessage: "" }), 3050); 
      return null;
     }

     const results = await NewPassword(details);  

      console.log(results.data); 

      if(results.data.error) {  
      toast("An error occured!") 
      this.setState({ errorMessage: results.data.error});
      setTimeout(() => this.setState({ errorMessage: "" }), 3050);
      } else {  
       toast("Success! Login with your new password!"); 
         window.location.href = "/admin/auth"; 
     }
  
  }; 

  render() {  

    const inputs = document.querySelectorAll(".signtext");

       function addcl(){
    	let parent = this.parentNode.parentNode;
	    parent.classList.add("focus");
      }

        function remcl(){
	     let parent = this.parentNode.parentNode;
	     if(this.value == ""){
	    	parent.classList.remove("focus");
	    }
    }

    inputs.forEach(input => {
   	input.addEventListener("focus", addcl);
  	input.addEventListener("blur", remcl);
   });


    const { formErrors, errorMessage } = this.state;

    return ( 

    <main> 
        <img className="wave" src="/img/wave.png" />
	    <div className="container"> 
        
	    	<div className="img">
		     	<img src="/img/bg.svg" />
	      </div>  
	      <div class="login-content"> 
		     	<form onSubmit={this.handleSubmit}> 
           <img src="/img/avatar.svg" />
			    	<h2 className="title">New Password</h2>  
            <small style={{color: 'red'}}> {errorMessage} </small> 

            <div className="signtext-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5 className="headtitle"></h5>
                      <input type="password" placeholder="Enter New Password" name="password" className="signtext" 
                      onChange={this.handleChange} required/> 
                       {formErrors.password.length > 0 && (
                    <div error={formErrors.password} className="errorMessage"> 
                    !
                    </div>
                )}
           		   </div>
           		</div>
           		<div className="signtext-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5 className="headtitle"></h5>
           		    	<input type="password" placeholder="Confirm Password" name="password2" className="signtext"  
                     onChange={this.handleChange} required/> 
                      {formErrors.password2.length > 0 && (
                <div error={formErrors.password2} className="errorMessage"> 
                !</div>
                )}
            	</div> 
             </div>
            	<Link to="/admin/auth">Sign in instead?</Link>
            	<input type="submit" className="btn" value="Update Password"/> 
              <ToastContainer/>
            </form>
        </div>
      </div>  
      <style jsx>{` 
      .wave{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 100%;
        z-index: -1;
      }
      
      .container{
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 7rem;
          padding: 0 2rem;
      }
      
      .homeicon { 
        position: absolute; 
        top: 20px; 
        cursor: pointer;
      }

      .errorMessage { 
        background: red;
        color: #fff;
        font-size: 12px;
        justify-content: center;
        position: absolute;
        top: 10px;
        right: 5px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 11px;
        font-weight: bold;
      } 

      .errorMessage:hover::after {
        display: block;
        animation: fade-slide-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -webkit-animation: fade-slide-up 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      } 

      .errorMessage::after {
        position: absolute;
        content: attr(error);
        min-width: 150px;
        bottom: 150%;
        padding: 10px;
        background: rgba(255, 0, 0, 0.212);
        color: red;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        -o-border-radius: 10px;
        text-align: center;
        display: none;
      }
      
      .errorMessage::before {
        position: absolute;
        content: "";
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        -webkit-border-radius: inherit;
        -moz-border-radius: inherit;
        -ms-border-radius: inherit;
        -o-border-radius: inherit;
        background: rgba(255, 0, 0, 0.315);
        animation: blink-fade 1s linear infinite;
        -webkit-animation: blink-fade 1s linear infinite;
      } 

      @keyframes fade-slide-up {
        0% {
          transform: translateY(10px);
          -webkit-transform: translateY(10px);
          -moz-transform: translateY(10px);
          -ms-transform: translateY(10px);
          -o-transform: translateY(10px);
          opacity: 0;
        }
      } 

      @keyframes blink-fade {
        0% {
          transform: scale(0);
          -webkit-transform: scale(0);
          -moz-transform: scale(0);
          -ms-transform: scale(0);
          -o-transform: scale(0);
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: scale(1.8);
          -webkit-transform: scale(1.8);
          -moz-transform: scale(1.8);
          -ms-transform: scale(1.8);
          -o-transform: scale(1.8);
          opacity: 0;
        }
      }
      .img{
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      
      .login-content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: center; 
      }
      
      .img img{
        width: 500px;
      }
      
      form{
        width: 360px;
      }
      
      .login-content img{
          height: 100px;
      }
      
      .login-content h2{
        margin: 15px 0;
        color: #333;
        text-transform: uppercase;
        font-size: 2.1rem;
      }
      
      .login-content .signtext-div{
        position: relative;
          display: grid;
          grid-template-columns: 7% 93%;
          margin: 25px 0;
          padding: 5px 0;
          border-bottom: 2px solid #d9d9d9;
      }
      
      .login-content .signtext-div.one{
        margin-top: 0;
      }
      
      .i{
        color: #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .i i{
        transition: .3s;
      }
      
      .signtext-div > div{
          position: relative;
        height: 45px;
      }
      
      .signtext-div > div > .headtitle{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        font-size: 18px;
        transition: .3s;
      }
      
      .signtext-div:before, .signtext-div:after{
        content: '';
        position: absolute;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: #38d39f;
        transition: .4s;
      }
      
      .signtext-div:before{
        right: 50%;
      }
      
      .signtext-div:after{
        left: 50%;
      }
      
      .signtext-div.focus:before, .signtext-div.focus:after{
        width: 50%;
      }
      
      .signtext-div.focus > div > .headtitle{
        top: -5px;
        font-size: 15px;
      }
      
      .signtext-div.focus > .i > i{
        color: #38d39f;
      }
      
      .signtext-div > div > input{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
        color: #555;
        font-family: 'poppins', sans-serif;
      }
      
      .signtext-div.pass{
        margin-bottom: 4px;
      }
      
      a{
        display: block;
        text-align: right;
        text-decoration: none;
        color: #999;
        font-size: 0.9rem;
        transition: .3s;
      }
      
      a:hover{
        color: #38d39f;
      }
      
      .btn{
        display: block;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        background-size: 200%;
        font-size: 1.2rem;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        margin: 1rem 0;
        cursor: pointer;
        transition: .5s;
      }
      .btn:hover{
        background-position: right;
      }
      
      
      @media screen and (max-width: 1050px){
        .container{
          grid-gap: 5rem;
        }
      }
      
      @media screen and (max-width: 1000px){
        form{
          width: 290px;
        }
      
        .login-content h2{
              font-size: 2.4rem;
              margin: 8px 0;
        }
      
        .img img{
          width: 400px;
        }
      }
      
      @media screen and (max-width: 900px){
        .container{
          grid-template-columns: 1fr;
        }
      
        .img{
          display: none;
        }
      
        .wave{
          display: none;
        }
      
        .login-content{
          justify-content: center;
        }
      }
      `}  
      </style>
    </main>
    );
  }
}

export default ChangePassword;
