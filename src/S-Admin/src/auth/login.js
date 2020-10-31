import React, { Component } from "react";   
import {Link} from 'react-router-dom';
import {login} from './Functions';
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

class Login extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = async e => { 

    e.preventDefault(); 

    const user = { 
      email: this.state.email, 
      password: this.state.password
    }
    if (isformValid(this.state)) {
       await login(user).then(res => { 
       if(res) { 
        window.location = "/admin/dasboard/main"
       } 

     })

    } 
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() { 

    const { formErrors } = this.state;

    return ( 

      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
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
              <button type="submit">Login</button> 
              <Link to="/admin/dashboard/register"> <small> Create an account?</small>  </Link>
            </div>
          </form>
        </div> 
        <style jsx>{`
         .wrapper {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #258ea6;
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
          background-color: #519e8a;
          color: #fff;
          border: 2px solid #fff;
          width: 100%;
          margin-top: 1em;
          padding: 8px 0px;
          font-size: 1em;
          font-weight: lighter;
          letter-spacing: 1px;
          margin-bottom: 0.25em;
        }
        
        .createAccount button:hover {
          color: #519e8a;
          background-color: #fff;
          border: 2px solid #519e8a;
        }
        
        .createAccount small {
          color: #999;
          font-weight: lighter;
        }        
         `} 
        </style>
      </div>
    );
  }
}

export default Login;
