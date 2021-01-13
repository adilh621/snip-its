import React from "react";
import useLogRender from "../../utils/useLogPath";

// useLogRender();
class Nav extends React.Component {
	  
	
	
	render(){
		const userState = Object.keys(this.props.userstate).length
		console.log(userState);
		return (
			<nav>
				
				<img src="../images/snip.jpg" alt="logo" style={{height:"200px", width:"200px", marginTop:"-50px"}}></img> 
				{userState === 0 ? <h1>Log In</h1>:<h1>Log Out</h1>}
				
			</nav> 
		);
	}
	
}

export default Nav;
