import React, { useEffect, useState } from "react";
import { Table, Tr, Td } from "../components/Table";
import SnipitView from "../components/Snipit"
import { Col, Row, Container } from "../components/Grid";
import InfoCard from "../components/InfoCard";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";
import YourSnipitsCard from "../components/YourSnipitsCard";
import { MongooseDocument } from "mongoose";

function Dashboard(props) {

	const user = props.username;
	console.log(user);

	const [snipits, setSnipits] = useState([]);

	useEffect(() => {

		loadSnipits();

	}, []);

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

	// Deletes a snipit from the database with a given id, then reloads comments from the db
	function deleteSnipit(id) {
		API.deleteSnipit(id)
			.then((res) => loadSnipits())
			.catch((err) => console.log(err));
	}

	const filteredSnipits = snipits.filter(function (obj) {
		return obj.username === user;
	});

	console.log(filteredSnipits);

	return (<Container fluid>
		<Row>
			<Col size="md-3">
				<div>
				<InfoCard />
				</div>
			</Col>
			<Col size="md-9">
			<YourSnipitsCard filteredSnipits={filteredSnipits} snipits={snipits} deleteSnipit={deleteSnipit} />
			</Col>
		</Row>
	</Container>);
}

export default Dashboard;
