import React, { Component } from "react";
import {Link} from 'react-router-dom';

class loginChef extends Component{
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
	render(){
		return (
		<div className="FormCenter">
			  <form className = "FormFields" onSubmit={this.handleSubmit}>
			
				<div className="FormField">
					<label className="FormField__Label" htmlFor="email"> E-Mail Address </label>
					<input type="email" id="email" className ="FormField__Input" 
					placeholder="Enter your email" name="email" />
				</div>
				
				<div className="FormField">
					<label className="FormField__Label" htmlFor="password"> Password </label>
					<input type={this.state.hidden ? "password" : "text"}
						id="password" 
						className ="FormField__Input" 
						value={this.state.password}
						onChange={this.handlePasswordChange}
						placeholder="Enter your password" name="password" />
						
					<label className="FormField__CheckboxLabel">
						<input className = "FormField__Checkbox" type ="checkbox" name="hasAgreed" onClick={this.toggleShow}/> Show Password
					</label>
				</div>
				
				<div className="FormField">
					<button className="FormField__Button mr-20">Sign In</button>
					<Link exact to = "/LogIn" className = "FormField__Link"> Create a chef account </Link>
				</div>
				
				
			  </form>
			</div>
		
		);
	}
}



export default loginChef;