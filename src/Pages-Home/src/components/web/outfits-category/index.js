import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const URL = "https://mekexpress-backend.herokuapp.com"; 

 const http = "http://localhost/5000";

export default class OutfitsCategory extends Component { 
    
   constructor(props) { 
   
    super(props); 
    
    this.state = { 
     Outfits: []
    }
    
   }
     // fetch outfits items from server
    componentDidMount() {    
   
     const outfits = "Outfits & Shoes";   
   
      try { 
         axios.get(URL + `/categories/getOutfits/${outfits}`) 
         .then(resp => { 
          this.setState(resp.data.products);   
          })
        } catch (error) {
          console.log(error);
       }  
   
    } 

    render() { 
  
       if(this.state.Outfits.length < 1) { 

          return ( 
     
            <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <Link href="/"><img className="first-slide" src="images/ba1.jpg" alt="First slide" /></Link>
                    </div>
                    <div className="item">
                        <Link href="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                    </div>
                    <div className="item">
                        <Link href="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
                    </div>
                </div>
            </div>{/* /End of carousel */} 


            {/*content*/}
            <div className="kic-top ">
                <div className="container ">
                    <div className="kic ">
                        <h3>Popular Categories</h3>
                    </div>
                    <div className="col-md-4 kic-top1">
                        <Link href="/">
                            <img src="images/ki3.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Natural Cream</h6>
                        <p>Other Items you may find</p>
                    </div>
                    <div className="col-md-4 kic-top1">
                        <Link href="/">
                            <img src="images/ki4.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Shaving Kit</h6>
                        <p>Other Items you may find</p>
                    </div>
                    <div className="col-md-4 kic-top1">
                        <Link href="/">
                            <img src="images/ki5.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Makeup Kit</h6>
                        <p>Other Items you may find</p>
                    </div>
                </div>
            </div> 


            {/*content*/}
            <div className="product">
                <div className="container">
                    <div className="spec ">
                        <h3>Shoes & Outfits</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div> 

                    <div className=" con-w3l agileinf"> 
    
                    <div className="noList"> No items found under this category </div>
                       <div className="clearfix" /> 
                         
                    </div>
                </div>
            </div>  
            <style jsx>{`   
           .noList { 
            font-size: 18px;   
            color: black;
            }
            
            `}
            </style>
          
        </div>


          );
       }
         else { 

            return ( 

                <div>
                   
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <Link href="/"><img className="first-slide" src="images/ba1.jpg" alt="First slide" /></Link>
                            </div>
                            <div className="item">
                                <Link href="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                            </div>
                            <div className="item">
                                <Link href="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
                            </div>
                        </div>
                    </div>{/* /End of carousel */} 
    
    
                    {/*content*/}
                    <div className="kic-top ">
                        <div className="container ">
                            <div className="kic ">
                                <h3>Popular Categories</h3>
                            </div>
                            <div className="col-md-4 kic-top1">
                                <Link href="/">
                                    <img src="images/ki3.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Natural Cream</h6>
                                <p>Nam libero tempore</p>
                            </div>
                            <div className="col-md-4 kic-top1">
                                <Link href="/">
                                    <img src="images/ki4.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Shaving Kit</h6>
                                <p>Nam libero tempore</p>
                            </div>
                            <div className="col-md-4 kic-top1">
                                <Link href="/">
                                    <img src="images/ki5.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Makeup Kit</h6>
                                <p>Nam libero tempore</p>
                            </div>
                        </div>
                    </div> 
    
    
                    {/*content*/}
                    <div className="product">
                        <div className="container">
                            <div className="spec ">
                                <h3>Shoes & Outfits</h3>
                                <div className="ser-t">
                                    <b />
                                    <span><i /></span>
                                    <b className="line" />
                                </div>
                            </div> 
    
                            <div className=" con-w3l agileinf"> 
    
                       {this.state.Outfits.map((items, index) => { 
      
                        return( 
                     
                            <div className="col-md-3 pro-1">
                            <div key={index}
                             className="col-m">
                                <Link href="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                    <img src="images/of47.png" className="img-responsive" alt="" />
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                      <h6><Link href="/">{items.productName}</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                     <p><label></label><em className="item_price">{items.productPrice}</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" data-id={47} data-name="Lotion" data-summary="summary 47" data-price="0.80" data-quantity={1} data-image="images/of47.png">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )})}                           
                               <div className="clearfix" /> 
                                 
                            </div>
                        </div>
                    </div>
                </div>
    
            )

         }
        
    }
}
