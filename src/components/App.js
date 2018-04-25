import React from 'react';
import { Header } from './layout/Header';
import { Body } from './layout/Body';
import { Footer } from './layout/Footer';
import { Avatar } from './Avatar';
import { Projects } from './Projects';
import { Contacts } from './Contacts';

export default () => (
  <div className="app">
    <Header />
    <Body>
      <Avatar />
      <Projects />
    </Body>
    <Footer>
      <Contacts />
    </Footer>
  </div>
);
