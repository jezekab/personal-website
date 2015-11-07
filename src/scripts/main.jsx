'use strict';
var React     = require('react');
var Router = require('react-router'); 
var History = Router.HistoryLocation;
var RouteHandler = Router.RouteHandler; 

var Routes = require('./routes.jsx');

Router.run(Routes, History, function(Handler){
  React.render(<Handler/>, document.getElementById('grandeur'));
});
