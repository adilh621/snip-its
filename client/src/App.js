import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Snipits from "./pages/Snipits";
import { Container } from "./components/Grid";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/Navbar";

function App() {
  const [userState, setUserState] = useState({});


  useEffect(() => {
    // auth user on first render
    authenticate();
  }, []);

  //user authentication

  function authenticate() {
    return userAPI
      .authenticateUser()
      .then(({ data }) => {
        console.log("user:", data);
        setUserState(data);
      })
      .catch((err) => console.log("registered user:", err.response));
  }
  function logout() {
    console.log("logout");
    userAPI
      .logoutUser()
      .then(location.reload())

  }

  return (
    <Router>
      <Nav userState={userState} logout={logout} />
      <Container fluid>
        <Switch>
          <Route exact path="/" render={(props) => <Snipits />} />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                userState={userState}
                setUserState={setUserState}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup {...props} authenticate={authenticate} user={userState} />
            )}
          />
          {/* { userState.email ? <ProtectedRoute exact path={["/", "/snipits"]} type="public">
                  <Snipits {...userState} />
               </ProtectedRoute>:<Route exact path={"/"}><Snipits {...userState} /></Route>} */}
          <ProtectedRoute path={["/", "/dashboard"]} type="private">
            <Dashboard {...userState} />
          </ProtectedRoute>
          <Route component={NoMatch} />
        </Switch>
      </Container>
    <Footer />
    </Router>
  );
}

export default App;
