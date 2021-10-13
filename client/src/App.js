
import Home from './components/Home';

import LoggedIn from './components/LoggedIn';

import { Route, Switch } from "react-router";

const App=()=>{
  return (
    <>
      <Switch>
            {/* <Route exact path='/' component={Home}></Route> */}
            <Route exact path='/' component={LoggedIn}></Route>
        </Switch>
    </>
  );
}

export default App;
