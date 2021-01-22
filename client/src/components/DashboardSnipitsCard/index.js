import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Table } from "../Table";
import SnipitView from "../Snipit"
import { Col, Row } from "../Grid";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SnipitInputCard from "../SnipitInputCard";
import "./style.css"


function YourSnipitsCard(props) {
    const filteredSnipits = props.filteredSnipits;
    const snipits = props.snipits;
    const deleteSnipit = props.deleteSnipit;
    const user = props.user;
    const setSnipits = props.setSnipits;



    return (<Card id="yourSnipitsCard" style={{backgroundColor: "darkslateblue", border: "solid black 2px"}}>
        <Card.Header style={{backgroundColor: "darkslateblue", borderBottom: "solid black 2px"}}>
            <Row>
                <Col size="md-9">
                    <div>
                    <h1 id="yourSnipitsTitle" className={"fontStyle"} style={{marginLeft: "-400px", marginTop: "15px"}}>Your Snipits!</h1>
                    </div>
                </Col>
                <Col size="md-3">
                    <Button variant="info" id="createSnipitBtn">
                        <Link
                            to="/dashboard/create"
                            className={location.pathname === "/dashboard/create" ? "nav-link active" : "nav-link"}>
                            Create Snipit!
                    </Link>
                    </Button>
                    
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
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
                            return (<Col size="md-4">
                                <SnipitView key={id} title={title} body={body} username={username} category={category} />
                                <Button id="deleteSnipitBtn" onClick={() => deleteSnipit(id)}>Delete Snipit</Button>
                            </Col>
                            )
                        }
                        )}
                    </Row>
            ) : (
                    <h3 className={"fontStyle"}>You Don't Have Any Snipits Created. Click The Create Snipit Btn To Share Your Snipit! </h3>
                )}
        </Card.Body>
    </Card>);
};

export default YourSnipitsCard;