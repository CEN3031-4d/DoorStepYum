/* global gapi */
import React, { Component } from "react";
import {BrowserRouter as Router, Route,Link, NavLink} from 'react-router-dom';
import createChef from './createChef';
import loginChef from './loginChef';
import logo from '../../assets/logo.svg';
import './LogIn.css';

class LogIn extends Component{
	constructor(props) {
		super(props)
		this.state = {
			isSignedIn: false,
		}
	}

	onSuccess() {
		this.setState({
		  isSignedIn: true
		})
	  }
	  
	  componentDidMount() {
		const successCallback = this.onSuccess.bind(this);
  
		window.gapi.load('auth2', () => {
		  this.auth2 = gapi.auth2.init({
			client_id: '857035290518-g1ef58o294mf4i57gemgcpb2jtdu7u1n.apps.googleusercontent.com',
		  })
	  
		  window.gapi.load('signin2', function() {
			// render a sign in button
			// using this method will show Signed In if the user is already signed in
			var opts = {
			  width: 200,
			  height: 50,
			  client_id: '857035290518-g1ef58o294mf4i57gemgcpb2jtdu7u1n.apps.googleusercontent.com',
			  onSuccess: successCallback
			}
			gapi.signin2.render('loginButton', opts)
		  })
		})
	  }
	  
	  onSuccess() {
		console.log('on success')
		this.setState({
		  isSignedIn: true,
		  err: null
		})
	  }
	
	  onLoginFailed(err) {
		this.setState({
		  isSignedIn: false,
		  error: err,
		})
	  }

	getContent() {
		if (this.state.isSignedIn) {
		  return <p>hello user, you're signed in </p>
		} else {
		  return (
			<div>
			  <p>You are not signed in. Click here to sign in.</p>
			  <button id="loginButton">Login with Google</button>
			</div>
		  )
		}
	}


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
			
			{this.getContent()}   
			
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