import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Sliderproduct from '../home/Carousel/sliderproduct/index';

const URL = "https://mekexpress-backend.herokuapp.com";

 const http = "http://localhost:5080";

  // from the single product page the customer makes an order

export default function Singleproduct(props) { 
   
    const [item, setProduct] = useState([]);
     
    const {id} = props.match.params; 
    
   useEffect(() => { 
    try {
    axios.get(http + `/products/singleproduct/${id}`) 
    .then(response => {  
      if(response.data.success) { 
        setProduct(response.data.product); 
      }  
    })  
    } catch (error) {
      console.log(error);   
    } 
   }, [])   


   console.log(item);

        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h3>Product Details</h3>
                        <h4><a href="/">Home</a><label>/</label>product</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>

                <div className="single">
                    <div className="container">
                        <div className="single-top-main">
                            <div className="col-md-5 single-top">
                                <div className="single-w3agile">
                                    <div id="picture-frame" style={{ position: 'relative', overflow: 'hidden', cursor: 'crosshair' }}>
                                        <img src={item.productImage} data-src={item.productImage} alt="si" className="img-responsive" />
                                        <img src={item.productImage} alt="si" style={{ position: 'absolute', top: '-12px', left: 0, opacity: 0, width: 700, height: 700, border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                                </div>
                            </div>
                            <div className="col-md-7 single-top-left ">
                                <div className="single-right">
                                   <h3>{item.productName}</h3>
                                    <div className="pr-single">
                                     <p className="reduced "><del></del>GH₵ {item.productPrice}</p>
                                    </div>
                                    <div className="block block-w3">
                                        <div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost" style={{ display: 'none', width: '42.5px' }} /><div className="colorbar" style={{ width: '42.5px' }} /><div className="star_holder"><div className="star star-0" /><div className="star star-1" /><div className="star star-2" /><div className="star star-3" /><div className="star star-4" /></div></div></div></div>
                                    </div>
                                    <p className="in-pa"> You are about to make an order, by continuing you agree to the terms and conditions, The owner of this product will get notified.  
                                    Seller's number {item.Admin.phone} </p>
                                    <ul className="social-top">
                                        <li><a href="/" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a></li>
                                        <li><a href="/" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a></li>
                                        <li><a href="/" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /><span /></a></li>
                                      <li><a href="/" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true" /><span /></a></li>
                                    </ul>
                                    <div className="add add-3">
                                        <Link to={"/checkout/"+ item.Admin}>  
                                        <div className="process_checkout_bk">
                                        <span>Proceed to checkout</span> 
                                    </div> 
                                    </Link>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>

                {/* Similar items */}

                <div className="content-top offer-w3agile">
                    <div className="container ">
                                       
                <div className="tab-pane active text-style" id="tab1" style={{ paddingBottom: '3rem' }}>
                    <div className="spec ">
                        <h3>Best Offers View</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className="slick-slider slick-initialized slider-bk" dir="ltr">
                        <Sliderproduct state={props}/>
                        <div className="clearfix" />
                    </div>
                      </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>

        );
    
}
