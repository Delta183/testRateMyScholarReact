import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import HomeCompoment from './components/Home';
import Navbar from './components/NavbarComponent';
// import LoginComponent from './components/Login'
//import RegisterCompoment from './components/Register'



function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
      </Router>
    </React.Fragment>
  );
}

export default App;
