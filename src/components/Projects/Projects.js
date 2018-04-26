import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2 className="fs_32">Projects</h2>

        <div className="projects__content">
          <p className="fs_16">A <a href="https://jsbench.me/user/klimcode">collection</a> of JavaScript performance comparisons.</p>
          <p className="fs_16_low">A tiny <a href="https://github.com/klimcode/brief-scaff">scaffolding generator</a> based on a plain text blueprint.</p>
          <p className="fs_16_low">A <a href="https://github.com/klimcode/brief-async">lib</a> to write brief async roadmaps.</p>
          <p className="fs_16_low">A <a href="https://github.com/klimcode/parser-template">tool for parsing</a> data from plain text according to a template.</p>
          <p className="fs_16_low">A cross-platform <a href="https://github.com/Anilator/notekeeper">notes storing software</a> based on Node.js.</p>
          <p className="fs_16_low"><a href="http://elmaripskamp.com/">A website</a> for Elmar Ipskamp, an artist from the Netherlands. It uses Blogger for storing data.</p>
          <p className="fs_16_low"><a href="https://github.com/Anilator/CSS-Temple">My little collection</a> of not so simple CSS decisions.</p>
        </div>
      </div>
    );
  }
}
