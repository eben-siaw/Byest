import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

 const http = "http://localhost:5000";

export default class Household extends Component { 
   
    constructor(props) { 
    super(props); 

     this.state = { 
      cars: []
    } 

    }
  
    // get cars category 

  componentDidMount() { 
    
    const cars = "cars";

    try { 
     axios.get(http + `/products/getCars/${cars}`) 
     .then(resp => { 
      this.setState(resp.data.products)
     })  
    } catch (error) {
     console.log(error);   
    }
 }

    render() { 
       
        if(this.state.cars.length < 1) {  

         return( 
            <div>
            {/* Carousel
  ================================================== */}
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <Link to="/"><img className="first-slide" src="images/ba2.jpg" alt="First slide" /></Link>
                    </div>
                    <div className="item">
                        <Link to="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                    </div>
                    <div className="item">
                        <Link to="/"> <img className="third-slide " src="images/ba1.jpg" alt="Third slide" /></Link>
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
                            <img src="images/ki6.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Clips</h6>
                        <p>Other Items</p>
                    </div>
                    <div className="col-md-4 kic-top1">
                        <Link to="/">
                            <img src="images/ki7.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Cleaning Wear</h6>
                        <p>Other Items</p>
                    </div>
                    <div className="col-md-4 kic-top1">
                        <Link to="/">
                            <img src="images/ki8.jpg" className="img-responsive" alt="" />
                        </Link>
                        <h6>Toothbrush</h6>
                        <p>Other Items</p>
                    </div>
                </div>
            </div> 

            {/*content*/}
            <div className="product">
                <div className="container">
                    <div className="spec ">
                        <h3>Cars</h3>
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
        else { 
            return (
                <div>
                    {/* Carousel
          ================================================== */}
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to={0} className="active" />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <Link to="/"><img className="first-slide" src="images/ba2.jpg" alt="First slide" /></Link>
                            </div>
                            <div className="item">
                                <Link to="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                            </div>
                            <div className="item">
                                <Link to="/"> <img className="third-slide " src="images/ba1.jpg" alt="Third slide" /></Link>
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
                                    <img src="images/ki6.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Clips</h6>
                                <p>Nam libero tempore</p>
                            </div>
                            <div className="col-md-4 kic-top1">
                                <Link to="/">
                                    <img src="images/ki7.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Cleaning Wear</h6>
                                <p>Nam libero tempore</p>
                            </div>
                            <div className="col-md-4 kic-top1">
                                <Link to="/">
                                    <img src="images/ki8.jpg" className="img-responsive" alt="" />
                                </Link>
                                <h6>Toothbrush</h6>
                                <p>Nam libero tempore</p>
                            </div>
                        </div>
                    </div> 
    
                    {/*content*/}
                    <div className="product">
                        <div className="container">
                            <div className="spec ">
                                <h3>Cars</h3>
                                <div className="ser-t">
                                    <b />
                                    <span><i /></span>
                                    <b className="line" />
                                </div>
                            </div> 
                            
                            <div className=" con-w3l agileinf">
                               
        
                         {this.state.cars.map((items, index) => { 
    
                             return( 
                                <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                        <img src="images/of59.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                      <h6><Link to="/">{items.productName}</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                         <p><label></label><em className="item_price">{items.productPrice}</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={59} data-name="Cleaner" data-summary="summary 59" data-price="0.80" data-quantity={1} data-image="images/of59.png">Add to Cart</button>
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
    
            );

       }

      
    }
}
