'use strict';
var React     = require('react');
var RouteHandler = require('react-router').RouteHandler; 

var Menu   = require('./Menu/Menu.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Menu />
        <RouteHandler />
      </div>
      )
  }
});

module.exports = App;
