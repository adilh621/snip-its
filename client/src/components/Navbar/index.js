import React from "react";
import useLogRender from "../../utils/useLogPath";
import { Navbar, Button } from "react-bootstrap";
import "./style.css";
import logo from "./Snip.png";
import { Link } from "react-router-dom";

function Nav({ userState }) {
  useLogRender();
  function DashboardButtonClick() {
    return <Link to={"/dashboard"}></Link>;
  }
  return (
    //jsx
    <Navbar bg="light">
      <Link to="/">
        <img src={logo} id="logo" />
      </Link>
      <Button href="/login">Login</Button>
      {userState.email ? (
        // <a href="/dashboard">Dashboard</a>
        <Link to="/dashboard">
          <Button> Dashboard </Button>
        </Link>
      ) : (
        <h3>Login to see your Dashboard!</h3>
      )}
    </Navbar>
  );
}

export default Nav;
