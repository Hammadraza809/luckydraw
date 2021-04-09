import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import youtube from '../assets/images/youtube.png';
import facebook from '../assets/images/facebook.png';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Container>
                    <Row>
                        <Col>
                            Follow us on
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="list">
                            <a href="https://www.youtube.com" target="_blank"><img style={{ width: "20px" }} src={youtube} /><p>YouTube</p></a>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col className="list">
                            <a href="https://www.youtube.com" target="_blank"><img style={{ width: "40px" }} src={facebook} /><p>Facebook</p></a>
                        </Col>
                    </Row> */}
                    <hr />
                    <p className="copyright">Copyrights All Rights Reserved by My Dream Committee.</p>
                </Container>
            </div>
        )
    }
}

export default Footer;