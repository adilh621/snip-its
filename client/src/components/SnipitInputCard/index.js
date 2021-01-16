import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, Redirect, Route, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row } from "../Grid";
import { ForwardRefInput, FormBtn } from "../createSnipit";
import Dashboard from "../../pages/Dashboard";


function SnipitInputCard(props) {

    let history = useHistory();
    const currentUser = props.user;
    const setSnipits = props.setSnipits;
       // get input element ref for focus
   const titleInputElRef = useRef();
   const [formObject, setFormObject] = useState({
    body: "",
    username: "",
    title: "",
    category: ""
 });

 

   // Load all comments and store them with setComments
   useEffect(() => {
     // set user after successful component mount
     setFormObject({
        body: "",
        username: "",
        title: "",
        category: ""})

     // focus on titleInputEl if ref exists
     titleInputElRef.current.focus()
  }, []);



  	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
    }

    
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
            .then(history.push("/dashboard"))
            .then(loadSnipits())
			.catch((err) => console.log(err));
		}
	}
    
    return( <Col size='md-12'>
            <form>
                <Col size='sm-12'>
                    <ForwardRefInput ref={ titleInputElRef } value={formObject.title} onChange={handleInputChange} name='title' placeholder='Your Snip-it Title' />
                </Col>
                <Col size='sm-12'>
                    <ForwardRefInput ref={ titleInputElRef } value={formObject.body} onChange={handleInputChange} name='body' placeholder='Your Snip-it Here' />
                </Col>
                <Col size='sm-12'>
                    <ForwardRefInput ref={ titleInputElRef } value={formObject.category} onChange={handleInputChange} name='category' placeholder='Category of Snip-it' />
                </Col>
                <FormBtn
                    disabled={!formObject.body}
                    onClick={handleFormSubmit}>
                    Submit Snipit
                </FormBtn>
            </form>
        </Col>);
};

export default SnipitInputCard;