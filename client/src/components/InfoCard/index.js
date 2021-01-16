import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactRoundedImage from "react-rounded-image";
import DefaultProfileImg from "./Default_Profile_Img.jpg"
// import { Col, Row, Container } from "../";
import "./style.css"


function InfoCard(props) {
    console.table(props)
    const name = props.userinfo.name;
    const userName = props.userinfo.username;
    const email= props.userinfo.email;
    const snipitHistory = props.userinfo.snipits;
    const snipitHistoryNum = snipitHistory.length;
    const snipitsArray = props.filteredSnipits;
    const snipitNum = snipitsArray.length;

    return(<Card id="infoCard">
        <div id="profileImg">
        <ReactRoundedImage image={DefaultProfileImg} roundedColor="#321124" roundedSize="2"/>
        </div>
        <Card.Header><h2>Your Info!</h2></Card.Header>
        <Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item>{name}</ListGroup.Item>
            <ListGroup.Item>{userName}</ListGroup.Item>
            <ListGroup.Item>{email}</ListGroup.Item>
            <ListGroup.Item>{snipitNum} Snipits Created!</ListGroup.Item>
            <ListGroup.Item>Total Number of Snipits Created By This Account: {snipitHistoryNum}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card>);
};

export default InfoCard;