import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function SnipitsSearchSidebar(props) {
    const setFilter = props.setFilter;

    
    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setFilter(event.target.value)
    }

    return(		<Card id="snipitsPageSideBar">
    <Card.Header><h1>Search And Filter Snipits</h1></Card.Header>
    <Card.Body style={{backgroundColor: "blue"}}>
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
    <Card.Footer><Button onClick={handleClick} value="">Reset Filters</Button></Card.Footer>
</Card>);
};

export default SnipitsSearchSidebar;