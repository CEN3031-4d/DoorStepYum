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
	  <div class="container-fluid">
		<div class="row">
		  <div class="col-12 text-center text-uppercase">
		  </div>
		</div>
		<div class="row">
		  <div class="col-12"> <img class="img-fluid" src={"/uchuuSushi.jpg"}/>
		  </div>
		</div>
	  </div>
		</header>
	<section id="description" class="bg-light">
	  <div class="container">
		<div class="row">
		  <div class="col-12 text-center">
			<h4 class="text-uppercase section-title">what we do</h4>
			<p class="lead">Doorstep Yummy aims to bring the pleasures of a Michelin starred restaraunt straight to your door. Our diverse team of world-class chefs are trained in preparing the finest, most authentic global cuisine. Scroll down to find out more about our chefs and their specialties.</p>
			<a class="btn btn-outline-primary">
					<Link to="/BrowsebyChef">Our Chefs</Link>
			</a> 
		  </div>
		</div>
	  </div>
	</section>
	
	<section class="bg-white">
	  <div class="container-fluid">
	   <div class="row">
		<div class="col-12 text-center">
		  <h4 class="section-title text-uppercase">Our chefs</h4>
		 </div>
		</div>
		<div class="row">
		  <div class="col-12 col-sm-12 col-md-4">
<div class="card"> <img class="card-img-top" src={"/placeholder.png"} alt="Card image cap"/>
			  <div class="card-body text-center">
				<h5 class="card-title">Maria Wang</h5>
			  </div>
			</div>
		</div>
		<div class="col-12 col-sm-12 col-md-4">
<div class="card"> <img class="card-img-top" src={"/placeholder.png"} alt="Card image cap"/>
			  <div class="card-body text-center">
				<h5 class="card-title">Natalia Lisiecka</h5>
			  </div>
		  </div>
		</div>
		<div class="col-12 col-sm-12 col-md-4">
			<div class="card"> <img class="card-img-top" src={"/placeholder.png"}alt="Card image cap"/>
			  <div class="card-body text-center">
				<h5 class="card-title">David Singh</h5>
			  </div>
		  </div>
		</div>
	  </div>
		</div>
	</section>
	<footer id="page-footer" class="bg-light">
      <div class="container">
        <span class="text-muted">Doorstep Yummy © 2019</span>
  </div>
    </footer>
	</div>
    );
}

export default Home;
