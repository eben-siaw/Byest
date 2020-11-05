import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './phones.css'; 
import {addToCart} from '../../../actions/productActions';
import {useDispatch} from 'react-redux';

const URL = "https://mekexpress-backend.herokuapp.com";

const http = "http://localhost:5080";

export default function PhonesCategory() { 
  
  const dispatch = useDispatch();

  const [productlist, setProductList] = useState("");
   
  let phones = "phones";

   const fetchAllProducts = () => {  
     try {
        axios.get(`/category/getPhones/${phones}`) 
        .then(resp => { 
            if(resp.data.message) { 
             setProductList(resp.data.phones);
            } 
       
        }); 
     } catch (error) {
        console.log(error);     
    }  
  
   }

   useEffect(() => { 
    fetchAllProducts();
   }, [])
     
   const PhoneSpecials = () => {  

    return productlist.map((phones, index) => {  

     return(
       
       <div className="phone-card">
               <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img"> 
                   <img src={phones.productImage} className="img-responsive" alt="products" /> 
                   <div className="offer"><p><span>Offer</span></p></div>
               </Link>
               <div className="mid-1">
                   <div className="women">
                       <h6><Link to="/product-details">{phones.productName}</Link></h6>
                   </div>
                   <div className="mid-2">
                     <p><label></label><em className="item_price">GH₵ {phones.productPrice} </em></p>
                       <div className="block">
                           <div className="starbox small ghosting"> </div>
                       </div>
                       <div className="clearfix" />
                   </div>
                   <div className="add">
                       <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => dispatch(addToCart(phones))}>Add to Cart</button>
                   </div>
               </div>     
       </div>  

  
    ); 

    });
             
  }

   if(productlist.length < 1) { 

    return ( 

        <div>
                {/* Carousel - Top================== */} 
                
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <Link to="/"><img className="first-slide" src="images/ba.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
                        </div>
                    </div>
                </div>{/* /.carousel */} 

                {/*content*/}
                <div className="kic-top ">
                    <div className="container ">
                        <div className="kic ">
                            <h3>Popular Categories</h3>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Dal</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki1.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Snacks</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki2.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Spice</h6>
                            <p>Nam libero tempore</p>
                        </div>
                    </div>
                </div> 

                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div> 

                        <div className=" con-w3l agileinf">
                           <div> No items found under this category </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
    ); 

   }

    return ( 

            <div>
                {/* Carousel - Top================== */} 
                
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <Link to="/"><img className="first-slide" src="images/ba.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
                        </div>
                    </div>
                </div>{/* /.carousel */} 

                {/*content*/}
                <div className="kic-top ">
                    <div className="container ">
                        <div className="kic ">
                            <h3>Popular Categories</h3>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Dal</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki1.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Snacks</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki2.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Spice</h6>
                            <p>Nam libero tempore</p>
                        </div>
                    </div>
                </div> 

                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div> 
                     
                    <div className="phones-container">  
                      {PhoneSpecials()}
                    </div>

                        <div className=" con-w3l agileinf">      
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

