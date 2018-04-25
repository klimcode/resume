import React from 'react';
import { Header } from './layout/Header';
import { Body } from './layout/Body';
import { Footer } from './layout/Footer';
import { Avatar } from './Avatar';

export default () => (
  <div className="app">
    <Header />
    <Body>
      <Avatar />
    </Body>
    <Footer />
  </div>
);
