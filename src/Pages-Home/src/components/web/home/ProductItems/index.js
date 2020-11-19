import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './kitechen.css';
import { connect } from 'react-redux';
import Sliderproduct from '../Carousel/sliderproduct';
import { addToCart } from '../../../../actions/productActions'; 
import {useState} from 'react';
import axios from 'axios';
import './products.css' 
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css" 

const URL = "https://mekexpress-backend.herokuapp.com"

const http = "http://localhost:5080";

const Kitchenitem = (props) => { 

  const [specials, setSpecials] = useState([]);
 
  const [loading, setLoading] = useState(true);
 
  const fetchSpecials = async () => { 
    try {
    return await axios.get(URL + "/products/fetchproducts") 
    .then(resp => { 
      setSpecials(resp.data.products);  
      setLoading(false);
    })
    } catch (error) {
        console.log(error)
    } 
  } 

  useEffect(() => { 
   fetchSpecials();
  },[])
  
  const ProductSpecials = () => {  

    return specials.map((products, index) => {  
        // return jsx "/images/of.png"
     return(
       
       <div className="box-card">
               <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img"> 
                   <img src={products.productImage} className="img-responsive" alt="products" /> 
                   <div className="offer"><p><span>Offer</span></p></div>
               </Link>
               <div className="mid-1">
                   <div className="women">
                       <h6><Link to="/product-details">{products.productName}</Link></h6>
                   </div>
                   <div className="mid-2">
                     <p><label></label><em className="item_price">GH₵ {products.productPrice} </em></p>
                       <div className="block">
                           <div className="starbox small ghosting"> </div>
                       </div>
                       <div className="clearfix" />
                   </div>
                   <div className="add">
                       <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => props.addToCart(products)}>Add to Cart</button>
                   </div>
               </div>
            
       </div>  

  
    ); 

    });
             
  }

    return ( 

        <div className="product">
            <div className="container ">
                <div className="spec">
                    <h3 style={{marginTop: 16}}>Special Offers</h3>
                    <div className="ser-t">
                        <b />
                        <span><i /></span>
                        <b className="line" />
                    </div> 
                   
                </div>
            </div>  

          <div className="products-container-wrapper">  
              {ProductSpecials()}   

               <div className="loader-spin"> 
                 {loading ? <Loader type="ThreeDots" color="red" height={60} width={80} timeout={19000}/> : null} 
               </div>
          </div> 

        </div >

    );
}

export default connect(null, {addToCart})(Kitchenitem);