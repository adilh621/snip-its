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

  return (<Card id="snipitsPageSideBar">

    <Card.Header id={"sideBarTitle"}>
      <Card id={"searchTitleTxtBox"}>
        <p id={"searchTitleTxt"}>Search And Filter Snipits</p>
      </Card>
    </Card.Header>
    <Card.Body>
      <div id={"searchBox"}>
        <Form inline onSubmit={handleSubmit}>
          <Row>
            <Col size={"lg-12"}>
              <div id={"searchAreaInputAndBtn"}>
                <Row>
                  <Col size={"lg-9"}>
                  <FormControl
                type="text"
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                placeholder="Search By Title"
                className="mr-sm-2" id="searchInput"
              />
                  </Col>
                  <Col size={"lg-3"}>
                  <Button className="fontStyle" variant="outline-info" type="submit">Search</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col size={"lg-12"}>
          <h2 className={"fontStyle"}>Categories:</h2>
          </Col>
          <Col size={"lg-12"}>
          <Card>
          <ButtonGroup vertical>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="Javascript">Javascript</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="HTML">HTML</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="CSS">CSS</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="JSX">JSX</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="Python">Python</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="React">React</Button>
            <Button className={"filterOptionsBtn"} onClick={handleClick} value="Node.js">Node.js</Button>


          </ButtonGroup>
          </Card>
          </Col>
          </Row>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="info" onClick={handleClick} value="">Reset Filters</Button></Card.Footer>
</Card>);
};

export default SnipitsSearchSidebar;