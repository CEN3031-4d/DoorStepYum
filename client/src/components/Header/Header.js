import React from 'react';
import './Header.css';


const Header = () => {
    return (
<<<<<<< HEAD

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
			<li class="nav-item "> <a class="nav-link" href="/LogIn" >Chef</a> </li>
			<li class="nav-item "> <a class="nav-link" href="#">Customer</a> </li>

=======
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
		<div className="collapse navbar-collapse" id="navbarNav">
		<a className="nav-link" href="http://localhost:3000/Home#">
			<img className="img-fluid" src={ "/logoYum.png" }/> 
		</a>
		  <ul className="navbar-nav ml-auto"> 
			<li className="nav-item "> <a className="nav-link" href="http://localhost:3000/LogIn#" >Log In</a> </li>
			<li className="nav-item "> <a className="nav-link" href="#">Register</a> </li>
>>>>>>> Maria
		  </ul>
		</div>
	  </div>
	</nav>
    )
}

export default Header;
