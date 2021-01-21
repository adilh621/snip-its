import React from "react";
import useLogRender from "../../utils/useLogPath";
//import { Navbar } from "react-bootstrap";
import "./style.css";

function Footer() {
  useLogRender();

  return (
    //jsx
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Built using React.js
      </p>
    </footer>
  );
}

export default Footer;
