import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App-header">
          <h2>My First Blog</h2>
        </div>
        <p className="App-intro">
          Welcome to my first blog!
        </p>
         <a className="btn btn-primary btn-lg" href="/showall" role="button">See Posts</a>
      <hr></hr>
      </div>
    );
  }
}

export default App;
