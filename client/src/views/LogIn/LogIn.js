import React, { Component } from "react";
import logo from '../../assets/logo.svg';
import './LogIn.css';

class LogIn extends Component{
	  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };
	
	    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  
  
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
	  render() {
	return (
	<div className = "LogInBackground">
	<div className="container">
	<div className="row justify-content-center">
	<div className="col-12 col-sm-12 col-md-4" >

	<div className="card-body">
	<div className="card text-center" >
		<h4 className="card-body text-center">Log In</h4>
		<div className ="Welcomemsg"> Welcome Back!</div>
		<form>
			<table>
				
		
				
				<tr className = "credentials">
					<p className= "label">
						Email:
					</p>
					<td className= "LogIn">
						<input type="text" placeholder = "Name" />
					</td>
				</tr> 
				<tr className = "credentials">
					<p className = "label">
						Password: 
					</p>
					<td className= "LogIn">
					
				
					
						<input
						  type={this.state.hidden ? "password" : "text"}
						  value={this.state.password}
						  onChange={this.handlePasswordChange}
						  placeholder="Password"
						 
						/>
							<button className="eye" onClick={this.toggleShow}>
							<img className= "passwordShow" src={ "/passwordShow.png" }/>
							</button>
				
					
					</td>
					
				</tr>
				
				
			</table>
		</form>
		<div className="container">
		  <div className="row">
			<div className="col text-center">
				<div className = "nav-item">
				  <a className = "nav-link" href="http://localhost:3000/Account#">
				     <button className="btn btn-default" >Log In</button>
				  </a>
				 </div>
			</div>
		  </div>
		</div>
	</div>
	

	
	
	
	</div>
	</div>
	</div>
	</div>
	</div>
	
	);
	
}
}

export default LogIn; 