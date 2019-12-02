import React from "react";
import './Card-Style.css';
const Card = props=>{
return(
			<div className = "card text-center shadow" id="dishcard"> 
				<div className = "overflow">
					<img src ={ props.imgsrc } alt = "tempDish1" className="card-img-top" id="dish2"/>
				</div>
			<div className = "card-body text-dark" id="cardbody">
				<h4 className = "card-title" id="cardtitle">{props.title}</h4>
				<p className ="card-text text-secondary" id="cardtext">
				{props.description}
				</p>
				<a href="/FoodProfile/" className ="btn btn-outline-success">Find out more</a>
			</div>
			</div>
		);
};
export default Card;