import React, { Component } from "react"; 
import {register} from './Functions' 
import {Link} from 'react-router-dom';
import "./Page.css";

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
};

class Register extends Component { 

  constructor(props) { 

    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null, 
      phone: null, 
      address: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "", 
        email: "",
        phone: "", 
        address: "",
        password: ""
      }
    };
  }

  handleSubmit = async (event) => { 
   
    event.preventDefault();

    const newUser = { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email, 
        phone: this.state.phone, 
        address: this.state.address,
        password: this.state.password
    } 
    if(isformValid(this.state)) {
      await register(newUser)
      .then(res => {  
        console.log(res);
        window.location = "/admin/auth";
      }) 
      .catch(error => { 
        console.log(error)
      })
    } 
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break; 

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break; 

        case "phone":
          formErrors.phone = value.length < 7
            ? "Phone number should be more than 7 characters"
            : "";
          break;

      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <main className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div> 

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>  

            <div className="email">
              <label htmlFor="email">Phone Number</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Phone number"
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div> 

            <div className="email">
              <label htmlFor="email">Address</label>
              <input
                className={formErrors.address.length > 0 ? "error" : null}
                placeholder="Address"
                type="text"
                name="address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.address}</span>
              )}
            </div> 

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div> 

            <div className="createAccount">
              <button type="submit">Create Account</button>
            </div> 
           <Link style={{textDecoration: 'none'}} to="/admin/auth"> <small>  Already Have an Account? Login</small>  </Link>
          </form>
        </div>  
      <style jsx>{` 
      .wrapper { 
        background: rgb(34,193,195);
        background: linear-gradient(135deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
        font-family: "work sans";
        height: 100vh;
        width: 100%;  
        margin: 0px; 
        font-family: 'Ubuntu', sans-serif;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .form-wrapper {
        width: 400px;
        display: flex;
        flex-direction: column;
        padding: 20px 40px; 
        
        border-radius: 10px;
        box-shadow: 0px 10px 50px #555;
        background-color: #ffffff;
      }
      
      form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      
      h1 {
        text-align: center;
        width: 100%;
        color: #111;
        font-weight: lighter;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      
      label {
        font-size: 0.8em;
        margin-bottom: 0.25em;
        color: #222;
        font-weight: lighter;
      }
      
      input {
        padding: 10px 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #cfcfcf;
      }
      
      input::placeholder {
        font-size: 1.2em;
        font-weight: lighter;
        color: #999;
      }
      
      input.error {
        border: 1px solid red;
      }
      
      .errorMessage {
        color: red;
        font-size: 0.75em;
        display: relative;
      }
      
      .firstName {
        margin-right: 1%;
      }
      
      .lastName {
        margin-left: 1%;
      }
      
      .firstName,
      .lastName,
      .email,
      .password {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
      }
      
      .firstName,
      .lastName {
        width: 49%;
      }
      
      .email,
      .password {
        width: 100%;
      }
      
      .createAccount {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .createAccount button {
        border-radius: 25px;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(34,193,195);
        background: linear-gradient(90deg, rgba(34,193,195,1) 0%,  rgba(253,187,45,1) 100%);
        border: 0px;
       cursor: pointer;
       transition: opacity 0.25s ease-out;
}
      }
      
      .createAccount button:hover {
        opacity: 0.8;
      }
      
      .createAccount small {
        color: #999;
        font-weight: lighter;
      }           
    
      @media (max-width: 480px) { 
        .wrapper {
          margin: 0 18px; 
          background: #fff;
        }
        
        form {
          background: #f9faff;
          border: none;
          box-shadow: none;
          padding: 20px 0;
        } 
        .form-wrapper { 
          max-width: 240px; 
        }
      }
      `} 
      </style>
      </main>
    );
  }
}

export default Register;
