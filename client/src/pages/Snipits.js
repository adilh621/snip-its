import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import SnipitView from "../components/Snipit"
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import Button from 'react-bootstrap/Button';
import { ForwardRefInput, FormBtn } from "../components/createSnipit";

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
				console.log(res)
				setSnipits(res.data);
			})
			.catch((err) => console.log(err));
	}

	return <>
		<Row>
			<Col size="md-4">
				<a><Link to={"/dashboard"}>Dashboard!</Link></a>
			</Col>
		</Row>
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
		</Row>,
	</>;
}

export default Snipits;
