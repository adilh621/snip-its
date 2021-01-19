import React from "react";
import Card from 'react-bootstrap/Card';


function SnipitsSearchSidebar() {

    return(		<Card id="snipitsPageSideBar">
    <Card.Header><h1>Search And Filter Snipits</h1></Card.Header>
    <Card.Body style={{backgroundColor: "blue"}}>
        <h2>Categories:</h2>
        <ul>
            <a href=""><li>Javascript</li></a>
            <br />
            <a href=""><li>HTML</li></a>
            <br />
            <a href=""><li>CSS</li></a>
            <br />
            <a href=""><li>JSX</li></a>
            <br />
            <a href=""><li>Python</li></a>
        </ul>
        </Card.Body>
    <Card.Footer><a href=""><p>Reset Filters</p></a></Card.Footer>
</Card>);
};

export default SnipitsSearchSidebar;