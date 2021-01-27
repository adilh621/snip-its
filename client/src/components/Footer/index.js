import React from "react";
import useLogRender from "../../utils/useLogPath";
//import { Navbar } from "react-bootstrap";
import "./style.css";

function Footer() {
  useLogRender();

  return (
    //jsx
    <footer className = "footerctn">
      <div id={"footerBox"}>
      <p id={"footerTxt"}>© Snipits 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
