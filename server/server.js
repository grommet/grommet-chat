// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var compression = require('compression');
var Ddos = require('ddos');
// increase ddos burst to avoid false positives with this app
var ddos = new Ddos({ burst: 80 });
var express = require('express');
var http = require("http");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var busboyBodyParser = require('busboy-body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var rest = require('./rest');
var throng = require('throng');

var PORT = process.env.PORT || 8119;
var PREFIX = '/';
if (process.env.PREFIX) {
  PREFIX = '/' + process.env.PREFIX + '/';
}

var WORKERS = process.env.WEB_CONCURRENCY || 1;

throng(WORKERS, start);

function start () {
  var app = express();

  app.use(ddos.express);

  app.use(compression());

  app.use(cookieParser());

  app.use(morgan('tiny'));

  app.use(bodyParser.json());

  app.use(busboyBodyParser());

  app.use('/rest', rest.router);

  // UI serving
  app.use('/', express.static(path.join(__dirname, '/../dist')));
  app.get('/*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
  });

  var server = http.createServer(app);

  rest.setup(server, PREFIX);

  server.listen(PORT);

  console.log('Server started, listening at: http://localhost:' + PORT);
}
