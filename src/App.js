import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
       </Switch>
     </Router>
    </div>
  )
}

export default App;
