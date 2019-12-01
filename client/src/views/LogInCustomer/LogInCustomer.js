import React, { Component } from "react";
import {BrowserRouter as Router, Route,Link, NavLink} from 'react-router-dom';
import createCust from './createCust';
import loginCust from './loginCust';
import logo from '../../assets/logo.svg';
import './LogInCustomer.css';

class LogInCustomer extends Component{
	 
	  render() {
	return (
	<Router>
	<div className = "App1" id="App1">
		<div className = "App__Aside" id = "App__Aside2">
		</div>
		
		<div className = "App__Form" id="App__Form">
			<div className = "PageSwitcher">
				<NavLink to = "/loginCust" activeClassName= "PageSwitcher__Item--Active" className ="PageSwitcher__Item"> Sign In </NavLink>
				<NavLink exact to = "/LogInCustomer" activeClassName = "PageSwitcher__Item--Active" className ="PageSwitcher__Item"> Sign Up </NavLink>
			</div>
			
			
			<div className="FormTitle">
				<NavLink to="/loginCust" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign In </NavLink> or <NavLink exact to = "/LogInCustomer"
				activeClassName = "FormTitle__Link--Active"className ="FormTitle__Link"> Sign Up</NavLink>
			</div>
			 
			
			<Route exact path="/LogInCustomer" component={createCust}>
			
			</Route>
			
			<Route exact path="/loginCust" component = {loginCust}>
				
			</Route>
			

		</div>
	</div>
	</Router>
	);
	
}
}

export default LogInCustomer; 