import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './components/home';
import Login from './components/user/login';
import Register from './components/user/register';
import Forgot from './components/user/forgot';
import Update from './components/user/update';
function App() {
  return <>
    <Router>
      <Switch>
        <Route path ="/home" component={Home}/>
        <Route path ="/user/login" component={Login}/>
        <Route path ="/user/register" component={Register}/>
        <Route path ="/user/forgot-password" component={Forgot}/>
        <Route path ="/user/update-password" component={Update}/>
        <Route path ="/" component={Home}/>
      </Switch>
    </Router>
  </>
}

export default App;
