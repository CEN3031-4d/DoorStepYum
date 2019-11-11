import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

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
		  <div className="col-12"> <img className="img-fluid" src={"/uchuuSushi.jpg"}/>
		  </div>
		</div>
	  </div>
		</header>
	<section id="description" className="bg-light">
	  <div className="container">
		<div className="row">
		  <div className="col-12 text-center">
			<h4 className="text-uppercase section-title">what we do</h4>
			<p className="lead">Doorstep Yummy aims to bring the pleasures of a Michelin starred restaraunt straight to your door. Our diverse team of world-className chefs are trained in preparing the finest, most authentic global cuisine. Scroll down to find out more about our chefs and their specialties.</p>
			<a href="#" className="btn btn-outline-primary">Request a Chef</a> 
		  </div>
		</div>
	  </div>
	</section>
	
	<section className="bg-white">
	  <div className="container-fluid">
	   <div className="row">
		<div className="col-12 text-center">
		  <h4 className="section-title text-uppercase">Our chefs</h4>
		 </div>
		</div>
		<div className="row">
		  <div className="col-12 col-sm-12 col-md-4">
<div className="card"> <img className="card-img-top" src={"/placeholder.png"} alt="Card image cap"/>
			  <div className="card-body text-center">
				<h5 className="card-title">Maria Wang</h5>
			  </div>
			</div>
		</div>
		<div className="col-12 col-sm-12 col-md-4">
<div className="card"> <img className="card-img-top" src={"/placeholder.png"} alt="Card image cap"/>
			  <div className="card-body text-center">
				<h5 className="card-title">Natalia Lisiecka</h5>
			  </div>
		  </div>
		</div>
		<div className="col-12 col-sm-12 col-md-4">
			<div className="card"> <img className="card-img-top" src={"/placeholder.png"}alt="Card image cap"/>
			  <div className="card-body text-center">
				<h5 className="card-title">David Singh</h5>
			  </div>
		  </div>
		</div>
	  </div>
		</div>
	</section>
	<footer id="page-footer" className="bg-light">
      <div className="container">
        <span className="text-muted">Doorstep Yummy © 2019</span>
  </div>
    </footer>
	</div>
    );
}

export default Home;
