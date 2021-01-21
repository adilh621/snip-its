import React from "react";
import useLogRender from "../../utils/useLogPath";
import { Navbar, Button } from "react-bootstrap";
import "./style.css";
import logo from "./Snip.png";
import { Link } from "react-router-dom";
import userAPI from "../../utils/userAPI";

function Nav({ userState, logout }) {
  useLogRender();
  const user = userState;
  // function logout() {
  //   console.log("logout");
  //   userAPI.logoutUser({
  //     user: userState,
  //   });
  // }
  console.log(logout);
  return (
    //jsx
    <Navbar bg="red">
      <Link to="/">
        <img src={logo} id="logo" />
      </Link>
      <Button href="/login">Login</Button>
      {userState.email ? (
        <Button onClick={logout}>Logout of {userState.username}</Button>
      ) : (
        <div className="nonuser">No User logged in</div>
      )}
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
