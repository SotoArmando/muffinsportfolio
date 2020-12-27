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

import './css/default/index.css';
import './css/default/App.css';
import './css/default/csstransition.css';

import './css/main.scss';
import './css/764px.scss';
import './css/1024px.scss';
import './css/font/roboto.css';
import './css/font/secularone.css';
import './css/safari.scss';
import { set } from 'lodash-es';
import Mobile_dash from './components/mobile_dash';
import Web_dash_portraitmobile from './components/web_dash_portraitmobile';


export default function App() {
  let location = useLocation();
  const { height, width } = window.screen;
	function iOS() {
	  return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	  ].includes(navigator.platform)
	  // iPad on iOS 13 detection
	  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
	}
	
	
  // var mouse_monitor = function (e) {

  //   var x = e.pageX;
  //   var y = e.pageY;
  //   const x_100 = Math.round((x * 100) / width);
  //   const y_100 = Math.round((y * 100) / height);
  //   console.log(x_100 , y_100 );

  //   document.querySelector("html").animate([
  //     // keyframes
  //     { backgroundPosition: x_100+'px' + ' ' + y_100 + 'px' }, 

  //   ], { 
  //     // timing options
  //     composite: "replace",
  //     fill: "forwards",
  //     duration: 1000,
  //   });

  // }
  // window.onload = function () {
  //   this.addEventListener('mousemove', mouse_monitor);
  // }
  return (
    <div id="app">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      <Nav />
      <TransitionGroup>
        <CSSTransition in={true} classNames="clean" key={location.key} timeout={357}>
          <Switch location={location}>
            <Route path="/web/:page" >{(iOS()) ? <Web_dash_portraitmobile /> :<Web_dash />}</Route>
            <Route path="/mobile/:page" ><Mobile_dash /></Route>
            <Route path="/" ><Home_dash /></Route>
          </Switch>
        </CSSTransition>

      </TransitionGroup>
    </div>
  )
}

