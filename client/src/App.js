import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
<<<<<<< HEAD

import ChefProfile from "./views/ChefProfile/ChefProfile"
import FoodProfile from "./views/FoodProfile/FoodProfile"

import BrowsebyChef from "./views/BrowsebyChef/BrowsebyChef"
import BrowsebyDish from "./views/BrowsebyDish/BrowsebyDish"
import About from "./views/About/About"

=======
import LogIn from "./views/LogIn/LogIn"
import Account from "./views/Account/Account"
>>>>>>> Maria
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import AllChefs from "./components/AllChefs/AllChefs"
import EditChef from "./components/EditChef/EditChef"
import CreateChef from "./components/CreateChef/CreateChef"
import ViewChefProfile from "./components/ViewChefProfile/ViewChefProfile"


const App = () => {
  return (
    
    <div>
        <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
<<<<<<< HEAD

        <Route exact path="/BrowsebyChef" component={BrowsebyChef}/>
        <Route exact path="/">
				<Redirect to="/BrowsebyChef"/>
			  </Route>
        <Route exact path="/BrowsebyDish" component={BrowsebyDish}/>
        <Route exact path="/">
				<Redirect to="/BrowsebyDish"/>
			  </Route>
        <Route exact path="/About" component={About}/>
        <Route exact path="/">
				<Redirect to="/About"/>
			  </Route>

        <Route exact path="/Chefs" component={AllChefs}/>
        <Route exact path="/Chefs/view/:id" component={ViewChefProfile}/>
        <Route exact path="/Chefs/edit/:id" component={EditChef}/>
        <Route path="/Chefs/create" component={CreateChef}/>

        <Route path="/ChefProfile" component={ChefProfile}/>
        <Route path="/FoodProfile" component={FoodProfile}/>

=======
		
        <Route exact path="/Chefs" component={Chefs}/>
        <Route exact path="/Chefs/edit/:id" component={EditChef}/>
        <Route path="/Chefs/create" component={CreateChef}/>
		<Route exact path="/LogIn" component={LogIn}/>
		<Route exact path="/Account" component = {Account}/>
>>>>>>> Maria
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}
export default App;
