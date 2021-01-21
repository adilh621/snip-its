import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Col, Row, Container } from "../Grid";
import "./style.css";


function SnipitsSearchSidebar(props) {
    const setFilter = props.setFilter;
    const setSearch = props.setSearch;
    const search = props.search;
    const [searchValue, setSearchValue] = useState("");    


    
    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setFilter(event.target.value);
        if (event.target.value === "") {
          setSearchValue(event.target.value);
          setSearch(event.target.value)
        }
    };

     function handleSubmit(event) {
        //  console.log(searchValue);
        event.preventDefault();
        setSearch(searchValue)
        setSearchValue("")
      };

    return(		<Card id="snipitsPageSideBar">
      <Card.Header id="sideBarTitle">
    <Row>
    <Col size="lg-12">
    <h1>Search And Filter Snipits</h1>
    </Col>
    </Row>
    </Card.Header>
    <Row>
    <Form inline onSubmit={handleSubmit}>
    <Col size="lg-12">
      <Form.Label>Search</Form.Label>
      <div id="searchArea">
       <FormControl 
      type="text"
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)}
      placeholder="Search By Title"
      className="mr-sm-2" id="searchInput" 
       />
      <Button variant="outline-info" type="submit">Search</Button>
      </div>
    </Col>
    </Form>
    </Row>
    <Card.Body>
        <h2>Categories:</h2>
        <ButtonGroup vertical>
            <Button onClick={handleClick} value="Javascript">Javascript</Button>
            <Button onClick={handleClick} value="HTML">HTML</Button>
            <Button onClick={handleClick} value="CSS">CSS</Button>
            <Button onClick={handleClick} value="JSX">JSX</Button>
            <Button onClick={handleClick} value="Python">Python</Button>
          </ButtonGroup>
        </Card.Body>
    <Card.Footer>
        <Button onClick={handleClick} value="">Reset Filters</Button></Card.Footer>
</Card>);
};

export default SnipitsSearchSidebar;