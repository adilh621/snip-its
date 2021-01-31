import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "../components/InfoCard";
import API from "../utils/API";
import YourSnipitsCard from "../components/DashboardSnipitsCard";
import SnipitInputCard from "../components/SnipitInputCard"



function Dashboard(props) {

	const user = props.username;

	console.log(props)
	

	const [snipits, setSnipits] = useState([]);
	
	useEffect(() => {
	
		loadSnipits();

	}, []);

	function loadSnipits() {
		
		
		API.getSnipits()
			.then((res) => {
				
				setSnipits(res.data);
			})
			.catch((err) => console.log(err));
	}

	// Deletes a snipit from the database with a given id, then reloads snipits from the db
	function deleteSnipit(id) {
		API.deleteSnipit(id)
			.then((res) => loadSnipits())
			.catch((err) => console.log(err));
	}

	const filteredSnipits = snipits.filter(function (obj) {
		return obj.username === user;
	});

	

	return (<Container fluid>
		<Row>
			<Col lg={3}>
				<div>
				<InfoCard userinfo={props} filteredSnipits={filteredSnipits}/>
				</div>
			</Col>
			<Col lg={9}>
			<Switch>
				<Route exact path={"/dashboard"}>
					<YourSnipitsCard filteredSnipits={filteredSnipits} snipits={snipits} deleteSnipit={deleteSnipit} user={user} setSnipits={setSnipits} />
				</Route>
				<Route exact path={"/dashboard/create"}>
            		<SnipitInputCard user={user} setSnipits={setSnipits} />
            	</Route>
			</Switch>
			</Col>
		</Row>
	</Container>);
}

export default Dashboard;
