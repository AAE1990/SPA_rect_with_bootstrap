import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import imgDev from '../assets/image_dev.png'
import imgFram from '../assets/image_frameworks.jpg'
import imgLang from '../assets/image_languages.jpeg'
import imgTeam from '../assets/image_team.jpg'
import imgLibr from '../assets/image_libraries.png'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="thrid">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={imgDev} alt="Design" className="img-fluid"/>
                                    <p>
                                        Aute excepteur id voluptate aliqua ad labore dolore fugiat.
                                        Ipsum ad mollit tempor cillum id eiusmod do cillum voluptate.
                                        Eu et cupidatat ullamco et mollit occaecat laborum. Exercitation excepteur proident minim ex in sint cillum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={imgTeam} alt="Team" className="img-fluid"/>
                                    <p>
                                        Lorem irure id commodo anim adipisicing sunt magna commodo amet do fugiat elit deserunt laboris. 
                                        Reprehenderit sunt Lorem quis aute culpa labore fugiat deserunt sint ipsum. Amet eiusmod Lorem deserunt amet sint commodo adipisicing culpa exercitation. 
                                        Cillum in est tempor amet eiusmod eiusmod incididunt est ut nostrud id esse.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thrid">
                                    <img src={imgLang} alt="Language_Code" className="img-fluid"/>
                                    <p>
                                        Dolore non mollit fugiat sit cupidatat nostrud cillum mollit amet Lorem aliqua pariatur commodo. 
                                        Et aliquip duis culpa officia duis laborum officia culpa minim non pariatur nostrud. 
                                        Eu id veniam enim reprehenderit consectetur mollit consequat enim id aliqua sunt fugiat veniam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={imgFram} alt="Frameworks" className="img-fluid"/>
                                    <p>
                                        Anim aliqua enim esse Lorem Lorem incididunt. 
                                        Voluptate aliqua eiusmod minim duis id culpa enim aliqua sint cupidatat Lorem deserunt reprehenderit Lorem. 
                                        Magna duis aliquip sunt cillum anim laboris. Non qui aliqua deserunt laboris do. Occaecat sit laborum minim deserunt amet id in laborum duis culpa pariatur. 
                                        Non Lorem magna pariatur aliqua elit ad. Laboris cupidatat et tempor ipsum et ex.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={imgLibr} alt="Libraries" className="img-fluid"/>
                                    <p>
                                        Consequat exercitation aute aliquip et qui. 
                                        Exercitation elit Lorem exercitation est. 
                                        Enim do cupidatat nostrud officia officia.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
