import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Content.css";

class Main extends Component {
    render() {
        return (
            <div className="text">
                <div className="heading">
                    <h1>Who We Are?</h1>
                </div>
                <div className="content">
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

                <div className="heading">
                    <h1>Committees</h1>
                </div>
                <div className="committees">
                    <Container>
                        <Row className="first-row">
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream Car <br/>Committee</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream Bike <br/>Committee</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream Mobile <br/>Committee</h4>
                            </Col>
                        </Row>
                        <Row className="first-row">
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream Gold <br/>Committee</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream Tractor <br/>Committee</h4>
                            </Col>
                            <Col xs={12} md={12} lg={4} className="committe">
                                <h4>Dream House <br/>Committee</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <h3>Dream Car Committee</h3>

                <p>Great News for All Friends
                A Dream Car Committee has been started for friends with a total duration of 20 Months.
                Members will be given a car every month through a lottery.</p>
                <br/>
                To be a member of this committee, the amount of PKR 615,000 needs to be submitted. <br/>
                Each member will get his own car every month. <br/>
                The total value of the car will be approx Rs 17 to 18 lakh <br/>
                The car will be delivered within one to two weeks of being named in the lottery <br/>
                The car will be on the company's open letter <br/>
                Tax and documentation cost will be on the member. <br/>
                In addition, car is free to use <br/>
                15,000 PKR will be taken in the form of booking, confirmation and registration and car registration form will be issued after receiving 600,000 PKR. <br/>
                All the accounts will be processed by 15 March. <br/>
                This system will be formally launched on 15 April. <br/>
                First car will be given to the winner of the lucky draw take place from 1st to 5th May. <br/>
                After that there will be a lucky draw from 1st to 5th of each month and the cars will be given according to the schedule. <br/>
                <br/>
                <br/>
                <b>Dream Car Committee</b>
                <br/>
                Having a luxurious car is the dream for every person. These cars give a unique glorious feel and magnificent look. But, affording these cars is not that easy if you are an average earning individual.
                <br/>
                Don’t worry, the Dream Car Committee is here for you.  You don’t need to wait for years to have your dream car in your hands. The Dream Car Committee will make you the owner of one of these luxurious cars.
                <br/>
                <b>Registration Price</b><br/>
                If you want to be the owner of a fine luxury car then get yourself registered at Dream Committee.
                <br/>
                <b>Car Ranges</b><br/>
                The Dream Car Committee is offering cars that are ranging from PKR 15 Lakh to 17 Lakh.
                <br/>
                <b>Draw Schedule</b><br/>
                The draw for the dream car will be held once from 1st to 5th of every month and every person will get his own car each month through a lucky draw. The draw is held at Dream Car Committee Website and Mobile App. */}
            </div>
        )
    }
}

export default Main;