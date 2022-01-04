
import './App.css';
import {Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Login from './pages/Login';
import DashboardContent from './pages/Dashboard/Dashboard';
import ContainerInfo from './pages/Dashboard/ContainerInfo';
import ContainerScore from './pages/Dashboard/ContainerScore';
import ContainerSubject from './pages/Dashboard/ContainerSubject';

import ContainerExtra from './pages/Dashboard/ContainerExtra';


function App() {
  return (
    
    <div className="App">
     <Switch>
       <Route exact path="/" component={Login}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path = "/addUser" component={AddUser}/>
       <Route exact path = "/dashboard" component={ContainerInfo}/>
       <Route exact path="/score" component={ContainerScore}/>
       <Route exact path="/subject" component={ContainerSubject}/>
       <Route exact path="/extra" component={ContainerExtra}/>
       <Route exact path = "/editUser/:id" component={EditUser}/>

     </Switch>
    </div>
    
  );
}

export default App;
