import React from 'react';
import './App.css';
import UploadForm from './FileUpload';
import Home from './Home';
import Navigator from './NavBar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Navigator/>
     <Switch>
      <Route path="/batch_file" component={UploadForm}></Route>
      <Route path="/" exact component={Home}></Route>
     </Switch>
     </Router> 
    </div>

  );
}

export default App;
