import React from 'react';
import './main.scss';
import Header from './layout/header/header';

export default function Main() {
  return (
    <div className="Main">
      <Header />
      <div></div>
      <div></div>
      <img className="logo" src="./catlogo.png" alt="logo"/>
    </div>
  );
}

