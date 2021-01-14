import React, { useEffect, useState } from "react";
import { Table, Tr, Td } from "../components/Table";
import SnipitView from "../components/Snipit"
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import API from "../utils/API";

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
  
  const filteredSnipits = snipits.filter(function( obj ) {
    return obj.username === user;
});

  console.log(filteredSnipits);

  return (<Container>
    <Row>
      <Col size="md-3">
        <h1>Sidebar</h1>
      </Col>
      <Col size="md-9">
      <Card>
        <h1>Your Snipits!</h1>
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
						)}
						)}
						</Row>
					</Table>
				) : (
					<h3>No Results to Display</h3>
				)}
      </Card>
      </Col>
    </Row>
  </Container>);
}

export default Dashboard;
