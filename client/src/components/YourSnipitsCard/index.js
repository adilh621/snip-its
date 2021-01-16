import React from "react";
import { Table } from "../Table";
import SnipitView from "../Snipit"
import { Col, Row } from "../Grid";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./style.css"

function YourSnipitsCard(props) {
    const filteredSnipits = props.filteredSnipits
    const snipits = props.snipits
    
    return (<Card id="yourSnipitsCard">
        <Card.Header style={{ textAlign: "center" }}>
            <Row>
                <Col size="md-9">
                    <h1 id="yourSnipitsTitle">Your Snipits!</h1>
                </Col>
                <Col size="md-3">
                    <Button id="createSnipitBtn">Create Snipit!</Button>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            {snipits.length ? (
                <Table>
                    <Row>
                        {filteredSnipits.map(snipit => {
                            console.log(snipit);
                            const id = snipit._id;
                            const title = snipit.title;
                            const body = snipit.body;
                            const username = snipit.username;
                            const category = snipit.category;
                            return (
                                <SnipitView key={id} title={title} body={body} username={username} category={category} />
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