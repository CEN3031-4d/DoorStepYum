import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
    return (
	<div>
	<header id="page-header">
	  <div className="container-fluid">
		<div className="row">
		  <div className="col-12 text-center text-uppercase">
		  </div>
		</div>
		<div className="row">
		  <div className="col-12 text-center"> <img className="img-fluid" src={"/uchuuSushi.jpg"}/>
		  </div>
		</div>
	  </div>
		</header>

	<section id="description" class="bg-light">
	  <div class="container">
		<div class="row">
		  <div class="col-12 text-center">
			<div class="h1">What We Do</div>
			<div class="section-body">Yummy! aims to bring the pleasures of a home cooked meal straight to your door. Our diverse team of home chefs are trained in preparing the finest, most authentic global cuisine. Take a look at our chefs to find out more about their diverse cuisine.
			</div>
			<a href="#" class="btn btn-default btn-outline-success font-weight-normal">
					<Link to="/BrowsebyChef" id="requestChefButt2">Our Chefs</Link>
			</a> 
		  </div>
		</div>
	  </div>
	</section>
	
	<section className="bg-white">
	  <div className="container-fluid">
	   <div className="row">
		<div className="col-12 text-center">
		  <div class="h1">Our Chefs</div>
		 </div>
		</div>
		<div className="row">
		  <div className="col-12 col-sm-12 col-md-4">
			<div class="card"> 
			<div className = "overflow">
			<img className="card-img-top" src={"/chef1.jpg"} alt="Card image cap"/>
			</div>
			  <div class="card-body text-center">
				<h5 class="card-title">Bob Smith</h5>
			  </div>
			</div>
		</div>
		<div className="col-12 col-sm-12 col-md-4">
			<div className="card">
			<div className = "overflow">
			<img className="card-img-top" src={"/chef2.jpg"} alt="Card image cap"/>
			</div>
			  <div className="card-body text-center">
				<h5 className="card-title">Sarah Sanders</h5>
			  </div>
		  </div>
		</div>
		<div className="col-12 col-sm-12 col-md-4">
			<div className="card"> 
			<div className = "overflow">
			<img className="card-img-top" src={"/chef3.jpg"}alt="Card image cap"/>
			</div>
			  <div className="card-body text-center" id="cardbody2">
				<h5 className="card-title">Joe Foster</h5>
			  </div>
		  </div>
		</div>
	  </div>
		</div>
	</section>
	<footer id="page-footer" className="bg-light">
      <div className="container">
        <span className="text-muted">Yummy © 2019</span>
		</div>
    </footer>
	</div>
    );
}

export default Home;