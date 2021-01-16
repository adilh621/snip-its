import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactRoundedImage from "react-rounded-image";
import DefaultProfileImg from "./Default_Profile_Img.jpg"
// import { Col, Row, Container } from "../";
import "./style.css"


function InfoCard() {

    return(<Card id="infoCard">
        <div id="profileImg">
        <ReactRoundedImage image={DefaultProfileImg} roundedColor="#321124" roundedSize="2"/>
        </div>
        <Card.Header><h2>Your Info!</h2></Card.Header>
        <Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>Name</ListGroup.Item>
            <ListGroup.Item>Username</ListGroup.Item>
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item># Of Snipiits Created</ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card>);
};

export default InfoCard;