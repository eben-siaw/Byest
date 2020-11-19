import React, { Component } from 'react'
import  Grid  from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '9rem' }}>
                    <Slider {...settings}>
                        <div>
                            <img src="/images/super4.jpg" alt="laptops"/>
                        </div>
                        <div>
                            <img src="images/super3.jpg" alt="phones"/>
                        </div>
                        <div>
                            <img src="images/super4.jpg" alt="shoes"/>
                        </div> 
                       
                    </Slider>
                </Grid>

            </Grid>
        )
    }
}
