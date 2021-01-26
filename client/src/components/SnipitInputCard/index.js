import React, { useState, useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import { ForwardRefInput, FormBtn } from "../createSnipit";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import CodeInputBox from "../CodeInputBox";
import "./style.css";






function SnipitInputCard(props) {

    let history = useHistory();
    const currentUser = props.user;
    const setSnipits = props.setSnipits;
    // get input element ref for focus
    const titleInputElRef = useRef();
    const [code, setCode] = useState("");
    const [category, setCategory] = useState("Select Category");
    const [formObject, setFormObject] = useState({
        body: "",
        username: "",
        title: ""
    });



    // Load all comments and store them with setComments
    useEffect(() => {
        // set user after successful component mount
        setFormObject({
            body: "",
            username: "",
            title: ""
        })

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
        const titleLength = formObject.title.length;
        if (code && titleLength > 1 && titleLength < 51 && category) {
            console.log(code.toString());
            API.saveSnipit({
                body: code,
                category: category,
                title: formObject.title,
                username: currentUser
            })
                .then(history.push("/dashboard"))
                .then(loadSnipits())
                .catch((err) => console.log(err));
        }
    }

    function onClick(event) {
        event.preventDefault();
        setCategory(event.target.getAttribute("value"));

    }

    return (<Col size='md-12'>
        <div id="snipitInputCard" style={{backgroundColor: "darkslateblue", padding: "0px", border: "solid black 2px"}}>
            <p className={"fontStyle"}>Create Your Snipit:</p>
            <form>
                <br />
                    <ForwardRefInput ref={titleInputElRef} value={formObject.title} onChange={handleInputChange} name='title' placeholder='Your Snip-it Title' />
                <br />
                    <div style={{border: "solid black 2px", marginBottom: "10px", backgroundColor: "darkgrey"}}>
                    <CodeInputBox setCode={setCode} />
                    </div>
                <br />
                    <div style={{alignContent: "center"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            {category}
                    </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item value="Javascript" onClick={onClick}>Javascript</Dropdown.Item>
                            <Dropdown.Item value="Python" onClick={onClick}>Python</Dropdown.Item>
                            <Dropdown.Item value="JSX" onClick={onClick}>JSX</Dropdown.Item>
                            <Dropdown.Item value="React" onClick={onClick}>React</Dropdown.Item>
                            <Dropdown.Item value="Node.js" onClick={onClick}>Node.js</Dropdown.Item>
                            <Dropdown.Item value="HTML" onClick={onClick}>HTML</Dropdown.Item>
                            <Dropdown.Item value="CSS" onClick={onClick}>CSS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                <br />
                <Row>
                <Col size={"sm-6"}>
                    <FormBtn
                    disabled={!code || category === "Select Category"}
                    onClick={handleFormSubmit}>
                    Submit Snipit
                </FormBtn>
                </Col>
                <Col size={"sm-6"}>
                <Link to="/dashboard"><Button variant="info">Cancel</Button></Link>
                </Col>
                </Row>
            </form>
        </div>
    </Col>);
};

export default SnipitInputCard;