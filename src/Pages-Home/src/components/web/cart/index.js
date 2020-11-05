import React from 'react'
import { Grid, Card } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import './cart.css';



function Cart({cartProducts, cartProps, productQuantity, clearProduct }) {
    let productsInCart = [];
    Object.keys(cartProducts).forEach(function (item) {
        if (cartProducts[item]) {
            productsInCart.push(cartProducts[item])
        }
    })
    console.log("cart products", cartProducts)
    return (
        <div>
            <Grid container className="shopping_cart">
                <Grid item md={2} lg={2} xl={2}></Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <div className="spec ">
                        <h3>Shopping Cart</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                            <table className="table ">
                                <tbody><tr>
                                    <th className="t-head head-it ">Products</th>
                                    <th className="t-head">Price</th>
                                    <th className="t-head">Quantity</th>
                                    <th className="t-head">Total</th>
                                </tr>
                                    {
                                        productsInCart.map((product, index) => {
                                            return (
                                                <tr className="cross1" key={index}>
                                                    <td className="t-data ring-in">
                                                        <Link to={"/product-details/" + product._id}  className="at-in"><img src={product.productImage} className="img-responsive" alt="" /></Link>
                                                        <div className="sed">
                                                          <Link to={"/product-details/" + product._id}> <h5>{product.productName}</h5> </Link>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                        <div className="close2" onClick={() => clearProduct(product._id)}> <i className="fa fa-times" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="t-data">{product.productPrice}</td>
                                                    <td className="t-data"><div className="quantity">
                                                        <div className="quantity-select">
                                                            <div className="entry value-minus">&nbsp;</div>
                                                            <div className="entry value"><span className="span-1">{product.productQuantity}</span></div>
                                                            <div className="entry value-plus active">&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="t-data t-w3l">{product.productPrice * product.productQuantity}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className="price_details_bk">
                            <Card>
                                <span className="title">Price details</span>
                                <div class="_2twTWD">
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Price ({cartProps.cart} item)</div>
                                        <span> ₹{cartProps.cartPrice}</span>
                                    </div>
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Delivery Fee</div>
                                        <span><span class="_27kB8M _3Oa-sk">Free</span></span>
                                    </div>
                                    <div class="_3xFQAD">
                                        <div class="hJYgKM">
                                            <div class="_10vVqD">Total Amount</div>
                                            <span>
                                                <div class="tnAu1u">
                                                    <span > GH₵{cartProps.cartPrice}</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_22vQVX">You will save GH₵4 on this order</div>
                                </div>
                                    <div className="process_checkout_bk">
                                        <span>Click on product to continue</span>
                                    </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
            </Grid>
        </div>

    )
}
const mapStateToProps = (state) => ({
    cartProps: state.cartState,                                               
    cartProducts: state.cartState.products
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);