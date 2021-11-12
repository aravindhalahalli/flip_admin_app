import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import PrivateRoute from "./components/HOC/PrivateRoute";
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <PrivateRoute exact path="/" component={Home} />
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
       </Switch>
     </Router>
    </div>
  )
}

export default App;
