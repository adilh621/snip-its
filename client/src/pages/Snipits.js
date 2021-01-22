import React, { useState, useEffect, useRef } from "react";
import API from "../utils/API";
import SnipitView from "../components/Snipit";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Table, Tr, Td } from "../components/Table";
import Card from "react-bootstrap/Card";
import SnipitSearchSidebar from "../components/SnipitsSearchSidebar";

function Snipits({ username }) {
  const currentUser = username;
  console.log(currentUser);
  // Setting our component's initial state
  const [snipits, setSnipits] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // Load all comments and store them with setComments
  useEffect(() => {
    loadSnipits();
  }, [filter, search]);

  function filterByCategory(data) {
    setSnipits(
      data.filter(function (obj) {
        return obj.category === filter;
      })
    );
  }

  function searchByTitle(data) {
    setSnipits(
      data.filter(function (obj) {
        return obj.title.toLowerCase() === search.toLowerCase();
      })
    );
  }

  // Loads all comments and sets them to comments
  function loadSnipits() {
    console.log("Here!");
    // console.log(API.getSnipits)
    API.getSnipits()
      .then((res) => {
        console.log(res);
        if (filter) {
          filterByCategory(res.data);
        } else if (search) {
          searchByTitle(res.data);
        } else if (filter === "" && search === "") {
          setSnipits(res.data);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <SnipitSearchSidebar
              setFilter={setFilter}
              setSearch={setSearch}
              search={search}
            />
          </Col>
          <Col size="md-9">
            <Card id="snipitsPageSnipitsCard">
              <Card.Header>
                <div id={"mainpageLogo"}>
                <img src={"https://i.imgur.com/JmiwwlY.png"} id="logo" />
                </div>
                <div id={"descriptionTxtBox"}>
                <h2 className={"mainpageTitle"}>Check Out Code Others Have Shared And Sign Up And Share Your Own</h2>
                </div>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col size={"2"}>
                      <p className={"filter"}>Filterd Snipits By:</p>
                  </Col>
                  <Col size={"3"}>
                      <p className={"filter"}> {filter} </p>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12">
                    {snipits.length ? (
                      <Row>
                        {snipits.map((snipit) => {
                          console.log(snipit);
                          const id = snipit._id;
                          const title = snipit.title;
                          const body = snipit.body;
                          const username = snipit.username;
                          const category = snipit.category;
                          return (
                            <SnipitView
                              key={id}
                              title={title}
                              body={body}
                              username={username}
                              category={category}
                            />
                          );
                        })}
                      </Row>
                    ) : (
                        <p id="noResultsTxt">No Results to Match Your Search</p>
                      )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default Snipits;
