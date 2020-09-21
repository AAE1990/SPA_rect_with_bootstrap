import React, { Component } from 'react';
import { Card, Col, Container, ListGroup, Media, Row } from 'react-bootstrap';
import iconJS from '../assets/icon_nodejs.png';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={iconJS}
                                alt="iconJs"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Id amet adipisicing consequat voluptate non excepteur fugiat tempor eiusmod.
                                    Nulla reprehenderit enim labore ullamco pariatur eiusmod sit exercitation non.
                                    Et qui culpa aute quis ea nulla exercitation aute laborum commodo reprehenderit eiusmod adipisicing aliquip.
                                    Fugiat consequat ex deserunt mollit id reprehenderit sit duis elit.
                                    Ullamco mollit velit adipisicing aliquip voluptate quis et in cupidatat aliqua et.
                                    Eiusmod excepteur proident tempor ea velit quis ullamco incididunt esse minim.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={iconJS}
                                alt="iconJs"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Id amet adipisicing consequat voluptate non excepteur fugiat tempor eiusmod.
                                    Nulla reprehenderit enim labore ullamco pariatur eiusmod sit exercitation non.
                                    Et qui culpa aute quis ea nulla exercitation aute laborum commodo reprehenderit eiusmod adipisicing aliquip.
                                    Fugiat consequat ex deserunt mollit id reprehenderit sit duis elit.
                                    Ullamco mollit velit adipisicing aliquip voluptate quis et in cupidatat aliqua et.
                                    Eiusmod excepteur proident tempor ea velit quis ullamco incididunt esse minim.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={iconJS}
                                alt="iconJs"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Id amet adipisicing consequat voluptate non excepteur fugiat tempor eiusmod.
                                    Nulla reprehenderit enim labore ullamco pariatur eiusmod sit exercitation non.
                                    Et qui culpa aute quis ea nulla exercitation aute laborum commodo reprehenderit eiusmod adipisicing aliquip.
                                    Fugiat consequat ex deserunt mollit id reprehenderit sit duis elit.
                                    Ullamco mollit velit adipisicing aliquip voluptate quis et in cupidatat aliqua et.
                                    Eiusmod excepteur proident tempor ea velit quis ullamco incididunt esse minim.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={iconJS}
                                alt="iconJs"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Id amet adipisicing consequat voluptate non excepteur fugiat tempor eiusmod.
                                    Nulla reprehenderit enim labore ullamco pariatur eiusmod sit exercitation non.
                                    Et qui culpa aute quis ea nulla exercitation aute laborum commodo reprehenderit eiusmod adipisicing aliquip.
                                    Fugiat consequat ex deserunt mollit id reprehenderit sit duis elit.
                                    Ullamco mollit velit adipisicing aliquip voluptate quis et in cupidatat aliqua et.
                                    Eiusmod excepteur proident tempor ea velit quis ullamco incididunt esse minim.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Phyton</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                    Aute reprehenderit consectetur id do culpa aliquip qui quis excepteur laboris.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;
