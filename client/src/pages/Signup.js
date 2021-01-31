import React, { Component , setState , useState} from "react";

import userAPI from "../utils/userAPI";
import {  Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Input, FormBtn } from "../components/createSnipit";
import {storage} from '../firebase/index'

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    passwordConf: "",
    userImage : ""
  };
   

     onUpload = e => {
      if(e.target.files[0]){
        this.setState({
          userImage : e.target.files[0]
        })
      }
      console.log(this)
  
      
    }

  handleInputChange = event => {

    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
      
      
    });
  };

  handleFormSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    console.log(event)
    console.log(this.state)

    if (this.state.email && this.state.password) {
      userAPI.signup({
        username: this.state.username,
        name:this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf,

      })
        .then(res => {
          if(res.status === 200 ){
            this.props.authenticate();
            history.push("/snipits");
          }
        })
        .catch(err => console.log(err));
    }

    // const image = this.state.userImage
    // const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // uploadTask.on(
    //   "state_changed",
    //   snapshot=> {},
    //   error => {
    //     console.log(error)
    //   },
    //   ()=>{
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then(url => {

    //         console.log(url)
    //       })
    //   }
    // )
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={12}>
            <form style={{marginTop: "20px"}}>
            <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name"
                style={{width: "500px", margin: "auto"}}
              />
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
                style={{width: "500px", margin: "auto"}}
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
                style={{width: "500px", margin: "auto"}}
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="(Password)"
                type="password"
                style={{width: "500px", margin: "auto"}}
              />
              <Input
                value={this.state.passwordConf}
                onChange={this.handleInputChange}
                name="passwordConf"
                placeholder="(Confirm Password)"
                type="password"
                style={{width: "500px", margin: "auto"}}
              />
              {/* <Input

                onChange={this.onUpload}
 
                type="file"
                style={{width: "500px", margin: "auto"}}
              /> */}
              <FormBtn
                // disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                signup
              </FormBtn>
              <Link to="/">
               <FormBtn> Login </FormBtn>
             </Link>
            </form>
          </Col>
          
        </Row>
        {/* redirect on authenticated */}
        {this.props.authenticated ? <Redirect to='/snipits'/>: <div></div>}


      </Container>
    );
  }
}

export default Signup;