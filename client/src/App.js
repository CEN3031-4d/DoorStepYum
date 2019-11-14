import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import LogIn from "./views/LogIn/LogIn"
import Account from "./views/Account/Account"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Chefs from "./components/Chefs/Chefs"
import EditChef from "./components/EditChef/EditChef"
import CreateChef from "./components/CreateChef/CreateChef"


const App = () => {
  return (
    <div>
        <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
		
        <Route exact path="/Chefs" component={Chefs}/>
        <Route exact path="/Chefs/edit/:id" component={EditChef}/>
        <Route path="/Chefs/create" component={CreateChef}/>
		<Route exact path="/LogIn" component={LogIn}/>
		<Route exact path="/Account" component = {Account}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}
export default App;
