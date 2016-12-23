'use strict';

var Yeelight = require('../lib/yeelight').default;
const yeelight = new Yeelight({verbose: true, discoveryTimeout: 100});

yeelight
  .discover()
  .then((devices) => console.log(devices.length));