import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container, Row, Col } from "react-bootstrap";
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
      <Form inline onSubmit={handleSubmit} id={"searchBox"}>
        <Form.Row>
          <Col sm={8}>
            <FormControl
              type="text"
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              placeholder="Search By Title"
              className="mr-sm-2"
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm={3}>
            <Button id="searchBtn" className="fontStyle" variant="outline-info" type="submit">Search</Button>
          </Col>
        </Form.Row>
      </Form>
      <Container fluid>
      <Row>
        <Col lg={12}>
          <h2 className={"fontStyle"}>Categories:</h2>
        </Col>
        <Col lg={12}>
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
      </Container>
    </Card.Body>
    <Card.Footer>
      <Button variant="info" onClick={handleClick} value="">Reset Filters</Button></Card.Footer>
  </Card>);
};

export default SnipitsSearchSidebar;