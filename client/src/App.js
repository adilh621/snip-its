import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Snipits from "./pages/Snipits";
import { Container } from "./components/Grid";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Head from "./components/Head";
import userAPI from "./utils/userAPI";
import ProtectedRoute from "./components/ProtectedRoute"
import history from "./utils/History"

function App() {
	const [userState, setUserState] = useState({});
	const path = history.location.pathname;
	console.log(path);

   useEffect(() => { 
	   // auth user on first render
	  authenticate()
	  .then(() => {
		// userState.username ? <Redirect to="/dashboard"/>: <></>
	  })
	  
   }, []);

	//user authentication
	function authenticate() {
		return userAPI.authenticateUser()
			.then(({ data }) => {
			console.log('user:', data );
			setUserState(data);
			})
			.catch((err) => console.log('registered user:', err.response));
	}

	return (
		<Router history={history}>
			<Head />
			<Container fluid>
				<Switch>
				<Route exact path="/" type="public">
                  <Snipits {...userState} />
               </Route>
					<Route
						exact
						path='/login'
						render={ props => (
							<Login
								{...props}
								userState={userState}
								setUserState={setUserState}
							/>
						)}
					/>
					<Route
						exact
						path='/signup'
						render={ props => (
							<Signup
								{...props}
								authenticate={authenticate}
								user={userState}
							/>
						)}
					/>
               <ProtectedRoute path={["/", "/dashboard"]} type="private">
                  <Dashboard {...userState} />
               </ProtectedRoute>
					<Route component={NoMatch} />
				</Switch>
			</Container>
			{/* {userState.email ? <Redirect to={path} />: <></>} */}
		</Router>
	);
}

export default App;
