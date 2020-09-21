import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import HighTech from '../assets/high_tech.jpg';
import HighTechRed from '../assets/high_tech_red.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                        <img
                            className="img-fluid"
                            src={HighTech}
                            alt="HighTech"
                        />
                    <Carousel.Caption>
                        <h3>Moon image</h3>
                        <p>In qui ipsum incididunt veniam.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                        <img
                            className="img-fluid"
                            src={HighTechRed}
                            alt="HighTechRed"
                        />
                    <Carousel.Caption>
                        <h3>Moon_2 image</h3>
                        <p>Sint non ipsum tempor cupidatat cillum consequat..</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselBox;
