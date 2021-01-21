import React, { Component, useHistory } from "react";
import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/createSnipit";
import "./Login.css"


class Login extends Component {
  state = {
      email: "",
      password: ""
    };
    
    
  componentDidMount() {
 
  }
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    if (this.state.email && this.state.password) {
      userAPI.loginUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if(res.status === 200 ){
             this.props.setUserState(res.data)
             history.push("/");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <form>
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
                // style={{justifyContent: 'center'}}
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
                // style={{justifyContent: 'center'}}
                type="password"
              />
              
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
             <Link to="/signup">
               <FormBtn> Signup </FormBtn>
             </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;