import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    return (
      <div className="app__body">
        <div className="app__container">
          {this.props.children}
        </div>
        <div className="app__container">
          Projects
        </div>
      </div>
    );
  }
}
