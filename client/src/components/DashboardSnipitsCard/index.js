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



    return (<Card id="yourSnipitsCard">
        <Card.Header style={{ textAlign: "center" }}>
            <Row>
                <Col size="md-9">
                    <h1 id="yourSnipitsTitle">Your Snipits!</h1>
                </Col>
                <Col size="md-3">
                    <Button id="createSnipitBtn">
                        <Link
                            to="/dashboard/create"
                            className={location.pathname === "/dashboard/create" ? "nav-link active" : "nav-link"}>
                            Create Snipit!
                    </Link>
                    </Button>
                    <Route exact path={`/dashboard/create`}>
                        <SnipitInputCard user={user} setSnipits={setSnipits} />
                    </Route>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            {snipits.length ? (
                <Table>
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
                </Table>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Card.Body>
    </Card>);
};

export default YourSnipitsCard;