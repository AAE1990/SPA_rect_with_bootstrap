import React, { Component } from 'react';
import { Button, Card, CardDeck, Container } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox'

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container className="mb-5">
                <h2 className="text-center m-4">Our Team</h2>
                <CardDeck className="m-4">
                    <Card border="info">
                        <Card.Img
                        variant="top"
                        src="https://pbs.twimg.com/media/Dwdz8eUXgAA8ei6.jpg:large"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Aliquip esse mollit deserunt minim id. 
                                Occaecat qui adipisicing pariatur occaecat. 
                                Amet elit duis dolore consequat consequat minim ullamco. 
                                onsectetur id ut velit amet est velit duis exercitation ea cupidatat aute ad exercitation nulla. 
                                Sit nostrud voluptate eiusmod Lorem nostrud eiusmod nostrud. 
                                Ad nisi reprehenderit amet sint nulla labore eu aliquip laboris.
                                Officia id minim velit proident officia tempor consectetur reprehenderit ad ipsum ut.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Aliquip esse mollit deserunt minim id. 
                                Occaecat qui adipisicing pariatur occaecat. 
                                Amet elit duis dolore consequat consequat minim ullamco. 
                                onsectetur id ut velit amet est velit duis exercitation ea cupidatat aute ad exercitation nulla. 
                                Sit nostrud voluptate eiusmod Lorem nostrud eiusmod nostrud. 
                                Ad nisi reprehenderit amet sint nulla labore eu aliquip laboris.
                                Officia id minim velit proident officia tempor consectetur reprehenderit ad ipsum ut.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img
                        variant="top"
                        src="https://simkl.in/fanart/33/3342176c32588b0_0.jpg"
                        />
                    </Card>
                    <Card border="info">
                        <Card.Img
                        variant="top"
                        src="https://dl.dropboxusercontent.com/s/5k682oqs7sylpx8/output_1138x640.jpg?dl=0"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Aliquip esse mollit deserunt minim id. 
                                Occaecat qui adipisicing pariatur occaecat. 
                                Amet elit duis dolore consequat consequat minim ullamco. 
                                onsectetur id ut velit amet est velit duis exercitation ea cupidatat aute ad exercitation nulla. 
                                Sit nostrud voluptate eiusmod Lorem nostrud eiusmod nostrud. 
                                Ad nisi reprehenderit amet sint nulla labore eu aliquip laboris.
                                Officia id minim velit proident officia tempor consectetur reprehenderit ad ipsum ut.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}

export default Home;
