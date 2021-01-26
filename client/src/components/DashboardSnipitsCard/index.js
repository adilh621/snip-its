import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import SnipitView from "../Snipit"
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css"


function YourSnipitsCard(props) {
    const filteredSnipits = props.filteredSnipits;
    const snipits = props.snipits;
    const deleteSnipit = props.deleteSnipit;
    const user = props.user;
    const setSnipits = props.setSnipits;



    return (
        <Container fluid>
    <Card id="yourSnipitsCard" style={{backgroundColor: "darkslateblue", border: "solid black 2px"}}>
        <div style={{borderBottom: "solid black 3px"}}>
            <Row>
                <Col lg={9}>
                    <h1 id="yourSnipitsTitle" className={"fontStyle"}>Your Snipits!</h1>
                </Col>
                <Col lg={3}>
                    <Button variant="info" id="createSnipitBtn">
                        <Link
                            to="/dashboard/create"
                            className={location.pathname === "/dashboard/create" ? "nav-link active" : "nav-link"}>
                            Create Snipit!
                    </Link>
                    </Button>
                    
                </Col>
            </Row>
            </div>
            {snipits.length ? (
                    <Row>
                        {filteredSnipits.map(snipit => {
                            // console.log(snipit);
                            const id = snipit._id;
                            const title = snipit.title;
                            const body = snipit.body;
                            const username = snipit.username;
                            const category = snipit.category;
                            console.log(id);
                            return (<Col lg={4}>
                                <SnipitView key={id} title={title} body={body} username={username} category={category} />
                                <Button id="deleteSnipitBtn" variant="outline-info" onClick={() => deleteSnipit(id)}>Delete Snipit</Button>
                            </Col>
                            )
                        }
                        )}
                    </Row>
            ) : (
                    <h3 className={"fontStyle"}>You Don't Have Any Snipits Created. Click The Create Snipit Btn To Share Your Snipit! </h3>
                )}
    </Card>
    </Container>);
};

export default YourSnipitsCard;