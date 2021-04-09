import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Content.css";
import Image2 from '../../assets/images/image2.jpg';

class Main extends Component {
    render() {
        return (
            <div className="text">
                <Row>
                    <img className="d-block w-100" src={Image2} />
                </Row>
                <div className="headingg">
                    <h1>My Dream Committee</h1>
                </div>
                <div className="contentt">
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                We are a group of organization who organize different committees.We are a group of organization who organize different committees.
                                We are a group of organization who organize different committees.We are a group of organization who organize different committees.
                                We are a group of organization who organize different committees.We are a group of organization who organize different committees.
                                We are a group of organization who organize different committees.We are a group of organization who organize different committees.
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Main;