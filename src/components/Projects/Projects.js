import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2 className="fs_32">Projects</h2>

        <div className="projects__content">
          <p className="fs_16"><a href="https://koolaur.com/">A website</a> for an illustrator Polina Klimenko. Made with React and Styled Components.</p>
          <p className="fs_16_low"><a href="http://elmaripskamp.com/">A website</a> for Elmar Ipskamp, an artist from the Netherlands. It uses Google Blogger as a data storage easy to manage.</p>
          <p className="fs_16_low">A <a href="https://jsbench.me/user/klimcode">collection</a> of JavaScript performance comparisons.</p>
          <p className="fs_16_low"><a href="https://github.com/klimcode/npfe">NPFE</a> is a tool for creating New Projects From Existing repositories.</p>
          <p className="fs_16_low">A tiny <a href="https://github.com/klimcode/brief-scaff">scaffolding generator</a> based on a plain text blueprint.</p>
          <p className="fs_16_low"><a href="https://github.com/klimcode/brief-switch">brief-switch</a> is a functional replacement for a switch-statement.</p>
          <p className="fs_16_low"><a href="https://github.com/klimcode/brief-async">brief-async</a> is a promise-based lib for managing async flows.</p>
          <p className="fs_16_low">A <a href="https://github.com/klimcode/parser-template">lib for parsing</a> data from plain text according to a template.</p>
          <p className="fs_16_low"><a href="https://github.com/Anilator/CSS-Temple">My little collection</a> of not so simple CSS decisions.</p>
        </div>
      </div>
    );
  }
}
