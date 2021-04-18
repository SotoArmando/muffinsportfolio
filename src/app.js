import './css/default/index.css';
import './css/default/App.css';
import './css/default/csstransition.css';

import './css/main.scss';
import './css/764px.scss';
import './css/1024px.scss';
import './css/font/roboto.css';
import './css/font/secularone.css';
import './css/safari.scss';
import './firstforge.scss';

import React   from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Home_dash from './components/home_dash';
import Web_dash from './components/web_dash';
import Nav from './containers/nav';


import { set } from 'lodash-es';
import Mobile_dash from './components/mobile_dash';
import Web_dash_portraitmobile from './components/web_dash_portraitmobile';
import Projectfile from './containers/projectfile';
import { useEffect } from 'react';
import { useState } from 'react';




export default function App() {
  let location = useLocation();
  let [progress, setProgress] = useState(0);
  const { height, width } = window.screen;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

	function iOS() {
	  return "ontouchend" in document
	}
 
  document.querySelector('body').style.width = '';
  return (
    <div id="app allsize" className="relative">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <Nav  {...{progress}} />
      <TransitionGroup>
        <CSSTransition in={true} classNames="clean" key={location.key} timeout={357}>
          <Switch location={location}>
            <Route path="/web/:page" >{(iOS()) ? <Web_dash_portraitmobile /> :<Web_dash />}</Route>
            <Route path="/projectfile/:project" ><Projectfile/></Route>
            <Route path="/" ><Home_dash {... {progress, setProgress}} /></Route>
          </Switch>
        </CSSTransition>

      </TransitionGroup>
    </div>
  )
}

