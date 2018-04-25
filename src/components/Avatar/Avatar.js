import React, { Component } from 'react';
import image from './ava.jpg';

export default class Avatar extends Component {
  render() {
    return (
      <div className="ava">
        <div className="ava_centerer">
          <img src={image} alt=""/>
        </div>
      </div>
    );
  }
}
