import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
'use strict'


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeStyle={{
                    color: "grey"
                  }} to="/">
                    Polly Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/createpost">Create Post</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" to="/showall">
                    <span>Show All
                    </span>
                  </NavLink>
                </li>

              </ul>
            </div>
            <hr></hr>
          </div>
        </nav>
        {/*
          PASS IN CHILDREN
          */}
        {this.props.children}
      </div>
    )
  }

}
