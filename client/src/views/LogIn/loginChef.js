import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';

const PasswordExist = {
	exists: false
}
class loginChef extends Component{
	  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
      email: "",
      exist:false
    };
	
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
  	if(this.state.email && this.state.password){
  		this.setState({exist:true})
  	}else{
  		this.setState({exists:false})
  	}
  }
  
  
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e){
  	this.setState({ email: e.target.value});
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
					placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
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
					<button className="FormField__Button mr-20" onClick={this.onSubmit}>Sign In</button>
					<Link exact to = "/LogIn" className = "FormField__Link"> Create a chef account </Link>
				</div>
				<div className="HideMe">
				<Header exists={this.state.exist}/>
				</div>
			  </form>

			</div>
		
		);
	}
}



export default loginChef;