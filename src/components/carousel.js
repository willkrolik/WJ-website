import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="slideone.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="slidetwo.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="slidethree.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
