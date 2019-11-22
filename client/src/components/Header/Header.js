import React from 'react';
import './Header.css';


const Header = () => {
    return (

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
		<div class="collapse navbar-collapse" id="navbarNav">
				
		<a class="nav-link" href="/Home">
			<img class="img-fluid" src={ "/logoYum.png" }/> 
		</a>
		<a class="nav-link" href="/About">About</a>
		  <ul class="navbar-nav ml-auto"> 
			<li class="nav-item "> <a class="nav-link" href="/LogIn" >Log In</a> </li>
			<li class="nav-item "> <a class="nav-link" href="#">Register</a> </li>
			<a class="nav-link" href="/Cart">
				<img class="img-fluid" src={ "/cart.png" }/> 
			</a>
		  </ul>
		</div>
	  </div>
	</nav>
    )
}

export default Header;
