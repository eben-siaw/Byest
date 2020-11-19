import React, { Component } from 'react'
// import { Paper, Grid } from '@material-ui/core';
import './category.css';
 
 // mobile category

export default class Category extends Component {
    render() {
        return (
            <div>
                <div class="categories-wrapper">
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/drinks.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div className="category-name">
                            <div className="category-name__discount">Up to 71% off</div>
                            <div className="category-name__name">Drinks &amp; Beverages</div>
                            <div className="category-name__description" title="Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples">Pulses, Atta &amp; Other Flours, Rice &amp; Other Grains, Dry Fruits &amp; Nuts, Edible Oils, Ghee &amp; Vanaspati, Spices, Salt &amp; Sugar, Organic Staples</div>
                        </div>
                        <div className="category-icon">
                          <a href="/drinks">  <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                    {/* //2nd div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/shoe.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 33% off</div>
                            <div class="category-name__name">Shoes &amp; Outfits</div>
                            <div class="category-name__description" title="Fruits, Mangoes, Vegetables">Begs, shoes, Dresses</div>
                        </div>
                        <div className="category-icon">
                        <a href="/shoes">  <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>

                    {/* //3rd div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/cars.jpeg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 69% off</div>
                            <div class="category-name__name">Cars</div>
                            <div class="category-name__description" title="Personal Care Best offers, Safety Must Haves, Bath &amp; Body, Hair Care, Skin Care, Oral Care, Fragrances, Face Care, Feminine Hygiene, Men's Grooming, Health And Wellness, Cosmetics">Cars Best offers, trucks &amp; coupe, Golf</div>
                        </div>
                        <div className="category-icon">
                        <a href="/cars">   <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                    {/* 4th div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/phones.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 69% off</div>
                            <div class="category-name__name">Phones & Laptops</div>
                            <div class="category-name__description" title="Buy 1 Get 1 Free, Household Best Offers, Laundry Detergents, Dishwashers, Cleaners, Pooja Needs, Repellents, Home &amp; Car Fresheners, Tissues &amp; Disposables, Shoe Care" >Discover phones, Best Offers, laptops, gaming laptops, Cleaners, Pooja Needs, Repellents, Home &amp; Car Fresheners, Tissues &amp; Disposables, Shoe Care</div>
                        </div>
                        <div className="category-icon">
                         <a href="/phones">  <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                    {/* 5th div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/appliance.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 80% off</div>
                            <div class="category-name__name">Electrical Appliances</div>
                            <div class="category-name__description" title="Best Deals &amp; Offers, Cookware, Storage &amp; Containers, Kitchen Tools &amp; Accessories, Dining &amp; Serving, Bags &amp; Travel Accessories, Bathroom Essentials, Cleaning Equipment, Electrical Goods &amp; Accessories, Gas Stoves" >Best Deals &amp; Offers, Cookware, Storage &amp; Containers, Kitchen Tools &amp; Accessories, Dining &amp; Serving, Bags &amp; Travel Accessories, Bathroom Essentials, Cleaning Equipment, Electrical Goods &amp; Accessories, Gas Stoves</div>
                        </div>
                        <div className="category-icon">
                        <a href="/appliances">   <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>
                    {/* 6th div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/bags.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 50% off</div>
                            <div class="category-name__name">Bags</div>
                            <div class="category-name__description" title="Best Offers, Cold Drinks, Juices &amp; Drinks, Tea &amp; Coffee, Health &amp; Energy Drinks, Water &amp; Soda, Milk Drinks">Best Offers, lady's bag, small bags &amp; suitcase, briefcases &amp; Coffee, Health &amp; purse &amp; luggages</div>
                        </div>
                        <div className="category-icon">
                           <i class="fa fa-angle-down" aria-hidden="true"></i>  
                        </div>
                    </div>
                    {/* 7th div */}
                    <div className="store-categories-list__item" data-test-id="l0-category">
                        <div className="category-image"><div className="img-loader__wrapper__wrapper">
                            <div className="img-loader__wrapper"><img className="img-loader__img img-loader__img--shown " alt="Grocery & Staples" src="assets/shirts.jpg" />
                                <span className="img-loader__placeholder img-loader__placeholder--circle img-loader__img img-loader__img--hidden img-loader__placeholder--category-card" />
                            </div>
                        </div>
                        </div>
                        <div class="category-name">
                            <div class="category-name__discount">Up to 39% off</div>
                            <div class="category-name__name">Clothes & Outfits </div>
                            <div class="category-name__description" title="Breakfast &amp; Dairy Best Offers, Milk &amp; Milk Products, Bread &amp; Eggs, Breakfast Cereal &amp; Mixes, Jams, Honey &amp; Spreads" > Long sleeves &amp; Short sleeves, lacostte &amp; other fancy shirts, T-shirts &amp; discover more &amp; Mixes, Jams, Honey &amp; Spreads</div>
                        </div>
                        <div className="category-icon">
                         <a href="/outfits"> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
