import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import EventList from './components/EventList';
import ChallengesList from './components/ChallengesList';
import Login from './components/Login';
import Register from './components/Register';
import SingleChallenge from './components/SingleChallenge';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router >
      <div className="App">
        <Header />
        <Route exact path= "/" component={Home}/>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/ChallengesList" component={ChallengesList} />
        <Route exact path="/EventList" component={EventList} />
        <Route exact path="/SingleChallenge/:id" component={SingleChallenge} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
