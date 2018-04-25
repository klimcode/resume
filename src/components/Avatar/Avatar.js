import React, { Component } from 'react';
import image from './ava.jpg';

export default class Avatar extends Component {
  render() {
    return (
      <div className="ava">
        <img src={image} alt=""/>
      </div>
    );
  }
}
