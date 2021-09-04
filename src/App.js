import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Signup from './components/SignUp';
// import Login from './components/Login';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>
    <Navbar/> 

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      {/* <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route> */}

      <Route>
        <ErrorPage/>
      </Route>
    </Switch>
  </>
  );
}

export default App;


