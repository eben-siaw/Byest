import { Divider } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, status: 0, loading: false }
    }

    handleOpen(e) {
        document.getElementById("mySidenav").style.width = "250px";
    }

    handleClose(e) {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div>
                <div className="list_dropdown">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" onClick={(e) => this.handleOpen()}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                </div>
                <div id="mySidenav" className="sidenav" >
                    <ul onClick={(e) => this.handleClose()}>
                        <li><Link to="#" className="closebtn">&times;</Link></li>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-home"></i> <Link style={{display: 'inline-block'}} to="/">Home</Link> </li>  
                        <Divider/>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-lock"></i> <Link style={{display: 'inline-block'}} to="/login">Login</Link></li> 
                        <Divider/>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-list-alt"></i> <Link style={{display: 'inline-block'}} to="/categories">Shop By Category</Link></li>  
                        <Divider/>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-video"></i>  <Link style={{display: 'inline-block'}} to="/videos"> Videos</Link> </li> 
                        <Divider/>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-shopping-cart"></i> <Link style={{display: 'inline-block'}} to="/carts">My Cart</Link></li>  
                        <Divider/>
                        <li><i style={{display: 'inline-block', color: 'orange'}} className="fas fa-user-alt"></i> <a style={{display: 'inline-block'}} href="/admin/auth">POST A PRODUCT</a></li>   
                        <Divider/>            
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;