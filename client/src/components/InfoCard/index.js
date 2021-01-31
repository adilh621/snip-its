import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactRoundedImage from "react-rounded-image";
import DefaultProfileImg from "./Default_Profile_Img.jpg"
import "./style.css"


function InfoCard(props) {
    // console.table(props)
    const name = props.userinfo.name;
    const userName = props.userinfo.username;
    const email= props.userinfo.email;

    var snipitHistoryNum;

    var snipitNum;
    
    console.log(props)
    if(props.filteredSnipits.length === 0){
    
        snipitHistoryNum = 0;
        snipitNum = 0;

    }else{
        
        console.log(props)
        //  snipitHistoryNum = props.userinfo.snipit.length;
        
        //  snipitNum = props.filteredSnipits.length;
    }

    return(<Card id="infoCard">
        <div id="profileImg">
        <ReactRoundedImage image={DefaultProfileImg} roundedColor="#321124" roundedSize="2"/>
        </div>
        <Card.Header>
        <h2 className={"fontStyle"}>Welcome:</h2>
        <h2 className={"fontStyle"}>{name}</h2>
        </Card.Header>
        <Card.Body style={{backgroundColor: "aqua"}}>
        <ListGroup variant="flush" >
            <ListGroup.Item style={{backgroundColor: "#8940de"}}><p className={"fontStyle"}>Username: {userName}</p></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: "#8940de"}}><p className={"fontStyle"}>Email: {email}</p></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: "#8940de"}}><p className={"fontStyle"}>{props.filteredSnipits.length } Snipits Currently Being Shared!</p></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: "#8940de"}}><p className={"fontStyle"}>Total Number of Snipits Created By This Account: {}</p></ListGroup.Item>
        </ListGroup>
        </Card.Body>
    </Card>);
};

export default InfoCard;