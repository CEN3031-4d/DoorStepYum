import React from 'react';
import logo from '../../assets/logo.svg';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div>
			<header id="page-header">
	  			<div class="container-fluid">
	  			</div>
			</header>
			
			<section id="description" class="bg-light">
	 			<div class="container">
					<div class="row">
						<div class="col-12 col-sm-6">
							<img class="img-fluid" src={"/about.jpg"}/>
						</div>
		  				<div class="col-12 col-sm-6">
							<div class="h1">About Us</div>
							<div class="section-body2">
								Tired of ordering fast food? Yummy! aims to bring the pleasures of a home cooked meal straight to your door. Our diverse team of home chefs are trained in preparing the finest, most authentic global cuisine. Take a look at our chefs to find out more about their diverse cuisine.
							</div>
							<div class="text-center">
								<a href="/BrowsebyChef" class="btn btn-default btn-outline-success font-weight-normal" id="requestChefButt">Request a Chef</a>
		  					</div>
		  				</div>
					</div>
	  			</div>
			</section>

			<footer id="page-footer" class="bg-light">
   				<div class="container">
        			<span class="text-muted">Yummy © 2019</span>
  				</div>
    		</footer>
		</div>
    );
} export default About;

