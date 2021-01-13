import React, { useState, useEffect, useRef } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import SnipitView from "../components/Snipit"
import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import { ForwardRefInput, FormBtn } from "../components/createSnipit";

function Snipits({ username }) {
	const currentUser = username;
	console.log(currentUser);
	// Setting our component's initial state
	const [snipits, setSnipits] = useState([]);
	const [formObject, setFormObject] = useState({
      body: "",
	  username: "",
	  title: "",
	  category: ""
   });
   
   // get input element ref for focus
   const titleInputElRef = useRef();

	// Load all comments and store them with setComments
	useEffect(() => {
      // set user after successful component mount
      setFormObject({
         body: "",
		 username: "",
		 title: "",
		 category: ""})

      loadSnipits();

      // focus on titleInputEl if ref exists
      titleInputElRef.current.focus()
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

	// Deletes a comment from the database with a given id, then reloads comments from the db
	function deleteSnipit(id) {
		API.deleteSnipit(id)
			.then((res) => loadSnipits())
			.catch((err) => console.log(err));
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// When the form is submitted, use the API.saveComment method to save the comment data
	// Then reload comments from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.body) {
			console.log(formObject);
			API.saveSnipit({
				body: formObject.body,
				category: formObject.category,
				title: formObject.title,
				username: currentUser
			})
            .then(loadSnipits)
            .then(() => setFormObject({
               body: "",
			   category: "",
			   title: "",
            }))
				.catch((err) => console.log(err));
		}
	}

	return <>
		<Row>
			<Col size='md-12'>
				<form>
					<Col size='sm-12'>
						<ForwardRefInput ref={ titleInputElRef } value={formObject.title} onChange={handleInputChange} name='title' placeholder='Your Snip-It Title' />
					</Col>
					<Col size='sm-12'>
						<ForwardRefInput ref={ titleInputElRef } value={formObject.body} onChange={handleInputChange} name='body' placeholder='Your Snip-It Here' />
					</Col>
					<Col size='sm-12'>
						<ForwardRefInput ref={ titleInputElRef } value={formObject.category} onChange={handleInputChange} name='category' placeholder='Category of Snip-It' />
					</Col>
					<FormBtn
						disabled={!formObject.body}
						onClick={handleFormSubmit}>
						Submit Snipit
					</FormBtn>
				</form>
			</Col>
		</Row>,
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
