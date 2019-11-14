import React, { Component } from "react";
import logo from '../../assets/logo.svg';
import './Account.css';
import Card from './CardUI';

class Account extends Component{

	
	render(){
		return(
		<div className = "UserAccount">
			<div className = "ProfilePic">
			<div className = "container-fluid d-flex justify-content-center">
				<div className = "card text-center shadow"> 
					<div className = "overflow">
						<img src ={ "./tempChefProPic.png" } alt = "tempDish1" className="card-img-top"/>
					</div>
			
						<h4 className = "card-title"> Gordon Ramsay</h4>
					
				</div>
			</div>
			</div>
		<div className="DishCards">
			<div className = "container-fluid d-flex justify-content-center">
				<div className = "row">
					<div className="col-md-4">
						<Card imgsrc = {"/tempDish1.png"} title="Chicken Curry"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc = {"/tempDish2.png"} title="Falafel"/>
					</div>
					<div className="col-md-4">
						<Card imgsrc = {"/tempDish3.png"} title="Crepes"/>
					</div>
				</div>
			</div>			
		</div>
		</div>
		);
	}
}

export default Account;