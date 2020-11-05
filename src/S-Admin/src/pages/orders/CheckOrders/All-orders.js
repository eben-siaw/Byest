import React, { Component } from 'react'; 
import './style.css'; 
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import {useSelector} from 'react-redux';
import OftadehLayout from '../../../components/AdminLayout/OftadehLayout';
import './Orders.css'; 

 const BASE_URL = "";

 const http = "http://localhost:5080";

  
 export default function AllOrders() { 
     
   const admin = useSelector(state => state.auth.user._id);

    const [Orders, setOrders] = useState([]); 
    
    const [ordersCount, setOrdersCount] = useState(0); 
     
    const FetchOrders = () => {   

     axios.get(http + `/orders/getOrders/${admin}`) 
     .then(response => { 
         if(response.data.message) {  
             console.log(response.data)
           setOrders(response.data.orders);  
         } 
     })
    }

   // get number of orders 
   const CheckCount = () => { 

    axios.get(http + `/orders/getOrders/${admin}`)
    .then(response => { 
      if(response.data.message) { 
        setOrdersCount(response.data.orders.lenght);  
      }  
     })
    }

    useEffect(() => { 
     FetchOrders(); 
     CheckCount();
     }, [])

        return ( 

         <OftadehLayout>   
            <div> 
                  <div> 

                        <h2 className="mt-30 page-title">My Orders</h2>
                        <ol className="breadcrumb mb-30">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol> 

                        <div className="container-fluid">         
                              <div className="box-card"> 
                                <div className="dashboard-report-card purple">
                                    <div className="card-content">
                                        <span className="card-title">Orders from customers</span>
                                        <span className="card-count">{ordersCount}</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fab fa-rev" />
                                    </div>
                                </div>
                             </div>
                            

                                <div className="box-card"> 
                                <div className="dashboard-report-card red">
                                    <div className="card-content">
                                        <span className="card-title">Order Cancel</span>
                                        <span className="card-count">0</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="far fa-times-circle" />
                                    </div>
                                </div>
                                </div>

                             <div className="box-card"> 
                                <div className="dashboard-report-card info">
                                    <div className="card-content">
                                        <span className="card-title">Order Process</span>
                                        <span className="card-count">5</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-sync-alt rpt_icon" />
                                    </div>
                                </div>
                            </div>
                                <div className="box-card"> 
                                <div className="dashboard-report-card success">
                                    <div className="card-content">
                                        <span className="card-title">Target Income</span>
                                        <span className="card-count">$9568.00</span>
                                    </div>
                                    <div className="card-media">
                                        <i className="fas fa-money-bill rpt_icon" />
                                    </div>
                                </div>
                            </div>
                        </div>    

                           {/* Table column */}
                            <div className="col-xl-12 col-md-12">
                                <div className="card card-static-2 mb-30">
                                    <div className="card-title-2">
                                        <h4>Recent Orders</h4>
                                        <a href="orders.html" className="view-btn hover-btn">View All</a>
                                    </div> 

                                    <div className="card-body-table">
                                        <div className="table-responsive">
                                            <table className="table ucp-table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: 130 }}>Product Name</th>
                                                        <th style={{ width: 130 }}>Customer's Name</th>
                                                        <th style={{ width: 200 }}>Address</th>
                                                        <th style={{ width: 200 }}>Phone Number</th>
                                                        <th style={{ width: 130 }}>Location</th>
                                                        <th style={{ width: 130 }}>State</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                        {Orders.map((orders, index) => {  

                                        return (                    
                                               <tr >
                                               <td>orders</td> 

                                                <td>{orders.name}</td> 

                                               <td>{orders.address} </td> 

                                               <td>{orders.phone}</td> 

                                                <td>{orders.locality}</td>  

                                                <td>&#8377;{orders.state}</td>
                                               <td className="action-btns">

                                                   <i className="fas fa-eye" />

                                                   <i className="fas fa-edit" />
                                               </td>
                                           </tr>
                                        )})}                        
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                

                <footer className="py-4 bg-footer mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted-1">© 2020 <b>Mekexpress</b>.</div>
                            <div className="footer-links">
                            </div>
                        </div>
                    </div>
                </footer>
            </div> 
            </OftadehLayout>

        );
}

