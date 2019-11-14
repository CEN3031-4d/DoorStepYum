import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import BrowsebyChef from "./views/BrowsebyChef/BrowsebyChef"
import BrowsebyDish from "./views/BrowsebyDish/BrowsebyDish"
import About from "./views/About/About"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => {
  return (
    
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
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
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
