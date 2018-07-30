import React, { Component } from 'react';
import './style/usage/core/reset.scss';
// import Tabbar from './pages/home/views/Home';
import { Ui as Home } from './pages/home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mine from '../src/pages/home/views/mine'

class App extends Component {
  render() {
    console.log(this)
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/user" component={Mine}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
