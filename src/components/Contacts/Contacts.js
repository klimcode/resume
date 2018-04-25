import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <h2 className="fs_32">
          Contacts
        </h2>
        <div className="contacts__content">
          <a className="contacts__item fs_16" href="mailto:disturh@gmail.com">disturh@gmail.com</a>
          <span className="contacts__item fs_16">Telegram: @klimcode</span>
          <br/>
          <a className="contacts__item fs_16" href="https://www.npmjs.com/~klimcode">NPM</a>
          <a className="contacts__item fs_16" href="https://www.facebook.com/klimcode">Facebook</a>
          <a className="contacts__item fs_16" href="https://www.linkedin.com/in/klimcode/">Linkedin</a>
          <a className="contacts__item fs_16" href="https://medium.com/@klimcode">Medium</a>
        </div>
      </div>
    );
  }
}
