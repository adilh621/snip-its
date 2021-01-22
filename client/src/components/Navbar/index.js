import React from "react";
import { useHistory } from "react-router-dom";
import useLogRender from "../../utils/useLogPath";
import { Navbar, Button } from "react-bootstrap";
import "./style.css";
import logo from "./Snip.png";
import { Link } from "react-router-dom";
import userAPI from "../../utils/userAPI";


function Nav({ userState, logout, logoutState}) {
  useLogRender();
  const user = userState;
  const history = useHistory();


  // console.log(logoutState)
  // console.log(history);
  const path = history.location.pathname;


  return (
    //jsx
    <Navbar bg="red" className={"snipitsNav justify-content-between"}>
      <Link to="/">
        <img src={logo} id="logo" />
      </Link>
      <Navbar.Collapse className="justify-content-end">
      {userState.email || path === "/login" ? <></>:
      <Link to="/login">
          <Button variant="info" style={{float: "right"}}> Login </Button>
        </Link>}
      {userState.email ? (
        <Button onClick={()=>{logout()}} variant="info">Logout of {userState.username}</Button>
      ) : (
        <></>
      )}
      </Navbar.Collapse>
      {userState.email && path === "/" ? (
        // <a href="/dashboard">Dashboard</a>
        <Link to="/dashboard">
          <Button variant="info"> Dashboard </Button>
        </Link>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default Nav;
