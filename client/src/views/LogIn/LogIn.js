import React, { Component } from "react";
import {BrowserRouter as Router, Route,Link, NavLink} from 'react-router-dom';
import createChef from './createChef';
import loginChef from './loginChef';
import logo from '../../assets/logo.svg';
import './LogIn.css';

class LogIn extends Component{
	 
	  render() {
	return (
	<Router>
	<div className = "App1" id="App1">
		<div className = "App__Aside" id = "App__Aside">
		</div>
		
		<div className = "App__Form" id="App__Form">
			<div className = "PageSwitcher">
				<NavLink to = "/loginChef" activeClassName= "PageSwitcher__Item--Active" className ="PageSwitcher__Item"> Sign In </NavLink>
				<NavLink exact to = "/LogIn" activeClassName = "PageSwitcher__Item--Active" className ="PageSwitcher__Item"> Sign Up </NavLink>
			</div>
			
			
			<div className="FormTitle">
				<NavLink to="/loginChef" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign In </NavLink> or <NavLink exact to = "/LogIn"
				activeClassName = "FormTitle__Link--Active"className ="FormTitle__Link"> Sign Up</NavLink>
			</div>
			 
			
			<Route exact path="/LogIn" component={createChef}>
			
			</Route>
			
			<Route exact path="/loginChef" component = {loginChef}>
				
			</Route>
			

		</div>
	</div>
	</Router>
	);
	
}
}

export default LogIn; 