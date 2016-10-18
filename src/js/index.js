// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';
promisePolyfill();

import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory, useBasename } from 'history';
import { routes } from './Routes';

// import store from './store';
// import { initialize as initializeSession } from './Session';

let history;
if (window && window.location &&
  'grommet.us.rdlabs.hpecorp.net' === window.location.host) {
  history = useBasename(createHistory)({ basename: '/chat' });
} else {
  history = browserHistory;
}

// let wsProtocol = 'ws';
// if (window.location.protocol === 'https:') {
//   wsProtocol = 'wss';
// }
//
// // The port number needs to align with devServerProxy and websocketHost in grommet-toolbox.config.js
// let hostName = NODE_ENV === 'development' ? 'localhost:8119' : window.location.host;
// apiConfigure({
//   urlPrefix: ROUTE_PREFIX,
//   webSocketUrl: `${wsProtocol}://${hostName}${ROUTE_PREFIX}/ws`
// });

let element = document.getElementById('content');

ReactDOM.render((
  <Router routes={routes} history={history} />
), element);

document.body.classList.remove('loading');

// initializeSession();
