import React, { useEffect, useState } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import InfoCard from "../components/InfoCard";
import API from "../utils/API";
import YourSnipitsCard from "../components/DashboardSnipitsCard";
import SnipitInputCard from "../components/SnipitInputCard"
// import { Switch } from "react-router-dom";


function Dashboard(props) {

	const user = props.username;
	// console.log(createState === "dashboard");

	const [snipits, setSnipits] = useState([]);
	const [createState, setCreateState] = useState("dashboard")
	



	useEffect(() => {
	
		loadSnipits();

	}, []);

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

	// Deletes a snipit from the database with a given id, then reloads comments from the db
	function deleteSnipit(id) {
		API.deleteSnipit(id)
			.then((res) => loadSnipits())
			.catch((err) => console.log(err));
	}

	const filteredSnipits = snipits.filter(function (obj) {
		return obj.username === user;
	});

	// console.log(filteredSnipits);

	return (<Container fluid>
				<a><Link to={"/snipits"}>Main Page!</Link></a>
		<Row>
			<Col size="md-3">
				<div>
				<InfoCard userinfo={props} filteredSnipits={filteredSnipits}/>
				</div>
			</Col>
			<Col size="md-9">
				{createState === "dashboard" && <YourSnipitsCard filteredSnipits={filteredSnipits} snipits={snipits} deleteSnipit={deleteSnipit} user={user} setSnipits={setSnipits} setCreateState={setCreateState} />}
				   
				{createState === "create" && <SnipitInputCard user={user} setSnipits={setSnipits} setCreateState={setCreateState} /> }
			</Col>
		</Row>
	</Container>);
}

export default Dashboard;
