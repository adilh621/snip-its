import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import "./style.css";


function SnipitsSearchSidebar(props) {
    const setFilter = props.setFilter;
    const setSearch = props.setSearch;
    const search = props.search;
    const [searchValue, setSearchValue] = useState();    


    
    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setFilter(event.target.value);
        setSearchValue(event.target.value);
        setSearch(event.target.value)
    };

     function handleSubmit(event) {
        //  console.log(searchValue);
        event.preventDefault();
        setSearch(searchValue)
      };

    return(		<Card id="snipitsPageSideBar">
    <Card.Header><h1>Search And Filter Snipits</h1></Card.Header>
    <Form inline onSubmit={handleSubmit}>
        <Form.Label>Search</Form.Label>
      <FormControl 
      type="text" 
      onChange={event => setSearchValue(event.target.value)}
      placeholder="Snipit" 
      className="mr-sm-2" id="searchInput" 
       />
      <Button 
      variant="outline-info" 
      type="submit" 
        >
          Search
          </Button>
    </Form>
    <Card.Body>
        <h2>Categories:</h2>
        <ul>
            <Button onClick={handleClick} value="Javascript">Javascript</Button>
            <br />
            <Button onClick={handleClick} value="HTML">HTML</Button>
            <br />
            <Button onClick={handleClick} value="CSS">CSS</Button>
            <br />
            <Button onClick={handleClick} value="JSX">JSX</Button>
            <br />
            <Button onClick={handleClick} value="Python">Python</Button>
        </ul>
        </Card.Body>
    <Card.Footer>
        <Button onClick={handleClick} value="">Reset Filters</Button></Card.Footer>
</Card>);
};

export default SnipitsSearchSidebar;