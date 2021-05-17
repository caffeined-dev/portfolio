import React from 'react';
import './main.scss';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Games from './routes/games/games';
import Projects from './routes/projects/projects';
import Contact from './routes/contact/contact';

export default function Main() {
  return (
    <HashRouter>
      <div className="Main">
        <Header />
        <div className="v-spacer"></div>
        <div className="page">
          <Switch>
            <Route path='/projects'><Projects /></Route>
            <Route path='/games'><Games /></Route>
            <Route path='/contact'><Contact /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </div>
        <Footer />
        <img className="logo" src="./catlogo.png" alt="logo" />
      </div>
    </HashRouter>
  );
}

