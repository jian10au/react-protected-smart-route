import React from 'react';
import Landing from './Landing'
import PublicPage from './PublicPage'
import {Switch, Route} from 'react-router-dom'
import ProtectedRouteHOC from './ProtectedRouteHOC'
import Profile from './Profile'

//import the HOC and Component at the same time and pass the component through the component Props in HOC

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/public" component={PublicPage} />
            <ProtectedRouteHOC exact path='/protected' component={Profile} />
        </Switch>
    </div>
  );
}

export default App;
