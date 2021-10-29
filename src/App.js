
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Login from './pages/Login';
import DashboardContent from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path = "/addUser" component={AddUser}/>
       <Route exact path = "/dashboard" component={DashboardContent}/>
       <Route exact path = "/editUser/:id" component={EditUser}/>

     </Switch>
    </div>
  );
}

export default App;
