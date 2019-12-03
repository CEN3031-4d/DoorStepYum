import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
	
	
	render(){
	if(this.props.exists===false){
		return (

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a id="logopic" class="nav-link" href="/Home">
			<img id="logopic" class="img-fluid" src={ "/yumlogo.png" }/> 
			</a>

			<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<a id="tabs" class="nav-link" href="/About">About</a>
			<a id="tabs" class="nav-link" href="/BrowsebyChef">Chefs</a>
			<a id="tabs" class="nav-link" href="/BrowsebyDish">Dishes</a>
			<ul class="navbar-nav ml-auto"> 

				


				
			<li class="nav-item "> <a class="nav-link" href="/LogIn" >Chef</a> </li>;
			<li class="nav-item "> <a class="nav-link" href="/LogInCustomer">Customer</a> </li>;


				

				  </ul>
				  <a class="nav-link" href="/Cart">
						<img id="cartpic" class="img-fluid" src={ "/cart.png" }/> 
					</a>
				</div>
			  </div>
			</nav>
		    );
	}else {
		return (

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a id="logopic" class="nav-link" href="/Home">
			<img id="logopic" class="img-fluid" src={ "/yumlogo.png" }/> 
			</a>

			<div class="container-fluid">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<a id="tabs" class="nav-link" href="/About">About</a>
			<a id="tabs" class="nav-link" href="/BrowsebyChef">Chefs</a>
			<a id="tabs" class="nav-link" href="/BrowsebyDish">Dishes</a>
			<ul class="navbar-nav ml-auto"> 

				



		

		  </ul>
		  <a class="nav-link" href="/Cart">
				<img id="cartpic" class="img-fluid" src={ "/cart.png" }/> 
			</a>
		</div>
	  </div>
	</nav>
    );
	}


    
}
}

export default Header;
