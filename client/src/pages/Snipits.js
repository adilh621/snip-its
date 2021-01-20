import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import SnipitView from "../components/Snipit"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import Card from 'react-bootstrap/Card';
import SnipitSearchSidebar from "../components/SnipitsSearchSidebar";

function Snipits({ username }) {
	const currentUser = username;
	console.log(currentUser);
	// Setting our component's initial state
	const [snipits, setSnipits] = useState([]);

   


	// Load all comments and store them with setComments
	useEffect(() => {
      loadSnipits();
   }, []);
   


	// Loads all comments and sets them to comments
	function loadSnipits() {
		console.log("Here!")
		// console.log(API.getSnipits)
		API.getSnipits()
			.then((res) => {
				// console.log(res)
				setSnipits(res.data);
			})
			.catch((err) => console.log(err));
	}

	return <>
		<Row>
			<Col size="md-4">
				<a><Link to={"/dashboard"}>Dashboard!</Link></a>
				<a><Link to={"/login"}>Login</Link></a>
			</Col>
		</Row>
		<Container fluid>
		<Row>
		<Col size="md-2">
		<SnipitSearchSidebar />
		</Col>
		<Col size="md-9">
		<Card id="snipitsPageSnipitsCard">
		<Card.Header>
			<h3>Snipits:</h3>
			<p>Filterd By: "put filter category here!"</p></Card.Header>
		<Card.Body>
		<Row>
			<Col size='md-12'>
				{snipits.length ? (
					<Table>
						<Row>
						{snipits.map(snipit => {
							console.log(snipit);
							const id = snipit._id;
							const title = snipit.title;
							const body = snipit.body;
							const username = snipit.username;
							const category = snipit.category;
							return (
							<SnipitView key={id} title={title} body={body} username={username} category={category} />
						)}
						)}
						</Row>
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
			</Col>
		</Row>
		</Card.Body>
		</Card>
		</Col>
		</Row>
		</Container>,
	</>;
}

export default Snipits;
